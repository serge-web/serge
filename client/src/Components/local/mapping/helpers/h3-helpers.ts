import { Terrain } from 'src/config'
import { LabelStore, SergeGrid3, SergeHex3 } from 'src/custom-types'
import * as turf from '@turf/turf'
import { lineString } from '@turf/turf'
import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import { CoordIJ, experimentalH3ToLocalIj, geoToH3, H3Index, h3ToGeo, h3ToGeoBoundary, hexArea, polyfill } from 'h3-js'
import L, { latLngBounds, LatLngBounds } from 'leaflet'
import { orderBy } from 'lodash'

/** create a formatted lat/long label */
const latLngLabel = (location: number[]): string => {
  const lat = location[0]
  const lng = location[1]
  const latHemi = lat > 0 ? 'N' : 'S'
  const longHemi = lng > 0 ? 'E' : 'W'
  return Math.abs(location[0]).toFixed(2) + latHemi + ' ' + Math.abs(location[1]).toFixed(2) + longHemi
}

/** put a angle in degrees into the 0..360 domain */
export const cleanAngle = (angle: number): number => {
  let res = angle
  while (res < 0) {
    res += 360
  }
  while (res > 360) {
    res -= 360
  }
  return res
}

/** create the assorted label types for this index */
export const createLabels = (index: H3Index, centreIndex: H3Index, centre: number[]): LabelStore => {
  let coords: CoordIJ | undefined
  try {
    coords = experimentalH3ToLocalIj(centreIndex, index)
    // label = labelFor(coords.i, coords.j)
  } catch (err) {
    coords = undefined
  }
  return {
    xy: coords ? '' + coords.i + ', ' + coords.j : 'unknown',
    xyVals: coords ? [coords.i, coords.j] : [],
    ctr: 'pending',
    latLon: latLngLabel(centre)
  }
}

export const latLng2Num = (pos: L.LatLng): number[] => {
  return [pos.lat, pos.lng]
}

export const num2LatLng = (vals: number[]): L.LatLng => {
  return L.latLng(vals[0], vals[1])
}

export const num2Turf = (vals: number[]): number[] => {
  return [vals[1], vals[0]]
}

export const toTurf = (poly: L.LatLng[]): number[][] => {
  return poly.map((val: L.LatLng): number[] => {
    return [val.lng, val.lat]
  })
}

export const toRadians = (degs: number): number => {
  return degs * Math.PI / 180
}

export const toDegrees = (rads: number): number => {
  return rads * 180 / Math.PI
}

export const toVector = (dx: number, dy: number): { magnitude: number, direction: number } => {
  const direction = toDegrees(Math.atan2(dy, dx))
  const magnitude = Math.sqrt(dx * dx + dy * dy)
  return { magnitude, direction }
}

export const leafletContains = (poly: L.LatLng[], point: L.LatLng): boolean => {
  const t1 = turf.polygon([toTurf(poly)])
  const t2 = turf.point([point.lng, point.lat])
  return turf.booleanContains(t1, t2)
}

export const leafletContainsTurf = (poly: number[][], point: L.LatLng): boolean => {
  const t1 = turf.polygon([poly])
  const t2 = turf.point([point.lng, point.lat])
  return turf.booleanContains(t1, t2)
}

export const leafletBuffer = (poly1: L.LatLng[], distanceKm: number): L.LatLng[] => {
  const t1 = turf.polygon([toTurf(poly1)])
  const t2 = turf.buffer(t1, distanceKm, { units: 'kilometers' })
  const coords: turf.Position[][] = t2.geometry.coordinates as turf.Position[][]
  return coords[0].map((value: turf.Position) => {
    return L.latLng(value[1], value[0])
  })
}

export const leafletBufferLine = (poly1: L.LatLng[], distanceKm: number): L.LatLng[] => {
  const t1 = turf.lineString(toTurf(poly1))
  const t2 = turf.buffer(t1, distanceKm, { units: 'kilometers' })
  const coords: turf.Position[][] = t2.geometry.coordinates as turf.Position[][]
  return coords[0].map((value: turf.Position) => {
    return L.latLng(value[1], value[0])
  })
}

export const hexCellsInArea = (h3Res: number, bounds: [[number, number], [number, number]]): number => {
  const avgAreaM2 = hexArea(h3Res, 'm2')
  const lPoly: LatLngBounds = latLngBounds(bounds[0], bounds[1])
  const nPoly = [lPoly.getNorthEast(), lPoly.getSouthWest()]
  const tPoly = toTurf(nPoly)
  const bbounds = lineString(tPoly)
  const bbox = turf.bbox(bbounds.geometry)
  const bboxPoly = turf.bboxPolygon(bbox)
  const areaM2 = turf.area(bboxPoly)
  return Math.floor(areaM2 / avgAreaM2)
}

