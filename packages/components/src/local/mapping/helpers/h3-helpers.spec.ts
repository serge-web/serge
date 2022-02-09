import data from '../data/atlantic-cells-short'
import L from 'leaflet'
import { createGridH3, CTR_LABELS, LAT_LON_LABELS, X_Y_LABELS } from './h3-helpers'

const smallBounds = L.latLngBounds(L.latLng(40, -20), L.latLng(60, 0))
const largeBounds = L.latLngBounds(L.latLng(40, -90), L.latLng(65, 10))

it('generates hex coords', () => {
  const res = 3
  const grid = createGridH3(smallBounds, res, LAT_LON_LABELS, data)
  expect(grid.length).toEqual(258)
  const first = grid[0]
  expect(first.index).toEqual('83352dfffffffff')
  expect(first.name).toEqual('43.1N 19.1W')
  expect(first.poly.length).toEqual(6)
})

it('generates hex coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, LAT_LON_LABELS, data)
  expect(grid.length).toEqual(1470)
  const first = grid[0]
  expect(first.name).toEqual('62.0N 40.9W')
  expect(first.poly.length).toEqual(6)
})

it('generates xy coords for small area', () => {
  const res = 3
  const grid = createGridH3(smallBounds, res, X_Y_LABELS, data)
  const first = grid[0]
  expect(first.name).toEqual('?S04')
  expect(first.poly.length).toEqual(6)
})

it('generates xy coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, X_Y_LABELS, data)
  const first = grid[238] // debugging showed that tthis index failed
  expect(first.name).toEqual('n/a')
  expect(first.poly.length).toEqual(6)
})

it('generates ctr coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, CTR_LABELS, data)
  const first = grid[238] // debugging showed that tthis index failed
  expect(first.name).toEqual('239')
  expect(first.poly.length).toEqual(6)
})
