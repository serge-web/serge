import React, { useContext } from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { capitalize } from 'lodash'
import { lightOrDark } from '../map-control/helpers/lightOrDark'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import context */
import { MapContext } from '../mapping'
import { SelectedAsset } from '@serge/custom-types'

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, icType: string, destroyed?: boolean, icSelected?: boolean, imageSrc?: string): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
  destroyed ? styles.destroyed : null,
  icSelected ? styles.selected : null,
  imageSrc ? styles['asset-icon-with-image'] : styles[`platform-type-${icType}`]
))
export const checkUrl = (url: string): string => {
  if (/^https?|^\/\/?|base64/.test(url)) {
    return url
  } else {
    return `/static/media/src/local/asset-icon/counters/${url}`
  }
}

export const getIcon = (icType: string, color?: string, destroyed?: boolean, icSelected?: boolean, imageSrc?: string): JSX.Element => {
  return (
    <div className={styles['asset-icon-background']} style={{ backgroundColor: color }}>
      {imageSrc ? <img src={checkUrl(imageSrc)} alt={icType} className={styles.img}/> : <div className={cx(
        styles['asset-icon'],
        styles['asset-icon-fw'],
        destroyed ? styles.destroyed : null,
        icSelected ? styles.selected : null,
        styles[`platform-type-${icType}`],
        color && lightOrDark(color) === 'light' && styles['asset-icon-invert']
      )}/>}
    </div>
  )
}

/* Render component */
export const AssetIcon: React.FC<PropTypes> = ({
  uniqid,
  name,
  contactId,
  position,
  type,
  force,
  perceivedForceClass,
  perceivedForceColor,
  visibleTo,
  controlledBy,
  condition,
  status,
  tooltip,
  selected,
  locationPending,
  imageSrc
}) => {
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { setShowMapBar, setSelectedAsset, selectedAsset } = props

  // TODO: switch to received isDestroyed in props, using value from `Route`
  const isDestroyed: boolean = !!condition && (condition.toLowerCase() === 'destroyed' || condition.toLowerCase() === 'mission kill')

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: typeof imageSrc !== 'undefined' && `<div style="background-color: ${perceivedForceColor}"><img src="${checkUrl(imageSrc)}" alt="${type}"></div>`,
    className: getIconClassname(perceivedForceClass || '', type, isDestroyed, selected, imageSrc)

  })

  // TODO - set the `divIcon` (or marker) background color according to
  // perceivedForceColor, not using the perceivedForceClass
  if (!perceivedForceClass) {
    console.log('should set background to', perceivedForceColor)
  }

  const clickEvent = (): void => {
    if (selectedAsset && selectedAsset.uniqid === uniqid) {
      // clear selected asset, since it has been clicked again
      // @ts-ignore
      setSelectedAsset(undefined)
      setShowMapBar(false)
    } else {
      // select this asset
      const selection: SelectedAsset = {
        uniqid: uniqid,
        contactId: contactId,
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

  return <Marker position={position} icon={divIcon} onclick={clickEvent}>
    <Tooltip>{capitalize(tooltip)}</Tooltip>
  </Marker>
}

export default AssetIcon
