
import L from 'leaflet'
import { defineGrid, extendHex, Grid, Point } from 'honeycomb-grid'
import SergeHex from '../types/serge-hex'
import SergeGrid from '../types/serge-grid'
import cellName from '../../assets/helpers/cellName'
import toWorld from '../../hex-grid/helpers/to-world'

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
  const widthCells: number = Math.ceil(boxWidthM / cellWidthM) + 1

  // lines of latitude are largely equi-distant, so perform simple calculation
  const heightcells: number = Math.ceil((bounds.getNorth() - bounds.getSouth()) / (tileSizeDegs))

  // since we have pointy arrangement, we need to provide more to get height, since they're
  // more densely packed in vertical direction (more overlap)
  const stretchedHeight: number = heightcells * 4 / 3

  // define grid as flat
  const Hex = extendHex({ orientation: 'pointy' })
  const grid = defineGrid(Hex)

  // generate grid items
  const rawCells = grid.rectangle({ width: widthCells, height: stretchedHeight })
  const newCells = rawCells.map(cell => {
    const newCell: SergeHex<{}> = cell as SergeHex<{}>
    newCell.name = cellName(newCell)

    // generate the cenll centre in Leaflet coords
    const centreHex: Point = cell.toPoint()
    newCell.centreLatLng = toWorld(centreHex, correctedOrigin, tileSizeDegs / 2)
    return newCell
  })
  const unTyped: any = newCells
  const asSerge: Grid<SergeHex<{}>> = unTyped as Grid<SergeHex<{}>>

  const sergeGrid: SergeGrid<SergeHex<{}>> = asSerge as SergeGrid<SergeHex<{}>>
  sergeGrid.origin = correctedOrigin
  sergeGrid.tileDiameterDegs = tileSizeDegs

  return sergeGrid
}

export default createGrid
