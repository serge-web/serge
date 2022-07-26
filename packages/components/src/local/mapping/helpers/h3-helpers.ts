import { Terrain } from '@serge/config'
import { LabelStore, SergeGrid3, SergeHex3 } from '@serge/custom-types'
import { BBox, Feature, GeoJsonProperties, Geometry, Position } from 'geojson'
import { CoordIJ, experimentalH3ToLocalIj, geoToH3, H3Index, h3ToGeo, h3ToGeoBoundary, polyfill, H3IndexInput, h3SetToMultiPolygon, h3GetResolution } from 'h3-js'
import L from 'leaflet'
import { orderBy } from 'lodash'
import * as turf from '@turf/turf'

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

export const toVector = (dx: number, dy: number): {magnitude: number, direction: number} => {
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

export const leafletUnion = (poly1: L.LatLng[], poly2: L.LatLng[]): L.LatLng[] | undefined => {
  const t1 = turf.polygon([toTurf(poly1)])
  const t2 = turf.polygon([toTurf(poly2)])
  const union = turf.union(t1, t2)
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
  const l1 = num2LatLng(p1)
  const l2 = num2LatLng(p2)
  return 90 - Math.atan2(l2.lat - l1.lat, l2.lng - l1.lng) * 180 / Math.PI
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

const cellStylesFor = (legacyDefs: GeoJSON.FeatureCollection, cellDefs: HexTypeDataset[]): Array<{index: string, style: number}> => {
  if (cellDefs) {
    const styleArr = cellDefs.map((data: HexTypeDataset, index: number) => {
      return data.cells.map((layerName: string) => {
        return {
          index: layerName,
          style: index
        }
      })
    })
    return styleArr.flat()
  } else {
    // stick with legacy data
    return legacyDefs ? legacyDefs.features.map((value: Feature<Geometry, GeoJsonProperties>) => {
      return {
        index: (value.properties && value.properties.hexname) || '',
        style: (value.properties && value.properties.type) || ''
      }
    }) : []
  }
}

/** create the grid of h3 cells
  * @param {L.LatLngBounds} legacyBounds Outer bounds of grid
  * @param {number} legacyRes h grid resolution
  * @returns {SergeGrid3} h hex grid
  */
export const createGridH3 = (legacyBounds: L.LatLngBounds, legacyRes: number, legacyCellDefs: any, cellDefs: any): SergeGrid3 => {
  const newDefs = cellDefs as ProcessedCellRefs
  const bounds = newDefs ? newDefs.bounds : legacyBounds
  const res = newDefs ? h3GetResolution(newDefs.cellSets[0].cells[0]) : legacyRes
  // outer boundary
  const h3Bounds = h3polyFromBounds(bounds)

  // set of cells in this area
  const cells = cellDefs ? newDefs.cells : polyfill(h3Bounds, res)

  // sort out the centre index
  const centreLoc = bounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  const typedLegacyDefs = legacyCellDefs as unknown as GeoJSON.FeatureCollection
  const typedCellDefs = cellDefs as unknown as ProcessedCellRefs

  // flatten the definitions array
  const cellStyles = cellStylesFor(typedLegacyDefs, typedCellDefs && typedCellDefs.cellSets)

  // create the grid
  let styleMissing = 0
  const grid = cells.map((cell: string): SergeHex3 => {
    const cellIndex = cell as H3Index
    // see if we have definition for this index
    const matches = cellStyles && cellStyles.filter((value: {index: string, style: number}) => {
      return value.index === cell
    })
    let styleSum = 0
    matches.forEach((value: {index: string, style: number}) => {
      styleSum += Math.pow(2, value.style)
    })
    if (!styleSum) {
      styleMissing++
    }
    // convert style to power of 2, so we can have multiple styles
    const powerCell = styleSum
    const centre = h3ToGeo(cellIndex)
    const labels = createLabels(cell as H3Index, centreIndex, centre)
    const edge = h3ToGeoBoundary(cell as H3Index)
    return {
      centreLatLng: L.latLng(centre[0], centre[1]),
      labelStore: labels,
      index: cell as string,
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

type HexRef = Array<string | boolean>

interface HexRefs {
  columns: Array<string>
  data: Array<HexRef>
}

interface HexTypeDataset {
  typeName: string
  cells: Array<string>
  bounds: L.LatLngBounds
}

export interface ProcessedCellRefs {
  bounds: L.LatLngBounds
  cellSets: HexTypeDataset[]
  cells: string[]
}

interface PolySet {
  name: string
  bounds: L.LatLngBounds
  polys: number[][][][]
}

const boundsFor = (allCells: Array<string>): L.LatLngBounds => {
  const boundaries = allCells.map((value: string) => h3ToGeoBoundary(value, false))
  const allPoints = boundaries.flat()

  let minLat = Infinity; let minLng = Infinity; let maxLat = -Infinity; let maxLng = -Infinity
  allPoints.forEach((point: number[]) => {
    const [lat, lng] = point
    minLng = Math.min(lng, minLng ?? +Infinity)
    maxLng = Math.max(lng, maxLng ?? -Infinity)
    minLat = Math.min(lat, minLat ?? +Infinity)
    maxLat = Math.max(lat, maxLat ?? -Infinity)
  })
  return L.latLngBounds(L.latLng(minLat, minLng), L.latLng(maxLat, maxLng))
}

/** parse the file of HexRefs */
export const parseHexRefs = (data: any): ProcessedCellRefs => {
  const hexRefs = data as HexRefs

  const allCells: string[] = hexRefs.data.map((value: HexRef): string => value[0] as string)

  const bounds = boundsFor(allCells)

  const allColumns = hexRefs.columns
  // strip the name column
  const myColumns = allColumns.filter((value: string) => value !== 'Name')
  const datasets: Array<HexTypeDataset> = myColumns.map((column: string, index: number): HexTypeDataset => {
    const cellRefs = hexRefs.data.filter((value: HexRef) => value[index + 1])
    const cellNames = cellRefs.map((value: HexRef) => value[0]) as string[]
    const bounds = boundsFor(cellNames)
    const dataset: HexTypeDataset = {
      typeName: column,
      cells: cellNames,
      bounds: bounds
    }
    return dataset
  })

  return {
    bounds: bounds,
    cellSets: datasets,
    cells: allCells
  }
}

export const generatePolys = (data: HexTypeDataset[]): PolySet[] => {
  return data.map((value: HexTypeDataset) => {
    const cells: Array<H3IndexInput> = value.cells as Array<H3IndexInput>
    const regions = h3SetToMultiPolygon(cells, false)
    return {
      name: value.typeName,
      polys: regions,
      bounds: value.bounds
    }
  })
}

export const invertCoords = (feature: Position[][][]): Position[][][] => {
  return feature.map((val1: Position[][]): Position[][] => {
    return val1.map((val2: Position[]): Position[] => {
      return val2.map((val3: Position): Position => {
        return [val3[1], val3[0]]
      })
    })
  })
}

export const convertToFeatures = (data: PolySet[], bounds: L.LatLngBounds): GeoJSON.FeatureCollection => {
  const convertBounds = (lBounds: L.LatLngBounds): BBox => {
    const bbox: BBox = [lBounds.getWest(), lBounds.getNorth(), lBounds.getEast(), lBounds.getSouth()]
    return bbox
  }
  const overallBounds = convertBounds(bounds)
  const features = data.map((poly: PolySet, index: number): Feature<Geometry> => {
    // convert Leaflet bounds to GeoJSON format
    const bbox: BBox = convertBounds(poly.bounds)
    // invert the coordinates
    const newCoords = invertCoords(poly.polys)
    const res: Feature<Geometry> = {
      type: 'Feature',
      properties: {
        type: index,
        name: poly.name,
        // flag to indicate this is v2 of hex format
        v2: true
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: newCoords
      },
      bbox: bbox
    }
    return res
  })
  return {
    type: 'FeatureCollection',
    features: features,
    bbox: overallBounds
  }
}
