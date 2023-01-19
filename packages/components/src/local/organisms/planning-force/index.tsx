import cx from 'classnames'
import L, { LatLng, latLng, LeafletMouseEvent } from 'leaflet'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import React, { useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { LayerGroup, useMap } from 'react-leaflet-v4'
import AssetIcon from '../../asset-icon'
import { AssetRow } from '../planning-assets/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

const PlanningForces: React.FC<PropTypes> = ({ assets, selectedAssets, setSelectedAssets, interactive }) => {
  const mcg = L.markerClusterGroup()
  const getAssetIcon = (asset: AssetRow, isSelected: boolean, isDestroyed: boolean): string => {
    const [imageSrc, bgColor] = asset.icon.split(',')
    /** note: we only fill in the background for icons that require shading.  The NATO assets,
      * that begin with `n_` don't require background shading
      */
    const shadeBackground = !imageSrc.startsWith('n_')
    const shadeBackgroundStyle = shadeBackground ? { backgroundColor: bgColor } : {}
    return (
      ReactDOMServer.renderToString(<div className={cx({ [styles.iconbase]: true, [styles.selected]: isSelected })} style={shadeBackgroundStyle}>
        <AssetIcon imageSrc={imageSrc} destroyed={isDestroyed} isSelected={isSelected} health={asset.health} />
      </div>)
    )
  }

  const MarkerCluster = ({ markers }: {markers: AssetRow[]}) => {
    const map = useMap()

    useEffect(() => {
      mcg.clearLayers()
      const markersWithLocation = markers.filter((row: AssetRow) => row.position)
      const markerList = markersWithLocation.map((asset) => getMarkerOption(asset))
      mcg.addLayers(markerList)

      // add the marker cluster group to the map
      map.addLayer(mcg)
    }, [markers, map])

    return null
  }

  const handleAssetClick = (assetId: string): void => {
    const idx = selectedAssets.indexOf(assetId)
    if (idx !== -1) {
      selectedAssets.splice(idx, 1)
    } else {
      selectedAssets.push(assetId)
    }
    setSelectedAssets([...selectedAssets])
  }

  const getMarkerOption = (asset: AssetRow) => {
    const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
    const isSelected = selectedAssets.includes(asset.id)
    const isDestroyed = asset.health && asset.health === 0

    const interactiveIcon = (): void => {
      if (interactive) {
        handleAssetClick(asset.id)
      }
    }

    return (
      L.marker(new L.LatLng(loc.lat, loc.lng),
        {
          pmIgnore: interactive,
          interactive: interactive,
          icon: L.divIcon({
            iconSize: [30, 30],
            html: getAssetIcon(asset, isSelected, !!isDestroyed),
            className: styles['map-icon']
          })
        })
        .addTo(mcg)
        .bindPopup(asset.name)
        .on('click', interactiveIcon)
        .on('mouseover', (ev: LeafletMouseEvent) => ev.target.openPopup())
    )
  }

  return <>
    {
      assets.length > 0 &&
      <LayerGroup key={'first-forces-layer'}>
        <MarkerCluster markers={assets} />
      </LayerGroup >
    }
  </>
}

export default PlanningForces
