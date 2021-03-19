import L from 'leaflet'
import { defineGrid, extendHex, Grid, PointLike } from 'honeycomb-grid'
import { SergeHex, SergeGrid } from '@serge/custom-types'
import { toScreen, toWorld } from '@serge/helpers'
 
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

/**
 *  create hexagonal grid
 * @param {L.LatLngBounds} bounds Outer bounds of grid
 * @param {number} tileDiameterMins Tile diamater, in minutes
 * @returns {SergeGrid<SergeHex<{}>>} Honeycomb hex grid
 */
 const createGridFromCSV = (cells: any, correctedOrigin: L.LatLng, tileSizeDegs: number, centreOffset: L.Point): SergeGrid<SergeHex<{}>> => {
  const hexes = cells.map((cell: any) => {
    const coords: string[] = cell.LatLon.split('/')
    const latLon = L.latLng(parseFloat(coords[0]), parseFloat(coords[1]))
    return {
      x: cell.Row,
      y: cell.Col,
      centreLatLng: latLon,
      type: typeFor(cell.Type as number) && 'sea',
      name: cell.Name,
    }
  })
  const grid: Grid<SergeHex<{}>> = hexes as Grid<SergeHex<{}>>
  const sergeGrid: SergeGrid<SergeHex<{}>> = grid as SergeGrid<SergeHex<{}>>

  // define grid as flat
  const Hex = extendHex({ orientation: 'flat' })
  const honeyGrid = defineGrid(Hex)

  sergeGrid.origin = correctedOrigin
  sergeGrid.tileDiameterDegs = tileSizeDegs
  sergeGrid.centerOffset = centreOffset

  /** provide method that only requires the world location,
   * taking other params from grid
   */
    sergeGrid.toScreen = (point: L.LatLng): PointLike => {
    return toScreen(point, sergeGrid.origin, sergeGrid.tileDiameterDegs / 2)
  }
  /** provide method that only requires the hex location,
   * taking other params from grid
   */
  sergeGrid.toWorld = (point: PointLike): L.LatLng => {
    return toWorld(point, sergeGrid.origin, sergeGrid.tileDiameterDegs)
  }
  /** provide method that only requires the world location,
   * taking other params from grid object
   */
  sergeGrid.cellFor = (latLng: L.LatLng): SergeHex<{}> | undefined => {
    // convert to hex coordinates
    const hexCoords: PointLike = sergeGrid.toScreen(latLng)

    // apply the offset, since the cell origin is at the top left
    const cellCoords = L.point(hexCoords.x + sergeGrid.centerOffset.x, hexCoords.y + sergeGrid.centerOffset.y)

    // find the nearest hex cell reference to this location
    const shiftedCellCoords = honeyGrid.pointToHex(cellCoords.x, cellCoords.y)

    // and now retrieve the cell at these coords
    return grid.get(shiftedCellCoords)
  }



  return sergeGrid
}

export default createGridFromCSV
