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
import { SelectedAsset } from '@serge/custom-types'

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, icType: string, destroyed?: boolean, icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
  destroyed ? styles.destroyed : null,
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
  perceivedForceClass,
  visibleTo,
  controlledBy,
  condition,
  status,
  tooltip,
  selected,
  locationPending
}) => {
  const { setShowMapBar, setSelectedAsset, selectedAsset } = useContext(MapContext).props

  const isDestroyed: boolean = !!condition && condition.toLowerCase() === 'destroyed'

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    className: getIconClassname(perceivedForceClass || '', type, isDestroyed, selected)
  })

  const clickEvent = (): void => {
    if (selectedAsset && selectedAsset.uniqid === uniqid) {
      // clear selected asset, since it has been clicked again
      setSelectedAsset(undefined)
      setShowMapBar(false)
    } else {
      // select this asset
      const selection: SelectedAsset = {
        uniqid: uniqid,
        name: name,
        type: type,
        force: force,
        controlledBy: controlledBy,
        condition: condition || 'unknown',
        visibleTo: visibleTo,
        status: status,
        locationPending: locationPending
      }
      setSelectedAsset(selection)
      setShowMapBar(true)
    }
  }

  return <Marker css={{ backgroundColor: '#00f' }} position={position} icon={divIcon} onclick={clickEvent}>
    <Tooltip>{capitalize(tooltip)}</Tooltip>
  </Marker>
}

export default AssetIcon
