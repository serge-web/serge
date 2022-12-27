import cx from 'classnames'
import L, { LatLng, latLng } from 'leaflet'
import React, { useCallback } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { LayerGroup, Marker, Tooltip } from 'react-leaflet-v3'
import AssetIcon from '../../asset-icon'
import { AssetRow } from '../planning-assets/types/props'
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'leaflet/dist/leaflet.css'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningForces: React.FC<PropTypes> = ({ assets, selectedAssets, setSelectedAssets, interactive }) => {
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

  const markersLimit = {
    fillColor: '#ffffff',
    color: '#007bff',
    weight: 5,
    opacity: 1,
    fillOpacity: 0.8
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

  return <>
    {
      assets.length > 0 &&
      <LayerGroup key={'first-forces-layer'}>
        <MarkerClusterGroup
          showCoverageOnHover={true}
          spiderfyOnMaxZoom={true}
          maxClusterRadius={100}
          polygonOptions={markersLimit}
        >
          {
            interactive &&
              assets.map((asset: AssetRow, index: number) => {
                const markerOption = getMarkerOption(asset, index)

                return <Marker
                  {...markerOption}
                >
                  <Tooltip>{asset.name}</Tooltip>
                </Marker>
              })
          }
          {
            !interactive &&
            assets.map((asset: AssetRow, index: number) => {
              const markerOption = getMarkerOption(asset, index)

              return <Marker
                pmIgnore
                interactive={false}
                {...markerOption}
              >
                <Tooltip>{asset.name}</Tooltip>
              </Marker>
            })
          }
        </MarkerClusterGroup>
      </LayerGroup >
    }
  </>
}

export default PlanningForces
