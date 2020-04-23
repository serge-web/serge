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
import assetDialogFor from '../mapping/helpers/asset-dialog-for'

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({ position, type, force, tooltip, controlledBy, selected }) => 
  <MapContext.Consumer>
    {
      (context): React.ReactNode => {
        const divIcon = L.divIcon({
          iconSize: [40, 40],
          className: cx(styles['asset-icon'], styles[force], 
            selected ? styles[`selected`]:null, styles[`platform-type-${type}`])
        })
      
        const clickEvent = (): void => {
          const form = assetDialogFor(context.props.playerForce, force, controlledBy, context.props.phase)
          console.log(form)
          context.props.setCurrentForm(form)
          context.props.setShowMapBar(true)
        }
      
        return <Marker position={position} icon={divIcon} onclick={clickEvent}>
          <Tooltip>{tooltip}</Tooltip>
        </Marker>
      }
    }
  </MapContext.Consumer>


export default AssetIcon
