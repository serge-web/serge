
import cx from 'classnames'
import { Feature, Geometry, Point } from 'geojson'
import L, { LeafletEvent, PathOptions, StyleFunction } from 'leaflet'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { ForceStyle } from 'src/Helpers'
import { CoreProperties, RENDERER_CORE } from 'src/custom-types'
import { getInvertColor, getRGB, isSimilar } from '../helper/marker-helper'
import styles from '../styles.module.scss'
import { CoreRendererProps } from '../types/props'
import { DEFAULT_FONT_SIZE, DEFAULT_PADDING } from './milsymbol-renderer'

export const colorFor = (force: string, forceStyles: ForceStyle[]): string => {
  const forceStyle = forceStyles.find(style => style.forceId === force)
  return forceStyle ? forceStyle.color : '#F0F'
}

const CoreRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved, onEdited, onSelect, forceStyles, selected = [] }) => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_CORE
  const style: StyleFunction<any> = (feature?: Feature<any>): PathOptions => {
    if (feature) {
      const isSelected = selected.some(id => id === feature.properties?.id)
      const props = feature.properties as CoreProperties
      const color = colorFor(props.force, forceStyles)
      const weight = feature.geometry.type === 'Polygon' ? 1 : 3
      return {
        color,
        weight,
        fillColor: color,
        className: cx({ 'leaflet-default-icon-path': true, [styles['pulse']]: isSelected })
      }
    } else {
      return {}
    }
  }

  const setTextStyleFromProperties = (marker: L.Marker<any>, props: any) => {
    const forceColor = colorFor(props.force, forceStyles)
    const textColor = props.color
    const elm = marker.pm['_layer'].pm.getElement() as HTMLTextAreaElement
    if (isSimilar(getRGB(forceColor), getRGB(textColor))) {
      elm.style.textShadow = `0 0 5px ${getInvertColor(getRGB(forceColor))}, 0 0 5px ${getInvertColor(getRGB(forceColor))}`
    }
    elm.style.textAlign = 'center'
    elm.style.padding = '0px'
    elm.style.backgroundColor = colorFor(props.force, forceStyles)
    elm.style.color = props.color
    elm.style.fontSize = (props.fontSize || DEFAULT_FONT_SIZE) + 'px'
    if (selected.includes(props.id)) {
      elm.classList.add(styles['pulse'])
    } else {
      elm.classList.remove(styles['pulse'])
    }
  }

  const adjustSizeFromProperties = (marker: L.Marker<any>, props: any) => {
    const elm = marker.pm['_layer'].pm.getElement() as HTMLTextAreaElement
    elm.style.padding = (props.padding || DEFAULT_PADDING) + 'px'
    if (props.padding) {
      elm.style.width = parseInt(elm.style.width) + 2 * props.padding + 'px'
      elm.style.height = parseInt(elm.style.height) + 2 * props.padding + 'px'
    }
  }

  const pointToLayer = (feature: Feature<Point, any>, latLng: L.LatLng) => {
    if (feature.properties._externalType === 'Text') {
      const marker = L.marker(latLng, {
        textMarker: true,
        text: feature.properties.label
      })

      marker.addEventListener('pm:edit', e => {
        onEdited(feature.properties.id, e.target.pm.textArea.value)
      })
      marker.addEventListener('pm:remove', () => {
        onRemoved(feature.properties.id)
      })
      marker.addEventListener('pm:dragend', e => {
        const coords: L.LatLng = e.layer._latlng
        feature.geometry.coordinates = [coords.lng, coords.lat]
        onDragged(feature.properties.id, coords)
      })
      // let geoman calculate the width and height of the textarea element itself
      setTextStyleFromProperties(marker, feature.properties)
      // we then adjust the width and height based on the input padding
      setTimeout(() => {
        adjustSizeFromProperties(marker, feature.properties)
      }, 10)
      return marker
    } else {
      throw new Error('Cannot create layer for ' + feature.geometry.type)
    }
  }

  return <GeoJSON onEachFeature={(f, l) => {
    l.addEventListener('pm:remove', () => {
      onRemoved(f.properties.id)
    })
    l.addEventListener('click', () => {
      onSelect([f.properties.id])
    })
    const dragHandler = (e: LeafletEvent) => {
      const g = e as any
      const le = g as L.LeafletEvent
      switch (g.shape) {
        case 'Polygon': {
          const coords: L.LatLng[][] = le.layer._latlngs
          onDragged(f.properties.id, coords)
          break
        }
        case 'Line': {
          const coords: L.LatLng[] = le.layer._latlngs
          onDragged(f.properties.id, coords)
          break
        }

        default: {
          console.warn('Drag handler not created for ', g.shape)
        }
      }
    }

    l.addEventListener('pm:markerdragend', dragHandler)
    l.addEventListener('pm:dragend', dragHandler)
  }} pointToLayer={pointToLayer} data={features} style={style} filter={filter} key={'core_renderer_' + Math.random()} />
}

export default CoreRenderer
