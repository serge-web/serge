import L from 'leaflet'
import { Feature, FeatureCollection } from 'geojson'
import { RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import { Phase } from 'src/config'

export const generateFeatures = (bounds: L.LatLngBounds, numPoints: number, numShapes: number): FeatureCollection => {
  const features: Feature[] = []
  const x_min = bounds.getEast()
  const x_max = bounds.getWest()
  const y_min = bounds.getSouth()
  const y_max = bounds.getNorth()
  const randString = (items: string[]): string => {
    return items[Math.floor(Math.random() * items.length)]
  }
  const forces = ['f-red', 'f-blue', 'f-green']
  for (let i = 0; i < numPoints; i++) {
    const lat = y_min + (Math.random() * (y_max - y_min))
    const lng = x_min + (Math.random() * (x_max - x_min))
    const newF: Feature = {
      type: 'Feature',
      properties: {
        id: 'pt_' + i,
        force: randString(forces),
        phase: randString([Phase.Adjudication, Phase.Planning]),
        turn: Math.floor(Math.random() * 5),
        _type: RENDERER_MILSYM,
        sidc: 'SFG-UCI----D',
        category: 'Civilian',
        size: 'M'
      },
      geometry: {
        type: 'Point',
        coordinates: [lng, lat]
      }
    }
    features.push(newF)
  }
  for (let i = 0; i < numShapes; i++) {
    const size = Math.random() * 0.6
    const lat1 = y_min + (Math.random() * (y_max - y_min))
    const lng1 = x_min + (Math.random() * (x_max - x_min))
    const lat2 = lat1 + Math.random() * size
    const lng2 = lng1 + Math.random() * size
    const newF: Feature = {
      type: 'Feature',
      properties: {
        id: 'pt_' + i,
        force: randString(forces),
        phase: randString([Phase.Adjudication, Phase.Planning]),
        turn: Math.floor(Math.random() * 5),
        _type: RENDERER_CORE,
        important: 'Yes'
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[[lng1, lat1], [lng1, lat2], [lng2, lat2], [lng2, lat1], [lng1, lat1]]]
      }
    }
    features.push(newF)
  }
  const collection: FeatureCollection = {
    type: 'FeatureCollection',
    features: features
  }
  return collection
}
