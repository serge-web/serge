/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UMPIRE_FORCE } from 'src/config'
import L, { DragEndEvent } from 'leaflet'
import get from 'lodash/get'
import set from 'lodash/set'
import unfetch from 'node-fetch'
import React, { useContext, useEffect, useState } from 'react'
import { Marker, Tooltip, Polygon } from 'react-leaflet'
import xmljs from 'xml-js'
import { getIconClassname } from '../asset-icon'
import { h3SetToMultiPolygon, kRing } from 'h3-js'
/* Import context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'
import { IconOption } from 'src/custom-types'

const fetch = unfetch.bind(window)

/* Render component */
export const InfoMarker: React.FC<PropTypes> = ({
  marker,
  location,
  locationHex,
  dragged,
  icons
}) => {
  const [svgContent, setSvgContent] = useState<string>('')
  const [markerIsDraggable, setMarkerIsDraggable] = useState<boolean>(false)

  const [radiusPoly, setRadiusPoly] = useState<L.LatLng[]>([])

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const {
    setShowMapBar, setSelectedMarker, selectedMarker, clearMapSelection,
    playerForce, isGameControl
  } = props

  useEffect(() => {
    const isUmpire = playerForce === UMPIRE_FORCE
    const isGC = isGameControl || false
    setMarkerIsDraggable(isUmpire && isGC && !!selectedMarker && selectedMarker === marker.uniqid)
  }, [selectedMarker, marker, playerForce, isGameControl])

  const isSelected = marker.uniqid === selectedMarker
  const className = getIconClassname('', isSelected)

  useEffect(() => {
    if (icons) {
      const iconOption = icons.find((icon: IconOption) => icon.uniqid === marker.iconId)
      const iconURL = iconOption && iconOption.icon
      fetch(`/assets/counters/${iconURL || 'unknown.svg'}`, { method: 'GET' })
        .then(res => res.text())
        .then(text => {
          const option = { compact: true }
          const svgJson = JSON.parse(xmljs.xml2json(text, option))
          const attributes = get(svgJson, 'svg.g.path._attributes')
          attributes.style = `fill: ${marker.color}`
          set(svgJson, 'svg.g.path._attributes', attributes)
          const svgXml = xmljs.js2xml(svgJson, option)
          setSvgContent(svgXml)
        })
    }
  }, [marker.iconId, marker.color, icons])

  useEffect(() => {
    if (marker.shadeRadius && marker.shadeRadius > 0) {
      // note: intermittent issue where location hex is pending
      if (locationHex === 'pending') {
        console.warn('Info marker has "pending" location', marker.label)
        setRadiusPoly([])
      } else {
        // generate ring
        const ring = kRing(locationHex, marker.shadeRadius)
        const hull2 = h3SetToMultiPolygon(ring, true)
        const h3points = hull2[0][0].map((pair: number[]) => L.latLng(pair[1], pair[0]))
        setRadiusPoly(h3points)
      }
    } else {
      setRadiusPoly([])
    }
  }, [marker, locationHex])

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: `<div class='${className} ${styles['asset-icon-with-image']}' style="border: 2px solid ${marker.color}">${svgContent}</div>`
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
    dragged && dragged(newPos)
  }

  return <>
    <Polygon
      key={'radius_' + marker.uniqid}
      color={marker.color}
      positions={radiusPoly}
      className={styles['radius-line']}
    />
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
