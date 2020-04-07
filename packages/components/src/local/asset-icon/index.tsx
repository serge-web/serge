import React from 'react'
import cx from 'classnames'
import { Marker } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({ position, icon, force }: PropTypes) =>
  <Marker position={position}>
    <div className={cx(styles['asset-icon'], styles[force])}>
      {icon}
    </div>
  </Marker>

export default AssetIcon
