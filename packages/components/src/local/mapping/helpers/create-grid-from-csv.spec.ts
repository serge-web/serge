/* global it expect */
import L from 'leaflet'
 import { SergeGrid, SergeHex } from '@serge/custom-types'
// import createGridFromCSV from './create-grid-from-csv'
import cellTypesList from '../data/cell-types-2-small'
import { extendHex, defineGrid, Grid, PointLike } from 'honeycomb-grid'
import { toWorld, toScreen } from '@serge/helpers'

const typeFor = (type: number): string => {
  switch(type) {
    case 0: return 'sea'
    case 1: return 'land'
    case 2: return 'loud'
    case 3: return 'quiet'
    case 4: return 'medium'
    case 7: return 'front'
    default: return 'sea'
  }
}

const gridFor = (cells: any, correctedOrigin: L.LatLng, tileSizeDegs: number, centreOffset: L.Point) : SergeGrid<SergeHex<{}>> => {
  const hexes = cells.map((cell:any) => {
    const coords: string[] = cell.LatLon.split('/')
    const latLon = L.latLng(parseFloat(coords[0]), parseFloat(coords[1]))
    return {
      x: cell.Row,
      y: cell.Col,
      centreLatLng: latLon,
      type: typeFor(cell.Type as number)
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
    return sergeGrid.get(shiftedCellCoords)
  }

  return sergeGrid
}

it('Construct grid', () => {
  const cells: any = cellTypesList
  expect(cells.length).toEqual(20)

  const grid = gridFor(cells, L.latLng(12,33), 0.002, L.point(0.2, 0.2))

  console.log(grid)

})

// it('Moves merlin back onto frigate', () => {
//   const latLongBounds = L.latLngBounds(L.latLng(14.194809302, 42.3558566271), L.latLng(12.401259302, 43.7417816271))
//   const grid: SergeGrid<SergeHex<{}>> = createGridFromCSV(latLongBounds, 5)
//   expect(grid.length).toEqual(525)
// })
