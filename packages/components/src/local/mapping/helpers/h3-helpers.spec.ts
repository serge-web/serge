import data from '../data/atlantic-cells-short'
import L from 'leaflet'
import { checkIfIJWorks, createGridH3, h3polyFromBounds } from './h3-helpers'
import { geoToH3, polyfill } from 'h3-js'

const smallBounds = L.latLngBounds(L.latLng(40, -40), L.latLng(65, 0))
const largeBounds = L.latLngBounds(L.latLng(40, -90), L.latLng(65, 10))

it('checks if can produce ij index for large bounds', () => {
  const res = 3
  // outer boundary
  const boundsNum = h3polyFromBounds(largeBounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = largeBounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  // find out if we can do local (i, j) cell addressing
  const canDoIJaddress = checkIfIJWorks(cells, centreIndex)

  expect(canDoIJaddress).toBeFalsy()
})

it('checks if can produce ij index for small bounds', () => {
  const res = 3
  // outer boundary
  const boundsNum = h3polyFromBounds(smallBounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = smallBounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  // find out if we can do local (i, j) cell addressing
  const canDoIJaddress = checkIfIJWorks(cells, centreIndex)
  expect(canDoIJaddress).toBeTruthy()
})

it('generates hex coords', () => {
  const res = 3
  const grid = createGridH3(smallBounds, res, data)
  expect(grid.length).toEqual(604)
  const first = grid[0]
  expect(first.index).toEqual('830652fffffffff')
  expect(first.labelStore.lat_lon).toEqual('64.9N 38.9W')
  expect(first.labelStore.xy).toEqual('S18')
  expect(first.labelStore.ctr).toEqual('1')
  expect(first.poly.length).toEqual(6)
})

it('generates hex coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, data)
  expect(grid.length).toEqual(1470)
  const first = grid[0]
  expect(first.index).toEqual('830f8efffffffff')
  expect(first.labelStore.lat_lon).toEqual('64.8N 87.8W')
  expect(first.poly.length).toEqual(6)
  expect(first.labelStore.ctr).toEqual('1')
  expect(first.labelStore.xy).toEqual('AB16')
})
