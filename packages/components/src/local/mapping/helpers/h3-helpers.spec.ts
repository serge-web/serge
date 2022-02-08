import { polyfill } from 'h3-js'
import L from 'leaflet'

import {h3polyFromBounds} from './h3-helpers'

const atlanticBounds = L.latLngBounds(L.latLng(80, -60), L.latLng(400, 0))

it('construct hex grid', () => {
  const boundsNum = h3polyFromBounds(atlanticBounds)
  const res = 3
  const hexes2 = polyfill(boundsNum, res)
  expect(hexes2.length).toEqual(54)
})
