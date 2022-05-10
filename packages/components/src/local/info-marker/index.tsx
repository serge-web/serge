import { UMPIRE_FORCE } from '@serge/config'
import L, { DragEndEvent } from 'leaflet'
import get from 'lodash/get'
import set from 'lodash/set'
import unfetch from 'node-fetch'
import React, { useContext, useEffect, useState } from 'react'
import { Marker, Tooltip } from 'react-leaflet'
import xmljs from 'xml-js'
import { getIconClassname } from '../asset-icon'
/* Import context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

const fetch = unfetch.bind(window)

/* Render component */
export const InfoMarker: React.FC<PropTypes> = ({
  marker,
  location,
  dragged
}) => {
  const [svgContent, setSvgContent] = useState<string>('')
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

  const isSelected = marker.uniqid === selectedMarker
  const className = getIconClassname('', isSelected)

  useEffect(() => {
    fetch(`/assets/counters/${marker.icon || 'unknown.svg'}`, { method: 'GET' })
      .then(res => res.text())
      .then(text => {
        const option = { compact: true }
        const svgJson = JSON.parse(xmljs.xml2json(text, option))
        const attributes = get(svgJson, 'svg.g.path._attributes')
        attributes.style = `fill: ${marker.color}`
        set(svgJson, 'svg.g.path._attributes', attributes)
        const svgXml = xmljs.json2xml(svgJson, option)
        setSvgContent(svgXml)
      })
  }, [marker.icon, marker.color])

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
