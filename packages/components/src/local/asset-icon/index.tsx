import React, { useContext, useEffect, useState } from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { capitalize } from 'lodash'
import { lightOrDark } from '../map-control/helpers/lightOrDark'
import unfetch from 'node-fetch'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import context */
import { MapContext } from '../mapping'
import { SelectedAsset } from '@serge/custom-types'
import { OrientationData } from '../assets/types/asset_info'

// TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
// error based on some webpack version
const fetch = unfetch.bind(window)

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, icType = '', destroyed?: boolean, icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
  destroyed ? styles.destroyed : null,
  icSelected ? styles.selected : null,
  icType && styles[`platform-type-${icType}`]
))
const isUrl = (url: string): boolean => {
  return !/base64/.test(url)
}
export const checkUrl = (url: string): string => {
  if (/^https?|^\/\/?|base64|images\/default_img\//.test(url)) {
    return url
  } else {
    const prefix = '/static/media/src/local/asset-icon/counters/'
    return prefix + url
  }
}

interface GetIconProps {
  icType: string
  color?: string
  destroyed?: boolean
  isSelected?: boolean
  imageSrc?: string
}

const getReverce = (color = ''): string | false => (
  color && lightOrDark(color) === 'light' && styles['asset-icon-invert']
)

export const GetIcon = ({ icType, color = '', destroyed, isSelected, imageSrc }: GetIconProps): React.ReactElement => {
  const [loadStatus, setLoadStatus] = useState(true)
  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setLoadStatus(res) }).catch(() => { setLoadStatus(false) })
  }, [imageSrc])

  return <div className={styles['asset-icon-background']} style={{ backgroundColor: color }}>
    {imageSrc && loadStatus
      ? <div className={styles['asset-icon-with-image']}>
        <img src={checkUrl(imageSrc)} alt={icType} className={cx(getReverce(color), styles.img)} />
      </div>
      : <div className={cx(
        getIconClassname(color, icType, destroyed, isSelected),
        styles['asset-icon-fw'],
        getReverce(color)
      )} />}
  </div>
}

const checkImageStatus = (imageSrc: string | undefined): Promise<boolean> => {
  if (imageSrc && isUrl(imageSrc)) {
    try {
      return fetch(checkUrl(imageSrc), { method: 'HEAD' })
        .then(res => res.status !== 404)
    } catch (error) {
      console.warn(`failed to get "${imageSrc}" image`)
    }
  }
  return new Promise((resolve) => resolve(true))
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
  imageSrc,
  attributes,
  orientationData
}) => {
  const [iconLoadStatus, setIconLoadStatus] = useState(true)
  const [orientLoadStatus, setOrientLoadStatus] = useState(true)
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { setShowMapBar, setSelectedAsset, selectedAsset } = props

  // TODO: switch to received isDestroyed in props, using value from `Route`
  const isDestroyed: boolean = !!condition && (condition.toLowerCase() === 'destroyed' || condition.toLowerCase() === 'mission kill')

  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setIconLoadStatus(res) }).catch(() => { setIconLoadStatus(false) })
  }, [imageSrc])

  const orientSrc = 'orientation-marker'

  useEffect(() => {
    checkImageStatus(orientSrc).then(res => { setOrientLoadStatus(res) }).catch(() => { setOrientLoadStatus(false) })
  }, [orientSrc])

  // temporarily offset the markers, so we know which one we are seeing
  // const position2 = L.latLng(position.lat + 0.05, position.lng + 0.1)
  // const position3 = L.latLng(position.lat - 0.05, position.lng - 0.1)

  const className = getIconClassname(perceivedForceClass || '', '', isDestroyed, selected)
  const reverceClassName = getReverce(perceivedForceColor)
  const iconImage = iconLoadStatus && typeof imageSrc !== 'undefined'
    ? `<img class="${reverceClassName}" src="${checkUrl(imageSrc)}" alt="${type}">`
    : `<div class="${cx(reverceClassName, styles.img, styles[`platform-type-${type}`])}"></div>`

  const createMarker = (orientation: number, color: string, shade?: boolean): L.DivIcon => {
    console.log('create', name, orientation, shade)
    const orientColor = shade ? '#333' : color
    const orientStr = `style='transform: ${`translate(3px, 5px) rotate(${orientation}deg)`}; background-color: ${orientColor}'`
    const orientImage = orientLoadStatus && typeof orientSrc !== 'undefined'
      ? `<img class="${reverceClassName}" src="${checkUrl(orientSrc)}" alt="${type}">`
      : `<div ${orientStr} class="${cx(reverceClassName, styles.img, styles.orientation)}"></div>`
    return L.divIcon({
      iconSize: [120, 120],
      html: `<div class='${className} ${styles['orient-icon-with-image']}'>${orientImage}</div>`
    })
  }

  // COLLATE LIST OF MARKER ICONS - NOT WORKING
  const orientMarkers: L.DivIcon[] = orientationData ? orientationData.map((item: OrientationData): L.DivIcon => {
    return createMarker(item.orientation, perceivedForceColor, item.shadeOrientation)
  }) : []

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: `<div class='${className} ${styles['asset-icon-with-image']}' style="background-color: ${perceivedForceColor}">${iconImage}</div>`
  })

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
        locationPending: locationPending,
        attributes: attributes
      }
      setSelectedAsset(selection)
      setShowMapBar(true)
    }
  }

  return <>
    { orientMarkers && orientMarkers.map((icon: L.DivIcon, index: number) => {
      return <Marker key={'orient_' + index} position={position} icon={icon}>
      </Marker>
    })}
    <Marker key='asset-icon' position={position} icon={divIcon} onclick={clickEvent}>
      <Tooltip>{capitalize(tooltip)}</Tooltip>
    </Marker>
  </>
}

export default AssetIcon
