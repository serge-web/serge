import { SelectedAsset } from '@serge/custom-types'
import { UNKNOWN_TYPE } from '@serge/config'
import cx from 'classnames'
import L from 'leaflet'
import { capitalize } from 'lodash'
import unfetch from 'node-fetch'
import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Marker, Polygon, Tooltip } from 'react-leaflet'
import { OrientationData } from '../assets/types/asset_info'
import { lightOrDark } from '../map-control/helpers/lightOrDark'
/* Import context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

// TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
// error based on some webpack version
const fetch = unfetch.bind(window)

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, destroyed?: boolean, icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
  destroyed ? styles.destroyed : null,
  icSelected ? styles.selected : null
))

const isUrl = (url: string): boolean => {
  return !/base64/.test(url)
}

export const fixUrl = (url: string): string => {
  if (/^https?|^\/\/?|base64|images\/default_img\//.test(url)) {
    return url
  }
  return `/assets/counters/${url}`
}

interface GetIconProps {
  color?: string
  destroyed?: boolean
  isSelected?: boolean
  imageSrc?: string
}

const getReverce = (color = ''): string | false => (
  color && lightOrDark(color) === 'light' && styles['asset-icon-invert']
)

export const GetIcon = ({ color = '', destroyed, isSelected, imageSrc }: GetIconProps): React.ReactElement => {
  const [loadStatus, setLoadStatus] = useState(true)

  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setLoadStatus(res) }).catch(() => { setLoadStatus(false) })
  }, [imageSrc])

  const typePrefix = (icon: string): string => {
    const ind = icon.indexOf('.')
    const trimmed = ind > 0 ? icon.substring(0, ind) : icon
    return trimmed
  }

  return <div className={styles['asset-icon-background']} style={{ backgroundColor: color }}>
    {
      imageSrc &&
      <div className={styles['asset-icon-with-image']}>
        <img src={fixUrl(loadStatus ? imageSrc : 'unknown.svg')} alt={typePrefix(imageSrc)} className={cx(getReverce(color), styles.img, styles['asset-icon'], destroyed ? styles.destroyed : null, isSelected ? styles.selected : null)} />
      </div>
    }
  </div>
}

const checkImageStatus = (imageSrc: string | undefined): Promise<boolean> => {
  if (imageSrc && isUrl(imageSrc)) {
    try {
      const url = fixUrl(imageSrc)
      return fetch(url, { method: 'HEAD' })
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
  typeId,
  force,
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
  orientationData,
  map
}) => {
  const [iconLoadStatus, setIconLoadStatus] = useState(true)
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { setShowMapBar, setSelectedAsset, selectedAsset, clearMapSelection } = props

  // TODO: switch to received isDestroyed in props, using value from `Route`
  const isDestroyed: boolean = !!condition && (condition.toLowerCase() === 'destroyed' || condition.toLowerCase() === 'mission kill')

  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setIconLoadStatus(res) }).catch(() => { setIconLoadStatus(false) })
  }, [imageSrc])

  const className = getIconClassname('', isDestroyed, selected)
  const reverceClassName = getReverce(perceivedForceColor)
  const iconImage = iconLoadStatus && typeof imageSrc !== 'undefined'
    ? `<img class="${reverceClassName}" src="${fixUrl(imageSrc)}" alt="${name}">`
    : null

  // get top orient marker in the list
  const lastOrientation = orientationData?.length ? (orientationData[orientationData.length - 1] as OrientationData).orientation : 0
  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: `<div class='${className} ${styles['asset-icon-with-image']}' style="transform: rotate(${lastOrientation - 80}deg) translate(5px) rotate(-${lastOrientation - 80}deg); background-color: ${perceivedForceColor}">${iconImage}</div>`
  })

  const clickEvent = (): void => {
    if (selectedAsset && selectedAsset.uniqid === uniqid) {
      // clear selected asset, since it has been clicked again
      // @ts-ignore
      clearMapSelection(undefined)
      setShowMapBar(false)
    } else {
      // select this asset
      const selection: SelectedAsset = {
        uniqid: uniqid,
        contactId: contactId,
        name: name,
        typeId: typeId,
        forceId: force,
        controlledBy: controlledBy,
        condition: condition || UNKNOWN_TYPE,
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
    <LayerGroup key={'hex_polygons3'} >{
      /* not too many cells visible, show hex outlines */
      map && orientationData && orientationData.map((cell: OrientationData, index: number) => {
        const orientRads = (90 - cell.orientation) * Math.PI / 180.0
        //     const orientRads = 190.0 * Math.PI / 180.0
        const cells: L.LatLng[] = []
        const origin = map.latLngToLayerPoint(position)
        const wid = 20
        const len = 40
        // precalculate cos/sin, since it's reused
        const cosR = Math.sin(orientRads)
        const sinR = Math.cos(orientRads)

        // method to rotate point around origin
        const rotatePoint = (x: number, y: number, sinTheta: number, cosTheta: number): L.Point => {
          const xd = x * cosTheta - y * sinTheta
          const yd = y * cosTheta + x * sinTheta
          return L.point(xd, yd)
        }

        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(-wid, 5, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(0, -len, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(wid, 5, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(-wid, 5, sinR, cosR))))

        // use dark shade if told to shade it, else perceived color
        const color = cell.shadeOrientation ? '#222' : perceivedForceColor
        return <Polygon
          key={'hex_poly3_' + index}
          fillColor={color}
          fill={true}
          positions={cells}
          stroke={false}
          className={styles.triangle}
        />
      })}
    </LayerGroup>

    <Marker key='asset-icon' position={position} icon={divIcon} onclick={clickEvent}>
      <Tooltip>{capitalize(tooltip)}</Tooltip>
    </Marker>
  </>
}

export default AssetIcon
