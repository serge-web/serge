import { hexToRGBA } from '@serge/helpers'
import cx from 'classnames'
import L, { LatLng, latLng, LeafletMouseEvent, MarkerCluster, MarkerClusterGroup, MarkerClusterGroupOptions } from 'leaflet'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import moment from 'moment'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Circle, LayerGroup, Marker, Tooltip, useMap } from 'react-leaflet-v4'
import AssetIcon from '../../asset-icon'
import SymbolAssetIcon from '../../symbol-asset-icon'
import { AssetRow } from '../planning-assets/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { SupportPanelContext } from '../support-panel'
import { isEqual } from 'lodash'

/**
 * organise assets into buckets, by location
 */
interface LocationBucket {
  /**
   * the location
   */
  index: L.LatLng
  /**
   *  assets at this location
   */
  assets: AssetRow[]
}

const PlanningForces: React.FC<PropTypes> = ({
  label, assets, currentAssets, forceColor, setSelectedAssets,
  interactive, clusterIcons, hideName, showMezRings, showData, selectedAssets
}) => {
  const [clusterGroup, setClusterGroup] = useState<MarkerClusterGroup | undefined>(undefined)
  const [clustereredMarkers, setClusteredMarkers] = useState<AssetRow[]>([])
  const [rawMarkers, setRawMarkers] = useState<AssetRow[]>([])
  const { assetsCache } = useContext(SupportPanelContext)
  const [rawRangeRings, setRawRangeRings] = useState<React.ReactElement[]>([])
  const [clusteredRangeRings, setClusteredRangeRings] = useState<React.ReactElement[]>([])

  // we need to track change in state of show mez rings - since we force an update on new value
  const [lastShowMez, setLastShowMez] = useState<boolean>(showMezRings)
  const [lastHideName, setLastHideName] = useState<boolean>(!!hideName)

  const map = useMap()

  const createClusterIcon = (): MarkerClusterGroupOptions => {
    return {
      iconCreateFunction: function (cluster: MarkerCluster): L.DivIcon {
        const markers = cluster.getAllChildMarkers()
        const size = markers.length / 5 + 40
        const color = styles.circle
        const rgb = hexToRGBA(forceColor, 0.6)
        const html = ReactDOMServer.renderToString(<div style={{ backgroundColor: rgb }} className={cx({ [color]: true })} >{markers.length}</div>)
        return L.divIcon({ html: html, className: cx({ [styles.mycluster]: true }), iconSize: L.point(size, size) })
      },
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      removeOutsideVisibleBounds: true,
      spiderfyDistanceMultiplier: 4,
      animate: true
    }
  }

  useEffect(() => {
    if (showData) {
      if (clusterGroup === undefined) {
        // no cluster group. See if the map already has one for this force
        let existingCluster: MarkerClusterGroup | undefined
        map.eachLayer(function (layer) {
          if ((layer instanceof L.MarkerClusterGroup) && ((layer as any).clusterId === forceColor)) {
            // yes, this is a marker cluster for this force
            existingCluster = layer as MarkerClusterGroup
          }
        })
        if (!existingCluster) {
          // no existing cluster found, generate one
          existingCluster = L.markerClusterGroup(createClusterIcon())
          const anyLayer = existingCluster as any
          // store the force color in the cluster id
          anyLayer.clusterId = forceColor
          map.addLayer(existingCluster)
        }
        if (existingCluster) {
          setClusterGroup(existingCluster)
        } else {
          console.warn('Failed to find or generate a cluster group')
        }
      }
      const clustered: AssetRow[] = []
      let raw: AssetRow[] = []
      assets.forEach((asset) => {
        // check we have position
        if (asset.position) {
          if (!clusterIcons || selectedAssets.includes(asset.id) || (currentAssets && currentAssets.includes(asset.id))) {
            raw.push(asset)
          } else {
            clustered.push(asset)
          }
        }
      })
      // special processing. If there aren't too may assets, cluster any that share a location
      if (raw.length < 2000) {
        const cluster2 = clusterRawIcons(raw)
        // pull the clustered ones out of the raw listing
        raw = raw.filter((item) => !cluster2.includes(item))
        // and add them to the clustered list
        clustered.push(...cluster2)
      }
      // determine if show mez has changed - since we force an update
      const mezChanged = lastShowMez !== showMezRings
      if (mezChanged) {
        setLastShowMez(mezChanged)
      }
      const nameChanged = lastHideName !== !!hideName
      if (nameChanged) {
        setLastHideName(!!hideName)
      }
      if (nameChanged || mezChanged || !isEqual(clustereredMarkers, clustered)) {
        // console.log('> update clustered', label, clustered.length)
        setClusteredMarkers(clustered)
        setClusteredRangeRings(showMezRings ? getRingsFor(clustered) : [])
      }
      if (nameChanged || mezChanged || !isEqual(rawMarkers, raw)) {
        // console.log('> update raw', label, raw.length)
        setRawMarkers(raw)
        setRawRangeRings(showMezRings ? getRingsFor(raw) : [])
      }
    } else {
      setClusteredMarkers([])
      setRawMarkers([])
    }
  }, [assets, selectedAssets, currentAssets, clusterIcons, showData, showMezRings, hideName])

  /** utility method to find assets at the same location, and cluster them */
  const clusterRawIcons = (assets: AssetRow[]): AssetRow[] => {
    const buckets: LocationBucket[] = []
    // first put them into buckets
    assets.forEach((asset: AssetRow) => {
      const pos = asset.position
      if (pos) {
        const bucket = buckets.find((bucket) => bucket.index.equals(pos))
        if (!bucket) {
          buckets.push({ index: pos, assets: [asset] })
        } else {
          bucket.assets.push(asset)
        }
      }
    })
    const fullBuckets = buckets.filter((bucket) => bucket.assets.length > 1)
    const toCluster = fullBuckets.map((bucket): AssetRow[] => bucket.assets).flat() as AssetRow[]
    return toCluster
  }

  const getRingsFor = (assets: AssetRow[]): React.ReactElement[] => {
    // create a ring for each clustered marker
    const rings: React.ReactElement[] = []
    assets.forEach((asset: AssetRow) => {
      const attrs = asset.attributes
      // try for the two range attributes
      const range: string = attrs['MEZ Range'] // just use mez range || attrs.Range
      // only plot range rings for SAM sites
      // const isSAM = asset.platformType.indexOf('sam') >= 0
      if (range) {
        const index = range.indexOf(' km')
        const rangeKm = index > 0 ? parseFloat(range.substring(0, index)) : parseFloat(range)
        const centre = asset.position ? asset.position : latLng([0, 0])
        const rad = rangeKm * 1000
        if (rad > 0) {
          rings.push(<Circle center={centre} key={asset.id} radius={rad} pathOptions={{ color: forceColor, fillOpacity: 0.1 }} />)
        }
      }
    })
    return rings
  }

  const getAssetIcon = (asset: AssetRow, isSelected: boolean, isDestroyed: boolean, hideNameVal: boolean): string => {
    const [imageSrc, bgColor] = asset.icon.split(',')

    /** note: we only fill in the background for icons that require shading.  The NATO assets,
      * that begin with `n_` don't require background shading
      */
    const shadeBackground = !imageSrc.startsWith('n_')
    const shadeBackgroundStyle = shadeBackground ? { backgroundColor: bgColor } : {}
    return (
      ReactDOMServer.renderToString(<div className={cx({ [styles.iconbase]: true, [styles.selected]: isSelected })} style={shadeBackgroundStyle}>
        {!asset.sidc && <AssetIcon imageSrc={imageSrc} destroyed={isDestroyed} isSelected={isSelected} health={asset.health} />}
        {asset.sidc && <SymbolAssetIcon force={asset.force} sidc={asset.sidc} iconName={asset.name} health={asset.health} isSelected={isSelected} hideName={hideNameVal} assetsCache={assetsCache} />}
      </div>)
    )
  }

  const MarkerCluster = ({ markers }: { markers: AssetRow[] }) => {
    useEffect(() => {
      if (clusterGroup) {
        clusterGroup.clearLayers()
        const markersWithLocation = markers.filter((row: AssetRow) => row.position)
        const markerList = markersWithLocation.map((asset) => getClusteredMarkerOption(asset))
        if (markerList.length) {
          clusterGroup.addLayers(markerList)
        }
      }
    }, [markers, clusterGroup, clusteredRangeRings])

    return null
  }

  const handleAssetClick = (assetId: string): void => {
    const idx = selectedAssets.indexOf(assetId)
    if (idx !== -1) {
      selectedAssets.splice(idx, 1)
    } else {
      selectedAssets.push(assetId)
    }
    setSelectedAssets && setSelectedAssets([...selectedAssets])
  }

  const getRawMarkerOption = (asset: AssetRow) => {
    const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
    const isSelected = selectedAssets.includes(asset.id)
    const isCurrent = currentAssets && currentAssets.includes(asset.id)
    const isDestroyed = asset.health && asset.health === 0
    return {
      eventHandlers: {
        click: (): void => {
          if (interactive) {
            handleAssetClick(asset.id)
          }
        }
      },
      key: `asset-icon-${asset.id}`,
      position: loc,
      icon: L.divIcon({
        iconSize: [30, 30],
        html: getAssetIcon(asset, isSelected, !!isDestroyed, isCurrent ? false : !!hideName),
        className: styles['map-icon']
      })
    }
  }

  const getClusteredMarkerOption = (asset: AssetRow) => {
    const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
    const isSelected = selectedAssets.includes(asset.id)
    const isDestroyed = asset.health && asset.health === 0
    const isCurrent = currentAssets && currentAssets.includes(asset.id)

    const interactiveIcon = (): void => {
      if (interactive) {
        handleAssetClick(asset.id)
      }
    }

    asset.id === 'Blue.6.94' && console.log('Debug. Rendering clustered marker id', label, asset.id, moment().toISOString())

    return (
      L.marker(new L.LatLng(loc.lat, loc.lng),
        {
          pmIgnore: interactive,
          interactive: interactive,
          icon: L.divIcon({
            iconSize: [30, 30],
            html: getAssetIcon(asset, isSelected, !!isDestroyed, isCurrent ? false : !!hideName),
            className: styles['map-icon']
          })
        })
        .addTo(clusterGroup as MarkerClusterGroup)
        .bindPopup(labelFor(asset))
        .on('click', interactiveIcon)
        .on('mouseover', (ev: LeafletMouseEvent) => ev.target.openPopup())
    )
  }

  const elapsed = (lastUpdate?: string): string => {
    if (lastUpdate && lastUpdate !== 'unk') {
      return '\n (' + lastUpdate + ')'
    } else {
      return ''
    }
  }

  const labelFor = (asset: AssetRow): string => {
    return asset.name + ', ' + asset.id + elapsed(asset.lastUpdated)
  }

  const iconLayer = useMemo(() => {
    return (
      <>
        {
          <LayerGroup key={'force-' + label}>
            {rawRangeRings}
            {clusteredRangeRings}
            <MarkerCluster markers={clustereredMarkers} />
            {rawMarkers && rawMarkers.map((asset: AssetRow) => {
              const markerOption = getRawMarkerOption(asset)
              return <Marker
                pmIgnore
                interactive={interactive}
                {...markerOption}
              >
                <Tooltip>{labelFor(asset)}</Tooltip>
              </Marker>
            })}
          </LayerGroup >
        }
      </>
    )
  }, [clustereredMarkers, rawMarkers, rawRangeRings, clusteredRangeRings])

  return iconLayer
}

export default PlanningForces