export const leafletUnion = (poly1: L.LatLng[], poly2: L.LatLng[]): L.LatLng[] | undefined => {
  const t1 = turf.polygon([toTurf(poly1)])
  const t2 = turf.polygon([toTurf(poly2)])
  const union = turf.union(t1, t2)
  if (!union) {
    return
  }
  const data = union.geometry.coordinates
  let depth = 0
  if (Array.isArray(data[0])) {
    depth++
    if (Array.isArray(data[0][0])) {
      depth++
      if (Array.isArray(data[0][0][0])) {
        depth++
      }
    }
  }
  // sometimes we get a multipolygon. When there are some overlapping lines
  // they may be treated as a hole.  So, we get the outer section which
  // is the first item in the array. The holes come after it
  const coords = depth === 2 ? data[0] : data[0][0]
  const typedCoords = coords as turf.Position[]
  if (typedCoords.length !== 100) {
    return typedCoords.map((value: turf.Position) => {
      return L.latLng(value[1], value[0])
    })
  } else {
    return undefined
  }
}

/** calculate the bearing (in degs) between two h3 hex cells */
export const brgBetweenTwoHex = (start: string, end: string): number => {
  const p1 = h3ToGeo(start)
  const p2 = h3ToGeo(end)
  const l1 = num2Turf(p1)
  const l2 = num2Turf(p2)
  return turf.bearing(l1, l2)
}

/** produce a polygon in h3 array structure from a Leaflet LatLngBounds */
export const h3polyFromBounds = (bounds: L.LatLngBounds): number[][] => {
  /** generate h3 coordinate for leaflet lat-long */
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

/** generate Alphanumeric Index grid coords for xy params
 */
export const createIndex = (x: number, y: number, range: string[], base: number): string => {
  let result = ''
  while (x >= 0) {
    // 0 corresponds to `A` and 23 corresponds to `Z`
    result = range[x % base] + result
    x = Math.floor(x / base) - 1
  }
  return result + (y + 1)
}

/** now the grid is completed, generate a user friendly
 * alphanumeric grid over it, offsetting by the highest values of x/y coords
 */
export const updateXy = (grid: SergeGrid3): SergeGrid3 => {
  const withCoords = grid.filter((cell: SergeHex3) => cell.labelStore.xyVals.length)
  const iVals = withCoords.map((cell: SergeHex3): number => cell.labelStore.xyVals[0])
  const jVals = withCoords.map((cell: SergeHex3): number => cell.labelStore.xyVals[1])
  const iMax = Math.max(...iVals)
  const jMax = Math.max(...jVals)
  const range: string[] = 'ABCDEFGHJKLMNPQRSTUVWXYZ'.split('')
  const base = range.length

  const res = grid.map((cell: SergeHex3): SergeHex3 => {
    const coords = cell.labelStore.xyVals
    if (coords.length) {
      const i = coords[0]
      const j = coords[1] // so number coords start at one
      const label = createIndex(iMax - i, jMax - j, range, base)
      cell.labelStore.xy = label
      return cell
    } else {
      // can't generate XY Coords.
      cell.labelStore.xy = '==='
      return cell
    }
  })
  return res
}

/** create the grid of h3 cells
  * @param {L.LatLngBounds} bounds Outer bounds of grid
  * @param {number} res h grid resolution
  * @returns {SergeGrid3} h hex grid
  */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createGridH3 = (bounds: L.LatLngBounds, res: number, cellDefs: any): SergeGrid3 => {
  // outer boundary
  const boundsNum = h3polyFromBounds(bounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // maximum number of cells we allo
  const MAX_CELLS = 100000

  if (cells.length > MAX_CELLS) {
    window.alert('Cannot generate grid. Too many cells:' + cells.length)
    return []
  }

  // sort out the centre index
  const centreLoc = bounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  // eslint-disable-next-line no-undef
  const typedDefs = cellDefs as unknown as GeoJSON.FeatureCollection

  // flatten the definitions array
  const cellStyles: Array<{ index: string, style: number }> = typedDefs && typedDefs.features.map((value: Feature<Geometry, GeoJsonProperties>) => {
    return {
      index: (value.properties && value.properties.hexname) || '',
      style: (value.properties && value.properties.type) || ''
    }
  })

  // create the grid
  let styleMissing = 0
  const grid = cells.map((cell: H3Index): SergeHex3 => {
    // see if we have definition for this index
    const match = cellStyles && cellStyles.find((value: { index: string, style: number }) => {
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
    const edge = h3ToGeoBoundary(cell)
    return {
      centreLatLng: L.latLng(centre[0], centre[1]),
      labelStore: labels,
      index: cell,
      styles: powerCell,
      terrain: Terrain.SEA, // sea by default, until we read the values in TODO:
      poly: edge
    }
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
  const sorted = sortAndLabel(grid)

  // and sort out the xy indices
  const result = updateXy(sorted)

  if (styleMissing) {
    console.log('Didn\'t find style definition for ' + styleMissing + '/' + cells.length + ' cells')
  }

  return result
}
