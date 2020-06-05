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
  uniqid,
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
  const { setShowMapBar, setSelectedAsset, selectedAsset } = useContext(MapContext).props

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    className: cx(styles['asset-icon'], styles[force],
      selected ? styles.selected : null, styles[`platform-type-${type}`])
  })

  const clickEvent = (): void => {
    if (selectedAsset && selectedAsset.uniqid === uniqid) {
      // clear selected asset, since it has been clicked again
      setSelectedAsset(undefined)
      setShowMapBar(false)
    } else {
      // select this asset
      setSelectedAsset({
        uniqid,
        name,
        type,
        force,
        visibleTo,
        controlledBy,
        condition,
        status
      })
      setShowMapBar(true)
    }
  }

  return <Marker position={position} icon={divIcon} onclick={clickEvent}>
    <Tooltip>{capitalize(tooltip)}</Tooltip>
  </Marker>
}

export default AssetIcon
