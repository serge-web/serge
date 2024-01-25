
import { Feature, Geometry, Point } from 'geojson'
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { RENDERER_MILSYM } from 'src/custom-types'
import styles from '../styles.module.scss'
import { CoreRendererProps } from '../types/props'
import { colorFor } from './core-renderer'

export const DEFAULT_FONT_SIZE = 14
export const DEFAULT_PADDING = 0

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved, onEdited }): any => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_MILSYM

  const setTextStyleFromProperties = (marker: L.Marker<any>, props: any) => {
    const elm = marker.pm['_layer'].pm.getElement() as HTMLTextAreaElement
    elm.style.textAlign = 'center'
    elm.style.padding = '0px'
    elm.style.backgroundColor = colorFor(props.force)
    elm.style.color = props.color
    elm.style.fontSize = (props.fontSize || DEFAULT_FONT_SIZE) + 'px'
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
    if (feature.geometry.type === 'Point' && feature.properties._externalType !== 'Text') {
      const icon = new ms.Symbol(feature.properties.sidc)
      const marker = L.marker(
        latLng, {
          icon: L.divIcon({
            html: icon.asDOM().outerHTML,
            className: styles['asset-icon']
          })
        }
      )
      marker.addEventListener('pm:remove', () => {
        onRemoved(feature.properties.id)
      })
      marker.addEventListener('pm:dragend', e => {
        const g = e as any
        switch (g.shape) {
          case 'Marker': {
            const coords: L.LatLng = g.layer._latlng
            onDragged(feature.properties.id, coords)
            break
          } 
          default: {
            console.warn('Drag handler not created for ', g.shape)
          }
        }
      })
      return marker
    } else if (feature.properties._externalType === 'Text') {
      const marker = L.marker(latLng, {
        textMarker: true,
        text: feature.properties.textValue
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

  return <GeoJSON data={features} filter={filter} pointToLayer={pointToLayer} key={'feature_no_contact' + Math.random()} />
}

export default MilSymbolRenderer
