import { Terrain } from '@serge/config'
import { LabelStore, SergeGrid3, SergeHex3 } from '@serge/custom-types'
import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import { experimentalH3ToLocalIj, geoToH3, H3Index, h3ToGeo, h3ToGeoBoundary, polyfill } from 'h3-js'
import L from 'leaflet'
import { orderBy } from 'lodash'
// import { labelFor } from './create-grid-from-geojson'

const labelFor3 = (centre: number[]): string => {
  const lat = centre[0]
  const lng = centre[1]
  const latHemi = lat > 0 ? 'N' : 'S'
  const longHemi = lng > 0 ? 'E' : 'W'
  return Math.abs(centre[0]).toFixed(2) + latHemi + ' ' + Math.abs(centre[1]).toFixed(2) + longHemi
}

export const createLabels = (index: H3Index, centreIndex: H3Index, centre: number[]): LabelStore => {
  let label
  try {
    const coords = experimentalH3ToLocalIj(centreIndex, index)
    // label = labelFor(coords.i, coords.j)
    label = '' + coords.i + ', ' + coords.j
  } catch (err) {
    label = 'n/a'
  }

  return {
    xy: label,
    ctr: 'pending',
    lat_lon: labelFor3(centre)
  }
}

/** create our composite cell structure for this index */
const indexToHex = (centre: number[], labels: LabelStore, index: string, cellType: number): SergeHex3 => {
  const edge = h3ToGeoBoundary(index)
  return {
    centreLatLng: L.latLng(centre[0], centre[1]),
    labelStore: labels,
    index: index,
    styles: cellType,
    terrain: Terrain.SEA, // sea by default, until we read the values in TODO:
    poly: edge
  }
}

/** generate h3 coordinate for leaflet lat-long */
const latLng2Num = (pos: L.LatLng): number[] => {
  return [pos.lat, pos.lng]
}

/** generate Leaflet coordinate for h3 coords */
export const num2LatLng = (coords: number[]): L.LatLng => {
  return L.latLng(coords[0], coords[1])
}

export const h3polyFromBounds = (bounds: L.LatLngBounds): number[][] => {
  return [
    latLng2Num(bounds.getNorthWest()),
    latLng2Num(bounds.getNorthEast()),
    latLng2Num(bounds.getSouthEast()),
    latLng2Num(bounds.getSouthWest()),
    latLng2Num(bounds.getNorthWest())
  ]
}

/** see if we can perform i/j cell labelling for this grid.
 * The algorithm runs through all the cells in the grid until one
 * fails - then it immediately returns false
 */
export const checkIfIJWorks = (grid: string[], centre: H3Index): boolean => {
  return !grid.some((cell: string) => {
    let coords
    try {
      coords = experimentalH3ToLocalIj(centre, cell)
    } catch (err) {
    }
    return !coords
  })
}

/** create the grid of h3 cells
  * @param {L.LatLngBounds} bounds Outer bounds of grid
  * @param {number} res h grid resolution
  * @returns {SergeGrid3} h hex grid
  */
export const createGridH3 = (bounds: L.LatLngBounds, res: number, cellDefs: any): SergeGrid3 => {
  // outer boundary
  const boundsNum = h3polyFromBounds(bounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = bounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  const typedDefs = cellDefs as unknown as GeoJSON.FeatureCollection

  // flatten the definitions array
  const cellStyles: Array<{index: string, style: number}> = typedDefs && typedDefs.features.map((value: Feature<Geometry, GeoJsonProperties>) => {
    return {
      index: (value.properties && value.properties.hexname) || '',
      style: (value.properties && value.properties.type) || ''
    }
  })

  // create the grid
  let styleMissing = 0
  const grid = cells.map((cell: H3Index): SergeHex3 => {
    // see if we have definition for this index
    const match = cellStyles && cellStyles.find((value: {index: string, style: number}) => {
      return value.index === cell
    })
    const cellStyle = (match && match.style) || 0
    if (!match) {
      styleMissing++
    }
    // convert style to power of 2, so we can have multiple styles
    const powerCell = Math.pow(2, cellStyle)
    const centre = h3ToGeo(cell)
    const labels = createLabels(cell, centreIndex, centre)
    const res = indexToHex(centre, labels, cell, powerCell)
    return res
  })

  /** method to sort the cells from top-left to bottom right, to try to make
   * human-friendly coordinate system.
   */
  const sortAndLabel = (grid: SergeGrid3): SergeGrid3 => {
    const calcValue = (a: SergeHex3): number => { 
      // return a.centreLatLng.lng
      return (1 - a.centreLatLng.lat) * a.centreLatLng.lng 
    }
    const sorted = orderBy(grid, (a: SergeHex3) => calcValue(a), ['desc'])
    const labelled = sorted.map((cell: SergeHex3, index: number): SergeHex3 => {
      cell.labelStore.ctr = '' + (index + 1)
      return cell
    })
    return labelled
  }

  // arrange the counters from top-left to bottom-right
  const result = sortAndLabel(grid)

  if (styleMissing) {
    console.log('Didn\'t find style definition for ' + styleMissing + ' cells')
  }

  return result
}
