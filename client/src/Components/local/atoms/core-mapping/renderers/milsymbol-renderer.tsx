
import { Feature, Geometry, Point } from 'geojson'
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { RENDERER_MILSYM } from 'src/custom-types'
import styles from '../styles.module.scss'
import { CoreRendererProps } from '../types/props'
import { calculateHealthColor } from 'src/Helpers'

export const DEFAULT_FONT_SIZE = 14
export const DEFAULT_PADDING = 0

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved, onSelect, showLabels }): any => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_MILSYM
     
  const pointToLayer = (feature: Feature<Point, any>, latLng: L.LatLng) => {
    if (feature.geometry.type === 'Point' && feature.properties._externalType !== 'Text') {
      const { sidc, health, id } = feature.properties
      // const icon = new ms.Symbol(sidc)
      const icon = new ms.Symbol(sidc, {
        size: 35, 
        additionalInformation: showLabels && feature.properties.label.toUpperCase()
      })
      const healthColor = calculateHealthColor(health)
      const divIcon = L.divIcon({
        html: `
          <div class="${styles['asset-icon']}">
            ${icon.asDOM().outerHTML}
            <div class="${styles['health-bar']}" style="background-color: ${healthColor};"></div>
          </div>
        `,
        className: styles['combined-icon']
      })
  
      const marker = L.marker(latLng, { icon: divIcon })
  
      marker.addEventListener('pm:remove', () => {
        onRemoved(id)
      })
  
      marker.addEventListener('pm:dragend', (e) => {
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
      
      marker.addEventListener('click', () => {
        onSelect(feature.properties.id)
      })

      return marker
    } else {
      throw new Error('Cannot create layer for ' + feature.geometry.type)
    }
  }

  return <GeoJSON data={features} filter={filter} pointToLayer={pointToLayer} key={'feature_no_contact' + Math.random()} />
}

export default MilSymbolRenderer
