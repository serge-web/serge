import data from '../data/atlantic-cells-short'
import L from 'leaflet'
import { checkIfIJWorks, createGridH3, CTR_LABELS, h3polyFromBounds, LAT_LON_LABELS, X_Y_LABELS } from './h3-helpers'
import { experimentalH3ToLocalIj, geoToH3, polyfill } from 'h3-js'

const smallBounds = L.latLngBounds(L.latLng(40, -10), L.latLng(50, 0))
const largeBounds = L.latLngBounds(L.latLng(40, -90), L.latLng(65, 10))

// it('checks if can produce ij index for large bounds', () => {
//   const res = 3
//   // outer boundary
//   const boundsNum = h3polyFromBounds(largeBounds)

//   // set of cells in this area
//   const cells = polyfill(boundsNum, res)

//   // sort out the centre index
//   const centreLoc = largeBounds.getCenter()
//   const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

//   // find out if we can do local (i, j) cell addressing
//   const canDoIJaddress = checkIfIJWorks(cells, centreIndex)

//   expect(canDoIJaddress).toBeFalsy()
// })

it('checks if can produce ij index for small bounds', () => {
  const res = 3
  // outer boundary
  const boundsNum = h3polyFromBounds(smallBounds)

  // set of cells in this area
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  const centreLoc = smallBounds.getCenter()
  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  let ctr = 0

  console.log(boundsNum, cells.length, centreIndex, centreLoc)

  const res2 = cells.some((cell: string) => {
    let label
    try {
      const coords = experimentalH3ToLocalIj(centreIndex, cell)
      label = coords
    } catch (err) {
      console.log('err', ++ctr)
      label = undefined
    }
    return !!label
  })

  console.log('#res', res2, ctr)

  // find out if we can do local (i, j) cell addressing
  const canDoIJaddress = checkIfIJWorks(cells, centreIndex)

  expect(canDoIJaddress).toBeTruthy()

  console.log(data, createGridH3, CTR_LABELS, LAT_LON_LABELS, X_Y_LABELS, largeBounds)
})

// it('generates hex coords', () => {
//   const res = 3
//   const grid = createGridH3(smallBounds, res, LAT_LON_LABELS, data)
//   expect(grid.length).toEqual(258)
//   const first = grid[0]
//   expect(first.index).toEqual('83352dfffffffff')
//   expect(first.name).toEqual('43.1N 19.1W')
//   expect(first.poly.length).toEqual(6)
// })

// it('generates hex coords for large area', () => {
//   const res = 3
//   const grid = createGridH3(largeBounds, res, LAT_LON_LABELS, data)
//   expect(grid.length).toEqual(1470)
//   const first = grid[0]
//   expect(first.name).toEqual('62.0N 40.9W')
//   expect(first.poly.length).toEqual(6)
// })

// it('generates xy coords for small area', () => {
//   const res = 3
//   const grid = createGridH3(smallBounds, res, X_Y_LABELS, data)
//   const first = grid[0]
//   expect(first.name).toEqual('?S04')
//   expect(first.poly.length).toEqual(6)
// })

// it('generates xy coords for large area', () => {
//   const res = 3
//   const grid = createGridH3(largeBounds, res, X_Y_LABELS, data)
//   const first = grid[238] // debugging showed that tthis index failed
//   expect(first.name).toEqual('n/a')
//   expect(first.poly.length).toEqual(6)
// })

// it('generates ctr coords for large area', () => {
//   const res = 3
//   const grid = createGridH3(largeBounds, res, CTR_LABELS, data)
//   const first = grid[238] // debugging showed that tthis index failed
//   expect(first.name).toEqual('239')
//   expect(first.poly.length).toEqual(6)
// })
