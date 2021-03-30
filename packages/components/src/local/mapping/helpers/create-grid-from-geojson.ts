import L from 'leaflet'
import { defineGrid, extendHex, PointLike } from 'honeycomb-grid'
import { SergeHex, SergeGrid } from '@serge/custom-types'
import { padInteger } from '@serge/helpers'
import { Terrain } from '@serge/config'

/** lookup for types to styles */
const typeFor = (type: number): {terrain: Terrain, type: string, fillColor: string} => {
  switch (type) {
    case 0: return { terrain: Terrain.LAND, type: 'land', fillColor: '#0f0' }
    case 1: return { terrain: Terrain.SEA, type: 'sea', fillColor: '#f00' }
    case 2: return { terrain: Terrain.SEA, type: 'loud', fillColor: '#0ff' }
    case 3: return { terrain: Terrain.SEA, type: 'quiet', fillColor: '#a0a' }
    case 4: return { terrain: Terrain.SEA, type: 'medium', fillColor: '#0a0' }
    default: return { terrain: Terrain.SEA, type: 'sea', fillColor: '#6bb' }
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
 * helper function to convert (0, 0) to A1
 */
export const labelFor = (x: number, y: number): string => {
  const cycles = Math.floor(x / 26)
  const leading = cycles ? String.fromCharCode(cycles + 64) : ''
  return leading + String.fromCharCode(x - cycles * 26 + 65) + padInteger(y + 1)
}

// const polyCentre = (poly: L.LatLng[]): L.LatLng => {
//   const numberArr: Array<[number, number]> = poly.map((pos: L.LatLng): [number, number] => {
//     return [pos.lat, pos.lng]
//   })
//   const centre: [number, number] = numberArr.reduce(function (x,y) {
//     return [x[0] + y[0]/poly.length, x[1] + y[1]/poly.length]
//   }, [0,0])
//   return  L.latLng(centre)
// }

/**
 *  create hexagonal grid
 * @param {FeatureCollection} cells Outer bounds of grid
 * @param {number} tileSizeMins Tile diamater, in minutes
 * @returns {SergeGrid<SergeHex<{}>>} Honeycomb hex grid
 */
const createGridFromGeoJSON = (cells: any, tileSizeMins: number): SergeGrid<SergeHex<{}>> => {
  // TODO: cast cells to GeoJSON FeatureCollection
  // ian tried, but it generated compiler error for `honeyGrid`
  const hexes = cells.features.map((cell: any) => {
    const { type, fillColor, terrain } = typeFor(cell.properties.type as number)
    const coords = cell.geometry.coordinates
    const poly = coords[0].map((point: any) => {
      return L.latLng(point[1], point[0])
    })
    const centerStr = cell.properties.center_str
    const parts = centerStr.split('\/') // eslint-disable-line no-useless-escape
    const centre = L.latLng(parseFloat(parts[0]), parseFloat(parts[1]))
    const x = cell.properties.ai
    const y = cell.properties.aj
    return {
      q: x,
      r: y,
      s: -y - x,
      centreLatLng: centre,
      poly: poly,
      type: type,
      terrain: terrain,
      fillColor: fillColor,
      name: labelFor(x, y)
    }
  })
  // define grid as flat
  const Hex = extendHex({ orientation: 'pointy' })
  const honeyGrid = defineGrid(Hex)
  const grid = honeyGrid(hexes)

  // const offsetGrid = grid.map((hex:any) => {
  //   const offset = hex.toCartesian()
  //   return {
  //     ...hex,
  //     name: labelFor(offse)
  //     x: offset.x,
  //     y: offset.y,
  //     q: undefined,
  //     r:,
  //     s:
  //   }
  // })

  const sergeGrid: SergeGrid<SergeHex<{}>> = grid as SergeGrid<SergeHex<{}>>

  sergeGrid.tileDiameterMins = tileSizeMins

  /** provide method that only requires the world location,
   * taking other params from grid
   */
  sergeGrid.toScreen = (point: L.LatLng): PointLike => {
    // TODO: remove toScreen method, we don't need it
    return L.point(point.lat, point.lng)
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
    // TODO: search through whole grid. Maybe start with some kind
    // of binary search? Maybe not, since they're not in order.
    // maybe access bins, instead.
    console.warn("Didn't receive origin hex, can't find it")
    return undefined
  }

  return sergeGrid
}

export default createGridFromGeoJSON
