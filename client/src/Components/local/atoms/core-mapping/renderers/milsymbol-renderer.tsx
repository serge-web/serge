import { Feature, Geometry, Point } from 'geojson'
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { calculateHealthColor } from 'src/Helpers'
import { MappingPermissions, RENDERER_MILSYM } from 'src/custom-types'
import { canAddRemove, canMoveResize, canSeeProps, hasMappingPermission } from '../../mapping-panel/helpers/has-mapping-permission'
import { useMappingState } from '../helper/mapping-provider'
import { createDivIcon } from '../helper/marker-helper'
import { CoreRendererProps } from '../types/props'

export const DEFAULT_FONT_SIZE = 14
export const DEFAULT_PADDING = 0

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved, onSelect, showLabels, permissions, selected = [] }): any => {
  const { filterFeatureIds, isMeasuring } = useMappingState()

  const filterForThisRenderer = (feature: Feature<Geometry, any>): boolean => {
    const isThisRenderer = feature.properties._type === RENDERER_MILSYM
    const isShown = filterFeatureIds.includes('' + feature.properties.id)
    const canSeeSpatial = hasMappingPermission(feature, MappingPermissions.ViewSpatial, permissions)
    return isThisRenderer && isShown && canSeeSpatial
  }

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
      const divIcon = createDivIcon(iconHTML, healthColor, isSelected, isMeasuring)
      const marker = L.marker(latLng, { icon: divIcon })
      
      // Event listeners for marker actions
      marker.addEventListener('pm:remove', () => {
        if (!canAddRemove(feature, permissions)) {
          return
        }
        onRemoved(id)
      })
      marker.addEventListener('pm:dragend', e => {
        if (!canMoveResize(feature, permissions)) {
          return
        }
        handleDragEnd(e)
      })
      marker.addEventListener('click', (e) => {
        if (!isMeasuring && canSeeProps(feature, permissions)) {
          L.DomEvent.stopPropagation(e)
          onSelect([id])
        }
      })

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

  return <GeoJSON data={features} filter={filterForThisRenderer} pointToLayer={pointToLayer} key={'feature_no_contact' + Math.random()} />
}

export default MilSymbolRenderer
