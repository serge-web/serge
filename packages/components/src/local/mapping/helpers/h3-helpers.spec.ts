import data from '../data/atlantic-cells-short'
import L from 'leaflet'
import { checkIfIJWorks, createGridH3, h3polyFromBounds } from './h3-helpers'
import { geoToH3, polyfill } from 'h3-js'
import { CellLabelStyle } from '@serge/config'

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
  const grid = createGridH3(smallBounds, res, CellLabelStyle.LAT_LON_LABELS, data)
  expect(grid.length).toEqual(604)
  const first = grid[0]
  expect(first.index).toEqual('8319b4fffffffff')
  expect(first.name).toEqual('60.9N 24.3W')
  expect(first.poly.length).toEqual(6)
})

it('generates hex coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, CellLabelStyle.LAT_LON_LABELS, data)
  expect(grid.length).toEqual(1470)
  const first = grid[0]
  expect(first.name).toEqual('62.0N 40.9W')
  expect(first.poly.length).toEqual(6)
})

it('generates xy coords for small area', () => {
  const res = 3
  const grid = createGridH3(smallBounds, res, CellLabelStyle.X_Y_LABELS, data)
  const first = grid[0]
  expect(first.name).toEqual('L10')
  expect(first.poly.length).toEqual(6)
})

it('generates xy coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, CellLabelStyle.X_Y_LABELS, data)
  const first = grid[238] // debugging showed that tthis index failed
  // since we're doing large area, it swaps XY for LAT_LON
  expect(first.name).toEqual('41.8N 2.0E')
  expect(first.poly.length).toEqual(6)
})

it('generates ctr coords for large area', () => {
  const res = 3
  const grid = createGridH3(largeBounds, res, CellLabelStyle.CTR_LABELS, data)
  const first = grid[238] // debugging showed that tthis index failed
  expect(first.name).toEqual('239')
  expect(first.poly.length).toEqual(6)
})
