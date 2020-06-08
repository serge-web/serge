
import L from 'leaflet'
import { defineGrid, extendHex, Grid, Point, PointLike } from 'honeycomb-grid'
import { SergeHex, SergeGrid } from '@serge/custom-types'
import { toWorld, toScreen } from '@serge/helpers'
import cellName from './cell-name'
import cellTypeFor from './cellTypeFor'
import cellTypesList from '../data/cell-types'

/**
 *  create hexagonal grid
 * @param {L.LatLngBounds} bounds Outer bounds of grid
 * @param {number} tileDiameterMins Tile diamater, in minutes
 * @returns {SergeGrid<SergeHex<{}>>} Honeycomb hex grid
 */
const createGrid = (bounds: L.LatLngBounds, tileDiameterMins: number): SergeGrid<SergeHex<{}>> => {
  // Convert diameter in mins to radius in degs
  const tileSizeDegs: number = tileDiameterMins / 60

  // offset the origin, by half a tile
  const correctedOrigin: L.LatLng = L.latLng(bounds.getNorth() - tileSizeDegs / 2, bounds.getWest() + tileSizeDegs / 2)

  // the width of a degree of longitude varies with latitude. Start by
  // finding the width of the box 1/2 way down it
  const centreLat: number = bounds.getSouth() + (bounds.getNorth() - bounds.getSouth()) / 2
  const measureLeft: L.LatLng = L.latLng(centreLat, bounds.getWest())
  const measureRight: L.LatLng = L.latLng(centreLat, bounds.getEast())
  const boxWidthM: number = measureLeft.distanceTo(measureRight)

  // now find the width of one tile
  const cellCentre: L.LatLng = L.latLng(centreLat, bounds.getWest() + tileSizeDegs)
  const cellWidthM: number = measureLeft.distanceTo(cellCentre)

  // and calculate the number of cells that fit in the provided area
  const widthCells: number = Math.ceil(boxWidthM / cellWidthM) + 4

  // lines of latitude are largely equi-distant, so perform simple calculation
  const heightcells: number = Math.ceil((bounds.getNorth() - bounds.getSouth()) / (tileSizeDegs))

  // since we have pointy arrangement, we need to provide more to get height, since they're
  // more densely packed in vertical direction (more overlap)
  const stretchedHeight: number = heightcells * 9 / 8

  // define grid as flat
  const Hex = extendHex({ orientation: 'flat' })
  const grid = defineGrid(Hex)

  // generate grid items
  const rawCells = grid.rectangle({ width: widthCells, height: stretchedHeight })
  const newCells = rawCells.map(cell => {
    const newCell: SergeHex<{}> = cell as SergeHex<{}>
    newCell.name = cellName(newCell)

    // generate the cell type
    newCell.type = cellTypeFor(newCell, cellTypesList)

    // generate the cell centre in Leaflet coords
    const centreHex: Point = cell.toPoint()
    newCell.centreLatLng = toWorld(centreHex, correctedOrigin, tileSizeDegs / 2)
    return newCell
  })
  const unTyped: any = newCells
  const asSerge: Grid<SergeHex<{}>> = unTyped as Grid<SergeHex<{}>>

  // sort out corner offset
  // the hexes all have the same corners object, so just use the first one
  const hexOne = asSerge[0]

  // get the coordinates of the centre of the hex, relative
  // to the top-left origin
  const centreH = hexOne.center()

  // and the coords of the top-left origin
  const cellOrigin = hexOne.coordinates()

  // capture the offset between a cell centre, and the cell origin
  const centreOffset = L.point(centreH).subtract(L.point(cellOrigin))

  const sergeGrid: SergeGrid<SergeHex<{}>> = asSerge as SergeGrid<SergeHex<{}>>
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
    const shiftedCellCoords = grid.pointToHex(cellCoords.x, cellCoords.y)

    // and now retrieve the cell at these coords
    return sergeGrid.get(shiftedCellCoords)
  }

  return sergeGrid
}

export default createGrid
