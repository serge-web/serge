import cx from 'classnames'
import L, { LatLng, latLng } from 'leaflet'
import React, { useCallback, useState, useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { LayerGroup, Marker, useMap, Tooltip } from 'react-leaflet-v4'
import AssetIcon from '../../asset-icon'
import { AssetRow } from '../planning-assets/types/props'
import { BBox, GeoJsonProperties } from 'geojson'
import 'leaflet/dist/leaflet.css'
import styles from './styles.module.scss'
import useSupercluster from 'use-supercluster'
import { PointFeature } from 'supercluster'
import PropTypes from './types/props'

export const PlanningForces: React.FC<PropTypes> = ({ assets, selectedAssets, setSelectedAssets, interactive }) => {
  const [bounds, setBounds] = useState<BBox>()
  const [zoom, setZoom] = useState(12)
  const map = useMap()

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

  const icons = {}
  const fetchIcon = (count: number) => {
    if (!icons[count]) {
      icons[count] = L.divIcon({
        html: ReactDOMServer.renderToString(<div className={cx({ [styles.cluster]: true })} >
          {count}
        </div>)
      })
    }
    return icons[count]
  }

  // get map bounds
  const updateMap = () => {
    const b = map.getBounds()
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat
    ])
    setZoom(map.getZoom())
  }

  useEffect(() => {
    updateMap()
  }, [map])

  const onMove = useCallback(() => {
    updateMap()
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  const handleAssetClick = (assetId: string): void => {
    const idx = selectedAssets.indexOf(assetId)
    if (idx !== -1) {
      selectedAssets.splice(idx, 1)
    } else {
      selectedAssets.push(assetId)
    }
    setSelectedAssets([...selectedAssets])
  }

  const geoJSONPlaces: Array<PointFeature<GeoJsonProperties>> = assets.map(asset => {
    const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
    return {
      type: 'Feature',
      properties: {
        cluster: false,
        id: asset.id,
        asset: asset,
        name: asset.name
      },
      geometry: {
        type: 'Point',
        coordinates: [loc.lng, loc.lat]
      }
    }
  })

  const { clusters, supercluster } = useSupercluster({
    points: geoJSONPlaces,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 150, maxZoom: 14 }
  })

  const getMarkerOption = useCallback((asset: AssetRow, index: number) => {
    const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
    const isSelected = selectedAssets.includes(asset.id)
    const isDestroyed = asset.health && asset.health === 0
    return {
      eventHandlers: {
        click: (): void => {
          if (interactive) {
            handleAssetClick(asset.id)
          }
        }
      },
      key: `asset-icon-${index}`,
      position: loc,
      icon: L.divIcon({
        iconSize: [30, 30],
        html: getAssetIcon(asset, isSelected, !!isDestroyed),
        className: styles['map-icon']
      })
    }
  }, [selectedAssets])

  const getIconCount = useCallback((count: number, loc: LatLng, id: number) => {
    // const size = 10 + (count / geoJSONPlaces.length) * 40
    return {
      key: `cluster-${id}`,
      position: loc,
      icon: fetchIcon(count)
    }
  }, [selectedAssets])

  return <>
    {
      clusters.length > 0 &&
      <LayerGroup key={'first-forces-layer'}>
        {clusters.map((cluster, index) => {
          const properties = cluster.properties || {}
          // every cluster point has coordinates
          const loc: LatLng = cluster.geometry.coordinates as any || latLng([0, 0])
          const id = cluster.id as number

          // we have a cluster to render
          if (properties.cluster) {
            const markerOption = getIconCount(properties.point_count, loc, id)
            return (
              <Marker
                eventHandlers={{
                  click: () => {
                    const expansionZoom = Math.min(
                    supercluster!.getClusterExpansionZoom(id),
                    20
                    )
                    map.setView(loc, expansionZoom, {
                      animate: true
                    })
                  }
                }}
                {...markerOption}
              />
            )
          }

          // we have a single point (crime) to render
          if (interactive) {
            const markerOption = getMarkerOption(properties.asset, index)

            return (
              <Marker
                {...markerOption}
              >
                <Tooltip>{properties.asset.name}</Tooltip>
              </Marker>
            )
          }

          // we have a single point (crime) to render
          return <Marker
            pmIgnore
            interactive={false}
            {...getMarkerOption(properties.asset, index)}
          >
            <Tooltip>{properties.asset.name}</Tooltip>
          </Marker>
        })}
      </LayerGroup >
    }
  </>
}

export default PlanningForces
