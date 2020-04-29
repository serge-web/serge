/* global it expect */

import toScreen from './to-screen'
import toWorld from './to-world'
import L from 'leaflet'

it('world/screen conversions match up', () => {

  const origin = L.latLng(10, 10)
  const tileSize = 5
  const worldOne = L.latLng(12, 44)
  const scrPos = toScreen(worldOne, origin, tileSize)
  const worldPos = toWorld(scrPos, origin, tileSize)
  expect(worldOne).toEqual(worldPos)
  const scrTwo = toScreen(worldPos, origin, tileSize)
  expect(scrPos).toEqual(scrTwo)

})
