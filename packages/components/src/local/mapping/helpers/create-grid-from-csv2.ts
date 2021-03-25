import L from 'leaflet'
import { defineGrid, extendHex, PointLike } from 'honeycomb-grid'
import { SergeHex, SergeGrid } from '@serge/custom-types'
import { toScreen } from '@serge/helpers'

/** lookup for types to styles */
const typeFor = (type: number): string => {
  switch (type) {
    case 0: return 'sea'
    case 1: return 'land'
    case 2: return 'loud'
    case 3: return 'quiet'
    case 4: return 'medium'
    case 7: return 'front'
    default: return 'sea'
  }
}

/** helper to determine if point in polygon, taken from
 * here: https://stackoverflow.com/a/31813714/92441
 */
const isMarkerInsidePolygon = (marker: L.LatLng, poly: L.Polyline): boolean => {
  const polyPoints = poly.getLatLngs() as L.LatLng[]
  const x = marker.lat; const y = marker.lng

  let inside = false
  for (let i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
    const xi = polyPoints[i].lat; const yi = polyPoints[i].lng
    const xj = polyPoints[j].lat; const yj = polyPoints[j].lng

    const intersect = ((yi > y) !== (yj > y)) &&
          (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
    if (intersect) inside = !inside
  }

  return inside
}

/**
 *  create hexagonal grid
 * @param {L.LatLngBounds} bounds Outer bounds of grid
 * @param {number} tileDiameterMins Tile diamater, in minutes
 * @returns {SergeGrid<SergeHex<{}>>} Honeycomb hex grid
 */
const createGridFromCSV = (cells: any, correctedOrigin: L.LatLng, tileSizeDegs: number, centreOffset: L.Point): SergeGrid<SergeHex<{}>> => {
  const hexes = cells.map((cell: any) => {
    // todo fix the raw data, don't swap them here
    // const rawArr: number[][] = cell.poly
    // const outArr: number[][] = rawArr.map((point:number[]) =>
    //   [point[1], point[0]]
    // )
    return {
      x: cell.Row,
      y: cell.Col,
      centreLatLng: L.latLng(cell.centreLat, cell.centreLng),
      // don't read poly from file, they don't look right
      // poly: outArr,
      type: typeFor(cell.Type as number) && 'sea',
      name: cell.Name
    }
  })
  // define grid as flat
  const Hex = extendHex({ orientation: 'flat' })
  const honeyGrid = defineGrid(Hex)
  const grid = honeyGrid(hexes)
  const sergeGrid: SergeGrid<SergeHex<{}>> = grid as SergeGrid<SergeHex<{}>>

  sergeGrid.origin = correctedOrigin
  sergeGrid.tileDiameterDegs = tileSizeDegs
  sergeGrid.centerOffset = centreOffset

  /** provide method that only requires the world location,
   * taking other params from grid
   */
  sergeGrid.toScreen = (point: L.LatLng): PointLike => {
    return toScreen(point, sergeGrid.origin, sergeGrid.tileDiameterDegs / 2)
  }
  /** provide method that only requires the world location,
   * taking other params from grid object
   * @param (L.LatLng) latLng point on map
   * @param (SergeHex<{}>) origin latest point accessed. We'll search outwards from this one
   */
  sergeGrid.cellFor = (latLng: L.LatLng, origin: SergeHex<{}>): SergeHex<{}> | undefined => {
    if (origin.poly) {
      const oPoly = L.polyline(origin.poly)
      if (isMarkerInsidePolygon(latLng, oPoly)) {
        return origin
      } else {
        // find adjacent hexes
        const ring = sergeGrid.hexesInRange(origin, 3)
        const found = ring.find(hex => {
          const oPoly = L.polyline(hex.poly)
          return isMarkerInsidePolygon(latLng, oPoly)
        })
        if (found) {
          return found
        }
        return undefined
      }
    }
    return undefined
  }

  return sergeGrid
}

export default createGridFromCSV
