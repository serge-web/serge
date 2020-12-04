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

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForce: string, icType: string, icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForce],
  icSelected ? styles.selected : null,
  styles[`platform-type-${icType}`]
))

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({
  uniqid,
  name,
  position,
  type,
  force,
  perceivedForce,
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
    className: getIconClassname(perceivedForce, type, selected)
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
        perceivedForce,
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
