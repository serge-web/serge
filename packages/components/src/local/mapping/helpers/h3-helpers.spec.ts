import { experimentalH3ToLocalIj, geoToH3, H3Index, h3ToGeo, h3ToGeoBoundary, polyfill } from 'h3-js'
import L from 'leaflet'

import {h3polyFromBounds} from './h3-helpers'

const atlanticBounds = L.latLngBounds(L.latLng(80, -60), L.latLng(400, 0))

it('construct hex grid', () => {
  const boundsNum = h3polyFromBounds(atlanticBounds)
  const res = 3
  const hexes2 = polyfill(boundsNum, res)
  expect(hexes2.length).toEqual(54)
})

type H3pos = number[]

interface SergeHex3 {
  centreLatLng: H3pos
  name: string // human-readable index
  index: H3Index // h3 index
  styles: number // logical or of style numbers
  fillColor?: string
  x: number
  y: number
  poly: H3pos[]
}

type SergeGrid3 = SergeHex3[]

const createGrid = (bounds: L.LatLngBounds, res: number): SergeGrid3 => {
  const boundsNum = h3polyFromBounds(bounds)
  const cells = polyfill(boundsNum, res)

  // sort out the centre index
  //  const centreLoc = bounds.getCenter()
  //  const centreIndex = geoToH3(centreLoc.lat, centreLoc.lng, res)

  const grid = cells.map((cell:H3Index): SergeHex3 => {
    const centre = h3ToGeo(cell)
    const coords = [2,3] // experimentalH3ToLocalIj(cell, centreIndex)
    const edge = h3ToGeoBoundary(cell)
    return {
      centreLatLng: centre,
      name: cell,
      index: cell,
      styles: 0,
      x: coords[0],
      y: coords[1],
      poly: edge
    }
  })
  return grid
}

it('generates hex coords', () => {
  const res = 3
  const grid = createGrid(atlanticBounds, res)
  expect(grid.length).toEqual(54)
  const first = grid[0]
  expect(first.index).toEqual('830792fffffffff')
})
