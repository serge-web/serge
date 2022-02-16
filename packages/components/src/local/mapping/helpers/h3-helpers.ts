import { Terrain, CellLabelStyle } from '@serge/config'
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

const createLabel = (labelType: CellLabelStyle, index: H3Index, centreIndex: H3Index, centre: number[], ctr: number): string => {
  switch (labelType) {
    case CellLabelStyle.X_Y_LABELS: {
      let label
      try {
        const coords = experimentalH3ToLocalIj(centreIndex, index)
        label = labelFor(coords.i, coords.j)
      } catch (err) {
        label = 'n/a'
      }
      return label
    }
    case CellLabelStyle.LAT_LON_LABELS: {
      return labelFor3(centre)
    }
    case CellLabelStyle.H3_LABELS: {
      return index
    }
    case CellLabelStyle.CTR_LABELS:
    default:
      return '' + ctr
  }
}

/** create our composite cell structure for this index */
const indexToHex = (centre: number[], label: string, index: string, cellType: number): SergeHex3 => {
  const edge = h3ToGeoBoundary(index)
  return {
    centreLatLng: L.latLng(centre[0], centre[1]),
    name: label,
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
export const createGridH3 = (bounds: L.LatLngBounds, res: number, labelType: CellLabelStyle, cellDefs: any): SergeGrid3 => {
  // outer boundary
  const boundsNum = h3polyFromBounds(bounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = bounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  // if game designer wants IJ labels, check we can do them
  const correctedLabelType = labelType === CellLabelStyle.X_Y_LABELS ? checkIfIJWorks(cells, centreIndex) ? labelType : CellLabelStyle.LAT_LON_LABELS : labelType

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
  const grid = cells.map((cell: H3Index, ctr: number): SergeHex3 => {
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
    const label = createLabel(correctedLabelType, cell, centreIndex, centre, ctr + 1)
    const res = indexToHex(centre, label, cell, powerCell)
    return res
  })

  if (styleMissing) {
    console.log('Didn\'t find style definition for ' + styleMissing + ' cells')
  }

  return grid
}
