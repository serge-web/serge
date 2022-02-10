import { SergeGrid3, SergeHex3 } from '@serge/custom-types'
import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import { experimentalH3ToLocalIj, geoToH3, H3Index, h3ToGeo, h3ToGeoBoundary, polyfill } from 'h3-js'
import L from 'leaflet'
import { labelFor } from './create-grid-from-geojson'

const labelFor3 = (centre: number[]): string => {
  const lat = centre[0]
  const lng = centre[1]
  const latHemi = lat > 0 ? 'N' : 'S'
  const longHemi = lng > 0 ? 'E' : 'W'
  return Math.abs(centre[0]).toFixed(1) + latHemi + ' ' + Math.abs(centre[1]).toFixed(1) + longHemi
}

/** create our composite cell structure for this index */
const indexToHex = (index: H3Index, centreIndex: H3Index, labelType: string, ctr: number, cellType: number): SergeHex3 => {
  const centre = h3ToGeo(index)
  let label = ''
  if (labelType === X_Y_LABELS) {
    try {
      const coords = experimentalH3ToLocalIj(centreIndex, index)
      label = labelFor(coords.i, coords.j)
    } catch (err) {
      label = 'n/a'
    }
  } else if (labelType === LAT_LON_LABELS) {
    label = labelFor3(centre)
  } else {
    label = '' + ctr
  }
  const edge = h3ToGeoBoundary(index)
  return {
    centreLatLng: L.latLng(centre[0], centre[1]),
    name: label,
    index: index,
    styles: cellType,
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

export const LAT_LON_LABELS = 'lat_lon_labels'
export const X_Y_LABELS = 'x_y_labels'
export const CTR_LABELS = 'ctr_labels'

/** see if we can perform i/j cell labelling for this grid.
 * The algorithm runs through all the cells in the grid until one
 * fails - then it immediately returns false
 */
export const checkIfIJWorks = (grid: string[], centre: H3Index): boolean => {
  return !grid.some((cell: string) => {
    let coords = undefined
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
export const createGridH3 = (bounds: L.LatLngBounds, res: number, labelType: string, cellDefs: any): SergeGrid3 => {
  // outer boundary
  const boundsNum = h3polyFromBounds(bounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = bounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  // if game designer wants IJ labels, check we can do them
  const correctedLabelType = labelType === X_Y_LABELS ? checkIfIJWorks(cells, centreIndex) ? labelType : LAT_LON_LABELS : labelType

  const typedDefs = cellDefs as unknown as GeoJSON.FeatureCollection

  // flatten the definitions array
  const cellStyles: Array<{index: string, style: number}> = typedDefs && typedDefs.features.map((value: Feature<Geometry, GeoJsonProperties>) => {
    return {
      index: (value.properties && value.properties.hexname) || '',
      style: (value.properties && value.properties.type) || ''
    }
  })

  // create the grid
  let ctr = 0
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
    const res = indexToHex(cell, centreIndex, correctedLabelType, ++ctr, powerCell)
    return res
  })

  if (styleMissing) {
    console.log('Didn\'t find style definition for ' + styleMissing + ' cells')
  }

  return grid
}
