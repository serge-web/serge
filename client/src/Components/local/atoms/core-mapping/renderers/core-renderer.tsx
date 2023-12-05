
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { CoreProperties, RENDERER_CORE } from 'src/custom-types'
import { CoreRendererProps } from '../types/props'
import { Feature, Geometry } from 'geojson'
import L, { PathOptions, StyleFunction } from 'leaflet'

const colorFor = (force: string) => {
  switch (force) {
    case 'f-red':
      return '#F00'
    case 'f-blue':
      return '#00F'
    case 'f-green':
      return '#0F0'
    default: 
      return '#aaa'  
  }
}

const CoreRenderer: React.FC<CoreRendererProps> = ({ features, onDragged }) => {
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
    // handle listenr for GeoJSON layer
    l.addEventListener('pm:dragend', e => {
      const g = e as any
      const le = e as L.LeafletEvent
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
    })
  }} data={features} style={style} filter={filter} key={'feature_no_contact' + Math.random()} />
}

export default CoreRenderer
