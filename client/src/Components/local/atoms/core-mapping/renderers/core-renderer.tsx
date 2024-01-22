
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { CoreProperties, RENDERER_CORE } from 'src/custom-types'
import { CoreRendererProps } from '../types/props'
import { Feature, Geometry } from 'geojson'
import L, { LeafletEvent, PathOptions, StyleFunction } from 'leaflet'

export const colorFor = (force: string): string => {
  switch (force) {
    case 'f-red':
      return '#F00'
    case 'f-blue':
      return '#00F'
    case 'f-green':
      return '#0F0'
    default: 
      return '#F00'  
  }
}

const CoreRenderer: React.FC<CoreRendererProps> = ({ features, onDragged, onRemoved }) => {
  const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_CORE
  const style: StyleFunction<any> = (feature?: Feature<any>): PathOptions => {
    if (feature) {
      const props = feature.properties as CoreProperties
      const color: string = colorFor(props.force)
      const weight = feature.geometry.type === 'Polygon' ? 1 : 3
      return {
        color,
        weight,
        fillColor: color,
        className: 'leaflet-default-icon-path'
      }
    } else {
      return {}
    }
  }
  return <GeoJSON onEachFeature={(f, l) => {
    l.addEventListener('pm:remove', () => {
      onRemoved(f.properties.id)
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
  }} data={features} style={style} filter={filter} key={'core_renderer_' + Math.random()} />
}

export default CoreRenderer
