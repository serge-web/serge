
import { Feature, Geometry, Point } from 'geojson'
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { RENDERER_MILSYM } from 'src/custom-types'
import styles from '../styles.module.scss'
import { CoreRendererProps } from '../types/props'

export const DEFAULT_FONT_SIZE = 14
export const DEFAULT_PADDING = 0

export const mockLat = 50.1234567891011
export const mockLng = 0.1234567891011

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved }): any => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_MILSYM

  const pointToLayer = (feature: Feature<Point, any>, latLng: L.LatLng) => {
    if (feature.geometry.type === 'Point' && feature.properties._externalType !== 'Text') {
      const icon = new ms.Symbol(feature.properties.sidc)
      if (feature.geometry.coordinates[1] && feature.geometry.coordinates[0]) {
        latLng.lat = feature.geometry.coordinates[1]
        latLng.lng = feature.geometry.coordinates[0]
      }
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
    } else {
      throw new Error('Cannot create layer for ' + feature.geometry.type)
    }
  }

  return <GeoJSON data={features} filter={filter} pointToLayer={pointToLayer} key={'feature_no_contact' + Math.random()} />
}

export default MilSymbolRenderer
