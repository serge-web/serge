import L, { LatLng, latLng } from 'leaflet'
import React, { useCallback } from 'react'
import { LayerGroup, Marker, Tooltip } from 'react-leaflet'
import AssetIcon from '../../asset-icon'
// import MarkerClusterGroup from 'react-leaflet-cluster'
import cx from 'classnames'
import * as ReactDOMServer from 'react-dom/server'
import { AssetRow } from '../planning-assets/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningForces: React.FC<PropTypes> = ({ assets, selectedItem }) => {
  // temporarily use alternate icon for opForces
  // const iconForThisForce = opFor ? 'layers.png' : 'marker-icon-2x.png'

  const getAssetIcon = useCallback((icon: string, isSelected: boolean, isDestroyed: boolean) => {
    const [imageSrc, bgColor] = icon.split(',')
    return (
      ReactDOMServer.renderToString(<div className={cx({ [styles.iconbase]: true, [styles.selected]: isSelected })} style={{ backgroundColor: bgColor }}>
        <AssetIcon imageSrc={imageSrc} destroyed={isDestroyed} isSelected={isSelected} />
      </div>)
    )
  }, [])

  return <>
    {
      assets.length > 0 &&
      <LayerGroup key={'first-forces-layer'}>
        {
          // <MarkerClusterGroup chunkedLoading>
          //   {
          assets.map((asset: AssetRow, index: number) => {
            const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
            const isSelected = asset.id === selectedItem

            return <Marker
              key={`asset-icon-${index}`}
              position={loc}
              icon={L.divIcon({
                iconSize: [30, 30],
                html: getAssetIcon(asset.icon, isSelected, false)
              })} >
              <Tooltip>{asset.name}</Tooltip>
            </Marker>
          })
          //   }
          // </MarkerClusterGroup>
        }
      </LayerGroup >
    }
  </>
}

export default PlanningForces
