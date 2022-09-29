import cx from 'classnames'
import L, { LatLng, latLng } from 'leaflet'
import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { LayerGroup, Marker, Tooltip } from 'react-leaflet'
import AssetIcon from '../../asset-icon'
import { AssetRow } from '../planning-assets/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningForces: React.FC<PropTypes> = ({ assets, selectedAssets, setSelectedAssets }) => {
  // temporarily use alternate icon for opForces
  // const iconForThisForce = opFor ? 'layers.png' : 'marker-icon-2x.png'

  const getAssetIcon = (icon: string, isSelected: boolean, isDestroyed: boolean) => {
    const [imageSrc, bgColor] = icon.split(',')
    return (
      ReactDOMServer.renderToString(<div className={cx({ [styles.iconbase]: true, [styles.selected]: isSelected })} style={{ backgroundColor: bgColor }}>
        <AssetIcon imageSrc={imageSrc} destroyed={isDestroyed} isSelected={isSelected} />
      </div>)
    )
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

  return <>
    {
      assets.length > 0 &&
      <LayerGroup key={'first-forces-layer'}>
        {
          assets.map((asset: AssetRow, index: number) => {
            const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
            const isSelected = selectedAssets.includes(asset.id)

            return <Marker
              onclick={(): void => handleAssetClick(asset.id)}
              key={`asset-icon-${index}`}
              position={loc}
              icon={L.divIcon({
                iconSize: [30, 30],
                html: getAssetIcon(asset.icon, isSelected, false)
              })} >
              <Tooltip>{asset.name}</Tooltip>
            </Marker>
          })
        }
      </LayerGroup >
    }
  </>
}

export default PlanningForces
