import { Feature, Geometry, Point } from 'geojson'
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { calculateHealthColor } from 'src/Helpers'
import { RENDERER_MILSYM } from 'src/custom-types'
import { createDivIcon } from '../helper/marker-helper'
import { CoreRendererProps } from '../types/props'

export const DEFAULT_FONT_SIZE = 14
export const DEFAULT_PADDING = 0

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved, onSelect, showLabels, selected = [] }): any => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_MILSYM
  const pointToLayer = (feature: Feature<Point, any>, latLng: L.LatLng) => {
    if (feature.geometry.type === 'Point' && feature.properties._externalType !== 'Text') {
      const { sidc, health, id } = feature.properties
      
      // Create MilSymbol icon
      const icon = new ms.Symbol(sidc, {
        size: 25, 
        additionalInformation: showLabels && feature.properties.label.toUpperCase()
      })
      
      // Calculate health color and get icon HTML
      const healthColor = calculateHealthColor(health)
      const iconHTML = icon.asDOM().outerHTML
      const isSelected = selected.some(id => id === feature.properties.id)

      // Create custom DivIcon for the marker
      const divIcon = createDivIcon(iconHTML, healthColor, isSelected)
      const marker = L.marker(latLng, { icon: divIcon })
      
      // Event listeners for marker actions
      marker.addEventListener('pm:remove', () => onRemoved(id))
      marker.addEventListener('pm:dragend', handleDragEnd)
      marker.addEventListener('click', () => onSelect([id]))

      return marker
    } else {
      // Throw error for unsupported geometry type
      throw new Error('Cannot create layer for ' + feature.geometry.type)
    }
  }
  
  // Event handler for marker drag end
  const handleDragEnd = (e: any) => {
    const g = e as any
    switch (g.shape) {
      case 'Marker': {
        const coords: L.LatLng = g.layer._latlng
        onDragged(g.layer.feature.properties.id, coords)
        break
      }
      default: {
        console.warn('Drag handler not created for ', g.shape)
      }
    }
  }

  return <GeoJSON data={features} filter={filter} pointToLayer={pointToLayer} key={'feature_no_contact' + Math.random()} />
}

export default MilSymbolRenderer
