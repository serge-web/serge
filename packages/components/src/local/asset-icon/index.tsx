import React from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import context */
import { MapContext } from '../mapping'

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({ id, position, type, force, tooltip, controlledBy, selected }) => 
  <MapContext.Consumer>
    {
      (context): React.ReactNode => {
        const divIcon = L.divIcon({
          iconSize: [40, 40],
          className: cx(styles['asset-icon'], styles[force], 
            selected ? styles[`selected`]:null, styles[`platform-type-${type}`])
        })
      
        const clickEvent = (): void => {
          context.props.setShowMapBar(true)
          context.props.setSelectedAsset({
            id,
            position,
            type,
            force,
            controlledBy
          })
        }
      
        return <Marker position={position} icon={divIcon} onclick={clickEvent}>
          <Tooltip>{tooltip}</Tooltip>
        </Marker>
      }
    }
  </MapContext.Consumer>


export default AssetIcon
