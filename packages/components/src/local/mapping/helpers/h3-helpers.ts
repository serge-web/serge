import { SergeGrid3, SergeHex3 } from '@serge/custom-types'
import { experimentalH3ToLocalIj, geoToH3, H3Index, h3ToGeo, h3ToGeoBoundary, polyfill } from 'h3-js'
import L from 'leaflet'
import { labelFor } from './create-grid-from-geojson'

const labelFor3 = (centre: number[]): string => {
  const lat = centre[0]
  const lng = centre[1]
  const latHemi = lat > 0 ? 'N' : 'S'
  const longHemi = lng > 0 ? 'E' : 'W'
  return Math.abs(centre[0]).toFixed(2) + latHemi + ' ' + Math.abs(centre[1]).toFixed(2) + longHemi
}

/** create our composite cell structure for this index */
const indexToHex = (index: H3Index, centreIndex: H3Index, labelType: string): SergeHex3 => {
  const centre = h3ToGeo(index)
  let label = ''
  if (labelType === X_Y_LABELS) {
    try {
      const coords = experimentalH3ToLocalIj(centreIndex, index)
      label = labelFor(coords.i, coords.j)
    } catch (err) {
      label = 'n/a'
    }
  } else {
    label = labelFor3(centre)
  }
  const edge = h3ToGeoBoundary(index)
  return {
    centreLatLng: centre,
    name: label,
    index: index,
    styles: 0,
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

const h3polyFromBounds = (bounds: L.LatLngBounds): number[][] => {
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

/** create the grid of h3 cells
  * @param {L.LatLngBounds} bounds Outer bounds of grid
  * @param {number} res h grid resolution
  * @returns {SergeGrid3} h hex grid
  */
export const createGridH3 = (bounds: L.LatLngBounds, res: number, labelType: string): SergeGrid3 => {
  // outer boundary
  const boundsNum = h3polyFromBounds(bounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = bounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  // create the grid
  const grid = cells.map((cell: H3Index): SergeHex3 => {
    return indexToHex(cell, centreIndex, labelType)
  })
  return grid
}