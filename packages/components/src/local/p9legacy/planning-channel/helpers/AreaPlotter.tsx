import { AreaCategory } from '@serge/custom-types'
import { Position } from 'geojson'
import { divIcon, latLng, LatLng, PathOptions, polygon } from 'leaflet'
import React from 'react'
import { LayerGroup, Marker, Polygon } from 'react-leaflet-v4'
import styles from '../styles.module.scss'

export interface AreaPlotterProps {
  areas: AreaCategory[]
}

export const AreaPlotter: React.FC<AreaPlotterProps> = ({ areas }) => {
  const positionsFor = (coords: Position[]): LatLng[] => {
    return coords.map((pt: number[]) => latLng(pt[1], pt[0]))
  }

  const centreFor = (coords: Position[]): LatLng => {
    const lCoords = coords.map((pt: number[]) => latLng(pt[1], pt[0]))
    return polygon(lCoords).getBounds().getCenter()
  }

  const polygonNameIcon = (name: string) => {
    return divIcon({ iconSize: [60, 20], html: `<div>${name}</div>`, className: styles['area-name'] })
  }

  const polyStyle: PathOptions = {
    color: '#333',
    opacity: 0.7
  }

  return <>
    {
      areas.length > 0 &&
      <LayerGroup key={'standard-areas'}>
        {areas.map((category, index1) =>
          category.areas.map((area, index2) =>
            <Polygon key={'p_' + index1 + '_' + index2} pathOptions={{ ...polyStyle, fillColor: category.color }} positions={positionsFor(area.polygon.coordinates[0])} >
              <Marker key={'k_' + index1 + '_' + index2} position={centreFor(area.polygon.coordinates[0])} icon={polygonNameIcon(area.name)} />
            </Polygon>
          ))
        }
      </LayerGroup >
    }

  </>
}

export default AreaPlotter
