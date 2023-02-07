import { Area } from '@serge/custom-types'
import { Feature, GeoJsonObject, Position } from 'geojson'
import { divIcon, latLng, LatLng, Layer, PathOptions, polygon, StyleFunction } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { GeoJSON, LayerGroup, Marker, Polygon } from 'react-leaflet-v4'
import styles from '../styles.module.scss'
import { shapeFor } from './SharedOrderRenderer'

export interface AreaPlotterProps {
  areas: Area[]
}

export const AreaPlotter: React.FC<AreaPlotterProps> = ({ areas }) => {
  const [layersToDelete] = useState<Layer[]>([])
  const [geometries, setGeometries] = useState<GeoJsonObject | undefined>(undefined)

  console.log('area plotter', areas.length, geometries)

  useEffect(() => {
    const hightlightColor = '#0f0'
    // flush any existing layers
    while (layersToDelete.length > 0) {
      const layer = layersToDelete.shift()
      layer && layer.remove()
    }

    // handler to store layer references
    const storeRef = (polyline: Layer): void => {
      layersToDelete.push(polyline)
    }

    const geoms = areas.map((area, index) => {
      const feature: Feature = {
        geometry: area.polygon,
        type: 'Feature',
        properties: {}
      }
      return shapeFor(feature as Feature, hightlightColor, area.name, storeRef, index)
    })
    if (geoms.length) {
      const geoJson = {
        type: 'FeatureCollection',
        features: geoms
      }
      setGeometries(geoJson as GeoJsonObject)
    }
    console.log('geoms', geoms)
  }, [areas])

  const styleForFeatures: StyleFunction<any> = (): PathOptions => {
    return {
      color: '#f00',
      weight: 3,
      fillColor: '#00f',
      fillOpacity: 0.5,
      className: 'leaflet-default-icon-path'
    }
  }

  const positionsFor = (coords: Position[]): LatLng[] => {
    return coords.map((pt: number[]) => latLng(pt[1], pt[0]))
  }

  const centreFor = (coords: Position[]): LatLng => {
    const lCoords = coords.map((pt: number[]) => latLng(pt[1], pt[0]))
    return polygon(lCoords).getBounds().getCenter()
  }

  const polygonNameIcon = (name: string) => {
    return divIcon({ iconSize: [60, 20], html: `<div style="transform: translateX(0%);padding-top:14px;font-size: 14px;">${name}</div>`, className: styles['polygon-name'] })
  }

  return <>
    {
      geometries !== undefined &&
      <LayerGroup key={'standard-areas'}>
        <GeoJSON style={styleForFeatures} data={geometries} key={'feature_no_contact' + Math.random()} />
        {areas.map((area, index) =>
          <Polygon key={index} positions={positionsFor(area.polygon.coordinates[0])} >
            <Marker position={centreFor(area.polygon.coordinates[0])} icon={polygonNameIcon(area.name)} />
          </Polygon>
        )}
      </LayerGroup >
    }

  </>
}

export default AreaPlotter
