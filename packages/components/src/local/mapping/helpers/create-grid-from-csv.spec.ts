/* global it expect */
import L from 'leaflet'
import cellTypesList from '../data/cell-types-2-small'
import cellTypesList3 from '../data/cell-types-3-small'
import createGridFromCSV from './create-grid-from-csv'
import createGridFromCSV2 from './create-grid-from-csv2'
import createGrid from './create-grid'
import { SergeHex } from '@serge/custom-types'

it('Construct grid from very new dataset', () => {
  const cells: any = cellTypesList3
  expect(cells.length).toEqual(19)
  const grid = createGridFromCSV2(cells, L.latLng(72, -50), 0.5, L.point(52, -5))
  expect(grid.length).toEqual(19)
  const first: SergeHex<{}> = grid[0]
  //  expect(first.poly.length).toEqual(7)
  expect(first.type).toEqual('loud')
  expect(first.name).toEqual('23042')

  // ok, check routing
  const tenth: SergeHex<{}> = grid[10]
  expect(tenth.name).toEqual('25042')
  const between = grid.hexesBetween(first, tenth)
  expect(between.length).toEqual(3)
})

it('Construct grid from new dataset', () => {
  const cells: any = cellTypesList
  expect(cells.length).toEqual(20)

  const grid = createGridFromCSV(cells, L.latLng(72, -50), 0.5, L.point(52, -5))
  expect(grid.length).toEqual(20)
})

it('Construct grid from legacy dataset', () => {
  const grid = createGrid(L.latLngBounds(L.latLng(70, -30), L.latLng(40, -5)), 30)
  expect(grid.length).toEqual(3672)
})
