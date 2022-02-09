import L from 'leaflet'
import { createGridH3, LAT_LON_LABELS, X_Y_LABELS } from './h3-helpers'

const smallBounds = L.latLngBounds(L.latLng(40, -20), L.latLng(60, 0))
const largeBounds = L.latLngBounds(L.latLng(40, -90), L.latLng(65, 10))

it('generates hex coords', () => {
  const res = 3
  const grid = createGridH3(smallBounds, res, LAT_LON_LABELS)
  expect(grid.length).toEqual(258)
  const first = grid[0]
  expect(first.index).toEqual('83352dfffffffff')
  expect(first.name).toEqual('43.13N 19.07W')
  expect(first.poly.length).toEqual(6)
})

it('generates hex coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, LAT_LON_LABELS)
  expect(grid.length).toEqual(1470)
  const first = grid[0]
  expect(first.name).toEqual('62.01N 40.87W')
  expect(first.poly.length).toEqual(6)
})

it('generates xy coords for small area', () => {
  const res = 3
  const grid = createGridH3(smallBounds, res, X_Y_LABELS)
  const first = grid[0]
  expect(first.name).toEqual('?S04')
  expect(first.poly.length).toEqual(6)
})

it('generates xy coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, X_Y_LABELS)
  const first = grid[238] // debugging showed that tthis index failed
  expect(first.name).toEqual('n/a')
  expect(first.poly.length).toEqual(6)
})
