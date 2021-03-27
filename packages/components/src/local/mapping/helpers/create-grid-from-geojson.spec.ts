/* global it expect */
import L from 'leaflet'

import atlanticCells from '../data/atlantic-cells-short'
import createGridFromGeoJSON from './create-grid-from-geojson'
import createGrid from './create-grid'
import { SergeHex } from '@serge/custom-types'
//import cellTypesList3 from '../data/cell-types-3-small'

it('Construct grid from very new dataset', () => {
  const cells: any = atlanticCells.features
  expect(cells.length).toEqual(8)
  const grid = createGridFromGeoJSON(atlanticCells, 0.5)
  expect(grid.length).toEqual(8)

  // inspect first one
  const first: SergeHex<{}> = grid[0]
  expect(first.poly.length).toEqual(7)
  expect(first.type).toEqual('sea')
  expect(first.name).toEqual('-9-4')
  expect(first.x).toEqual(-9)
  expect(first.y).toEqual(-4)
  expect(first.centreLatLng.lat).toEqual(44.24671121246802)
  expect(first.centreLatLng.lng).toEqual(-8.953084492034252)

  // ok, check routing
  const fourth: SergeHex<{}> = grid[4]
  expect(fourth.name).toEqual('-15-19')
  const between = grid.hexesBetween(first, fourth)
  expect(between.length).toEqual(19)
})

it('Construct grid from legacy dataset', () => {
  const grid = createGrid(L.latLngBounds(L.latLng(70, -30), L.latLng(40, -5)), 30)
  expect(grid.length).toEqual(3672)
})
