import React, { useState } from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({ children, position, type, force, tooltip }) => {
  const [showDialogue, setShowDialogue] = useState(false)

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    className: cx(styles['asset-icon'], styles[force], styles[`platform-type-${type}`])
  })

  const clickEvent = (): void => setShowDialogue(true)

  return <Marker position={position} icon={divIcon} onclick={clickEvent}>
    <Tooltip>{tooltip}</Tooltip>
    { showDialogue && <div className={styles.popup}>{children}</div>}
  </Marker>
}

export default AssetIcon
