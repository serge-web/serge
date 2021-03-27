/* global it expect */
import L from 'leaflet'

import atlanticCells from '../data/atlantic-cells-short'
import createGridFromGeoJSON from './create-grid-from-geojson'
import createGrid from './create-grid'
import { SergeHex } from '@serge/custom-types'
// import cellTypesList3 from '../data/cell-types-3-small'

it('Construct grid from very new dataset', () => {
  const cells: any = atlanticCells.features
  expect(cells.length).toEqual(11)
  const grid = createGridFromGeoJSON(atlanticCells, 0.5)
  expect(grid.length).toEqual(11)

  // inspect first one
  const first: SergeHex<{}> = grid[0]
  expect(first.poly.length).toEqual(7)
  expect(first.type).toEqual('sea')
  expect(first.name).toEqual('50/14')
  expect(first.x).toEqual(25)
  expect(first.y).toEqual(18)
  expect(first.centreLatLng.lat).toEqual(72.1498289897283)
  expect(first.centreLatLng.lng).toEqual(-41.856757990724766)

  // ok, check routing
  const fourth: SergeHex<{}> = grid[4]
  expect(fourth.name).toEqual('14/54')
  const between = grid.hexesBetween(first, fourth)
  expect(between.length).toEqual(59)
})

it('Construct grid from legacy dataset', () => {
  const grid = createGrid(L.latLngBounds(L.latLng(70, -30), L.latLng(40, -5)), 30)
  expect(grid.length).toEqual(3672)
})
