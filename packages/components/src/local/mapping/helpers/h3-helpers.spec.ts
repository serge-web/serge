import L from 'leaflet'
import { createGridH3 } from './h3-helpers'

const atlanticBounds = L.latLngBounds(L.latLng(40, -30), L.latLng(65, 10))

it('generates hex coords', () => {
  const res = 3
  const grid = createGridH3(atlanticBounds, res)
  expect(grid.length).toEqual(638)
  const first = grid[0]
  expect(first.index).toEqual('8319b4fffffffff')
  expect(first.name).toEqual('L10')
  expect(first.x).toEqual(11)
  expect(first.y).toEqual(9)
  expect(first.poly.length).toEqual(6)
})
