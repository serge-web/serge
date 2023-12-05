
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { RENDERER_MILSYM } from 'src/custom-types'
import styles from '../styles.module.scss'
import { CoreRendererProps } from '../types/props'
import { Feature, Geometry, Point } from 'geojson'

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved }): any => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_MILSYM

  const pointToLayer = (feature: Feature<Point, any>, latLng: L.LatLng) => {
    if (feature.geometry.type === 'Point') {
      const icon = new ms.Symbol(feature.properties.sidc)
      const marker = L.marker(
        latLng, {
          attribution: feature.properties.id,
          icon: L.divIcon({
            html: icon.asDOM().outerHTML,
            className: styles['asset-icon']
          })
        }
      )
      marker.addEventListener('pm:remove', e => {
        onRemoved(feature.properties.id)
      })
      marker.addEventListener('pm:dragend', e => {
        const g = e as any
        const le = e as L.LeafletEvent
        switch (g.shape) {
          case 'Marker': {
            const coords: L.LatLng = le.layer._latlng
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
