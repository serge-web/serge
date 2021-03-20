/* global it expect */
import L from 'leaflet'
import cellTypesList from '../data/cell-types-2-small'
import cellTypesList3 from '../data/cell-types-3-small'
import createGridFromCSV from './create-grid-from-csv'
import createGridFromCSV2 from './create-grid-from-csv2'
import createGrid from './create-grid'

it('Construct grid from very new dataset', () => {
  const cells: any = cellTypesList3
  expect(cells.length).toEqual(20)

  const grid = createGridFromCSV2(cells, L.latLng(72, -50), 0.5, L.point(52, -5))
  expect(grid.length).toEqual(20)
  console.log(grid[0])

  expect(grid.cellFor(L.latLng(44, -22))).toEqual({ a: 12 })
})


it('Construct grid from new dataset', () => {
  const cells: any = cellTypesList
  expect(cells.length).toEqual(20)

  const grid = createGridFromCSV(cells, L.latLng(72, -50), 0.5, L.point(52, -5))
  expect(grid.length).toEqual(20)

  expect(grid.cellFor(L.latLng(44, -22))).toEqual({ a: 12 })
})

it('Construct grid from legacy dataset', () => {
  const grid = createGrid(L.latLngBounds(L.latLng(70, -30), L.latLng(40, -5)), 0.5)
  expect(grid.length).toEqual(20)

  expect(grid.cellFor(L.latLng(44, -22))).toEqual({ a: 12 })
})
