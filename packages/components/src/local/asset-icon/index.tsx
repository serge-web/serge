import React from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({ position, type, force, tooltip }: PropTypes) => {
  const divIcon = L.divIcon({
    iconSize: [40, 40],
    className: cx(styles['asset-icon'], styles[force], styles[`platform-type-${type}`])
  })
  return <Marker position={position} icon={divIcon} classNa>
    <Tooltip>{tooltip}</Tooltip>
  </Marker>
}

export default AssetIcon
