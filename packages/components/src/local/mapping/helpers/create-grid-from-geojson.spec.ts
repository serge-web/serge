/* global it expect */
import L from 'leaflet'

import atlanticCells from '../data/atlantic-cells'

import atlanticCellsShort from '../data/atlantic-cells-short'
import createGridFromGeoJSON, { labelFor } from './create-grid-from-geojson'
import createGrid from './create-grid'
import { SergeHex } from '@serge/custom-types'
// import cellTypesList3 from '../data/cell-types-3-small'

it('Construct grid from very new dataset', () => {
  const cells: any = atlanticCellsShort.features
  expect(cells.length).toEqual(11)
  const grid = createGridFromGeoJSON(atlanticCellsShort, 30)
  expect(grid.length).toEqual(11)

  // inspect first one
  const first: SergeHex<{}> = grid[0]
  expect(first.poly.length).toEqual(7)
  expect(first.type).toEqual('land')
  expect(first.name).toEqual('AA20')
  expect(first.q).toEqual(26)
  expect(first.r).toEqual(19)
  expect(first.centreLatLng.lat).toEqual(31.767519800604944)
  expect(first.centreLatLng.lng).toEqual(4.734876073881146)

  // ok, check routing
  const fourth: SergeHex<{}> = grid[4]
  expect(fourth.name).toEqual('AL16')
  const between = grid.hexesBetween(first, fourth)
  expect(between.length).toEqual(12)
})

it('Check routing', () => {
  const cells: any = atlanticCells.features
  expect(cells.length).toEqual(2251)
  const grid = createGridFromGeoJSON(atlanticCells, 30)
  expect(grid.length).toEqual(2251)

  // get origin cell
  const origin = 'X30'
  const first: SergeHex<{}> | undefined = grid.find((cell: SergeHex<{}>) => cell.name === origin)
  expect(first).toBeTruthy()

  if (first) {
    const inRange = grid.hexesInRange(first, 1, true)
    // console.log(origin, inRange.map((cell: SergeHex<{}>) => cell.name))
    expect(inRange.length).toEqual(7)
  } else {
    expect(false).toBeTruthy()
  }
})

it('Check path', () => {
  const cells: any = atlanticCells.features
  expect(cells.length).toEqual(2251)
  const grid = createGridFromGeoJSON(atlanticCells, 30)
  expect(grid.length).toEqual(2251)

  // get origin cell
  const origin = 'X30'
  const first: SergeHex<{}> | undefined = grid.find((cell: SergeHex<{}>) => cell.name === origin)
  expect(first).toBeTruthy()

  const destination = 'AB29'
  const dest: SergeHex<{}> | undefined = grid.find((cell: SergeHex<{}>) => cell.name === destination)
  expect(dest).toBeTruthy()

  if (first && dest) {
    const inRange = grid.hexesBetween(first, dest)
    // console.log(origin, inRange.map((cell: SergeHex<{}>) => cell.name))
    expect(inRange.length).toEqual(5)
  } else {
    expect(false).toBeTruthy()
  }
})

it('Generate row/col labels', () => {
  expect(labelFor(0, 0)).toEqual('A01')
  expect(labelFor(1, 1)).toEqual('B02')
  expect(labelFor(27, 35)).toEqual('AB36')
  expect(labelFor(227, 35)).toEqual('HT36')
})

it('Construct grid from legacy dataset', () => {
  const grid = createGrid(L.latLngBounds(L.latLng(70, -30), L.latLng(40, -5)), 30)
  expect(grid.length).toEqual(3672)
})
