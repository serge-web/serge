import React, { useContext, useEffect, useState } from 'react'
import cx from 'classnames'
import { Marker, Tooltip } from 'react-leaflet'
import L, { DragEndEvent } from 'leaflet'
import { lightOrDark } from '../map-control/helpers/lightOrDark'
import unfetch from 'node-fetch'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import context */
import { MapContext } from '../mapping'
import { UMPIRE_FORCE } from '@serge/config'

// TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
// error based on some webpack version
const fetch = unfetch.bind(window)

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, icType = '', icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
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
    const prefix = '/static/media/src/local/info-marker/counters/'
    return prefix + url
  }
}

interface GetIconProps {
  icType: string
  color?: string
  isSelected?: boolean
  imageSrc?: string
}

const getReverce = (color = ''): string | false => (
  color && lightOrDark(color) === 'light' && styles['asset-icon-invert']
)

export const GetIcon = ({ icType, color = '', isSelected, imageSrc }: GetIconProps): React.ReactElement => {
  const [loadStatus, setLoadStatus] = useState(true)
  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setLoadStatus(res) }).catch(() => { setLoadStatus(false) })
  }, [imageSrc])

  return <div className={styles['asset-icon-background']} style={{ backgroundColor: color }}>
    {imageSrc && loadStatus
      ? <div className={styles['asset-icon-with-image']}>
        <img src={checkUrl(imageSrc)} alt={icType} className={cx(getReverce(color), styles.img)}/>
      </div>
      : <div className={cx(
        getIconClassname(color, icType, isSelected),
        styles['asset-icon-fw'],
        getReverce(color)
      )}/>}
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
export const InfoMarker: React.FC<PropTypes> = ({
  marker,
  location
}) => {
  const [loadStatus, setLoadStatus] = useState(true)
  const [imageSrc] = useState<string | undefined>(marker.icon)
  const [markerIsDraggable, setMarkerIsDraggable] = useState<boolean>(false)

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const {
    setShowMapBar, setSelectedMarker, selectedMarker, clearMapSelection,
    playerForce, canSubmitOrders
  } = props

  useEffect(() => {
    const isUmpire = playerForce === UMPIRE_FORCE
    setMarkerIsDraggable(isUmpire && canSubmitOrders && !!selectedMarker && selectedMarker === marker.uniqid)
  }, [selectedMarker, marker, playerForce, canSubmitOrders])

  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setLoadStatus(res) }).catch(() => { setLoadStatus(false) })
  }, [imageSrc])

  const className = getIconClassname('', '', marker.uniqid === selectedMarker)
  const reverceClassName = getReverce(marker.color)
  const image = loadStatus && typeof imageSrc !== 'undefined'
    ? `<img class="${reverceClassName}" src="${checkUrl(imageSrc)}" alt="${marker.icon}">`
    : `<div class="${cx(reverceClassName, styles.img, styles[`platform-type-${marker.icon}`])}"></div>`

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: `<div class='${className} ${styles['asset-icon-with-image']}' style="background-color: ${marker.color}">${image}</div>`
  })

  const clickEvent = (): void => {
    if (selectedMarker && selectedMarker === marker.uniqid) {
      // clear selected asset, since it has been clicked again
      // @ts-ignore
      clearMapSelection(undefined)
      setShowMapBar(false)
    } else {
      // select this marker
      setSelectedMarker(marker.uniqid)
      setShowMapBar(true)
    }
  }

  const dragEnd = (e: DragEndEvent): void => {
    const newPos: L.LatLng = e.target.getLatLng()
    console.log('marker dragged to:', newPos)
  }

  return <>
    <Marker draggable={markerIsDraggable} ondragend={dragEnd} key={marker.uniqid} position={location} icon={divIcon} onclick={clickEvent}>
      <Tooltip>{marker.description}</Tooltip>
    </Marker>
    <Marker
      key={'label_' + marker.uniqid}
      position={location}
      zIndexOffset={-1000}
      width="150"
      icon={L.divIcon({
        // html: '' + cell.x + ',' + cell.y,
        html: marker.label,
        className: styles['marker-label'],
        iconSize: [180, 100]
      })}
    />
  </>
}

export default InfoMarker
