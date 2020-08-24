/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeDeclutter from '../route-declutter'

import { RouteStore } from '@serge/custom-types'

it('clear route from selected step', () => {

  const store: RouteStore = routeCreateStore(forces, 'Blue', false, platformTypes, undefined)

  // force some platforms into the cell already occupied
  // but the platform in route 2
  var ctr
  for(ctr = 3; ctr < 6; ctr++) {
    store.routes[ctr].currentLocation = store.routes[1].currentLocation
    store.routes[ctr].currentPosition = store.routes[1].currentPosition
  }

  // force one asset into the location of another
  const pos1 = store.routes[1].currentLocation
  const pos2 = store.routes[2].currentLocation
  const pos3 = store.routes[3].currentLocation
  const pos4 = store.routes[4].currentLocation
  const pos5 = store.routes[5].currentLocation

  const cleaned = routeDeclutter(store, 0.5)

  expect(cleaned.routes[1].currentLocation).toEqual(pos1)
  // pos2 is the MPA. Nothing else is in it's cell, so 
  // it should not get decluttered
  expect(cleaned.routes[2].currentLocation).toEqual(pos2)
  expect(cleaned.routes[3].currentLocation).not.toEqual(pos3)
  expect(cleaned.routes[4].currentLocation).not.toEqual(pos4)
  expect(cleaned.routes[5].currentLocation).not.toEqual(pos5)
})
