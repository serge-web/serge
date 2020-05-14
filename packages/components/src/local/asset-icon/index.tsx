import React, { useContext } from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { capitalize } from 'lodash'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import context */
import { MapContext } from '../mapping'

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({
  id,
  name,
  position,
  type,
  force,
  visibleTo,
  controlledBy,
  condition,
  status,
  tooltip,
  selected
}) => {
  const { setShowMapBar, setSelectedAsset } = useContext(MapContext).props

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    className: cx(styles['asset-icon'], styles[force],
      selected ? styles.selected : null, styles[`platform-type-${type}`])
  })

  const clickEvent = (): void => {
    setShowMapBar(true)
    setSelectedAsset({
      id,
      name,
      position,
      type,
      force,
      visibleTo,
      controlledBy,
      condition,
      status
    })
  }

  return <Marker position={position} icon={divIcon} onclick={clickEvent}>
    <Tooltip>{capitalize(tooltip)}</Tooltip>
  </Marker>
}

export default AssetIcon
