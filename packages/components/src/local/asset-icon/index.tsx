import React, { useContext, useEffect, useState } from 'react'
import cx from 'classnames'
import { LayerGroup, Marker, Polygon, Tooltip } from 'react-leaflet'
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
  orientationData,
  map
}) => {
  const [iconLoadStatus, setIconLoadStatus] = useState(true)
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { setShowMapBar, setSelectedAsset, selectedAsset } = props

  // TODO: switch to received isDestroyed in props, using value from `Route`
  const isDestroyed: boolean = !!condition && (condition.toLowerCase() === 'destroyed' || condition.toLowerCase() === 'mission kill')

  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setIconLoadStatus(res) }).catch(() => { setIconLoadStatus(false) })
  }, [imageSrc])

  // const orientSrc = 'orientation-marker'
  // useEffect(() => {
  //   checkImageStatus(orientSrc).then(res => { setOrientLoadStatus(res) }).catch(() => { setOrientLoadStatus(false) })
  // }, [orientSrc])

  // temporarily offset the markers, so we know which one we are seeing
  // const position2 = L.latLng(position.lat + 0.05, position.lng + 0.1)
  // const position3 = L.latLng(position.lat - 0.05, position.lng - 0.1)

  const className = getIconClassname(perceivedForceClass || '', '', isDestroyed, selected)
  const reverceClassName = getReverce(perceivedForceColor)
  const iconImage = iconLoadStatus && typeof imageSrc !== 'undefined'
    ? `<img class="${reverceClassName}" src="${checkUrl(imageSrc)}" alt="${type}">`
    : `<div class="${cx(reverceClassName, styles.img, styles[`platform-type-${type}`])}"></div>`

  // collate list of orientation markers
  // const orientMarkers: L.DivIcon[] = orientationData ? orientationData.map((item: OrientationData): L.DivIcon => {
  //   const orientColor = item.shadeOrientation ? '#333' : perceivedForceColor
  //   const orientStr = `style='transform: ${`rotate(${item.orientation}deg)`}; background-color: ${orientColor}'`
  //   const orientImage = orientLoadStatus && typeof orientSrc !== 'undefined'
  //     ? `<img class="${reverceClassName}" src="${checkUrl(orientSrc)}" alt="${type}">`
  //     : `<div ${orientStr} class="${cx(reverceClassName, styles.img, styles.orientation)}"></div>`
  //   return L.divIcon({
  //     iconSize: [120, 120],
  //     html: `<div class='${className} ${styles['orient-icon-with-image']}'>${orientImage}</div>`
  //   })
  // }) : []

  // Note: keep the following commented out code. It was quite challenging to come up with
  // correctly oriented markers
  //
  //   const orientPolygons: L.Polygon[] = (map && orientationData) ? orientationData.map((item: OrientationData): L.Polygon => {
  //     const orientColor = item.shadeOrientation ? '#333' : perceivedForceColor
  // //    const orientStr = `style='transform: ${`rotate(${item.orientation}deg)`}; background-color: ${orientColor}'`

  //     // const orientImage = orientLoadStatus && typeof orientSrc !== 'undefined'
  //     //   ? `<img class="${reverceClassName}" src="${checkUrl(orientSrc)}" alt="${type}">`
  //     //   : `<div ${orientStr} class="${cx(reverceClassName, styles.img, styles.orientation)}"></div>`
  //     const options: L.PolylineOptions = {
  //       color: orientColor
  //     }
  //   }) : []

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
    <LayerGroup key={'hex_polygons3'} >{
      /* not too many cells visible, show hex outlines */
      map && orientationData && orientationData.map((cell: OrientationData, index: number) => {
        const orientRads = (90 - cell.orientation) * Math.PI / 180.0
        //     const orientRads = 190.0 * Math.PI / 180.0
        const cells: L.LatLng[] = []
        const op1 = map.latLngToLayerPoint(position)
//        const op2 = map.latLngToContainerPoint(position)
        const op = op1 // op1.add(L.point(0, -100))
        const wid = 20
        const len = 40
        const cosR = Math.sin(orientRads)
        const sinR = Math.cos(orientRads)
        const origin = op.add([0, 0])
        const rotatePoint = (x: number, y: number, sinTheta: number, cosTheta: number): L.Point => {
          const xd = x * cosTheta - y * sinTheta
          const yd = y * cosTheta + x * sinTheta
          return L.point(xd, yd)
        }

        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(-wid, 5, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(0, -len, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(wid, 5, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(-wid, 5, sinR, cosR))))
        const color = cell.shadeOrientation ? '#222' : perceivedForceColor
        return <Polygon
          key={'hex_poly3_' + index}
          fillColor={color}
          fill={true}
          positions={cells}
          stroke={false}
          className={styles['triangle']}
        />
      })}
    </LayerGroup>

    <Marker key='asset-icon' position={position} icon={divIcon} onclick={clickEvent}>
      <Tooltip>{capitalize(tooltip)}</Tooltip>
    </Marker>
  </>
}

export default AssetIcon
