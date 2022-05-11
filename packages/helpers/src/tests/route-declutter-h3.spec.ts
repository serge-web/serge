/* global it expect */

/* Import mock data */
import { watuWargame } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeDeclutter from '../route-declutter'

import { RouteStore } from '@serge/custom-types'
import { Phase } from '@serge/config'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const markers = watuWargame.data.annotations ? watuWargame.data.annotations.annotations : []

const blueId = forces[1].uniqid

it('declutter routes', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueId, platformTypes, false, false)

  expect(store.routes.length).toEqual(5)
  expect(markers.length).toEqual(2)

  // force some platforms into the cell already occupied
  // but the platform in route 2
  for (let ctr = 3; ctr < 5; ctr++) {
    store.routes[ctr].currentLocation = store.routes[1].currentLocation
    store.routes[ctr].currentPosition = store.routes[1].currentPosition
  }

  // force one asset into the location of another
  const pos1 = store.routes[1].currentLocation
  const pos2 = store.routes[2].currentLocation
  const pos3 = store.routes[3].currentLocation
  const pos4 = store.routes[4].currentLocation

  const cleaned = routeDeclutter(store, 0.5)

  // pos2 is the MPA. Nothing else is in it's cell, so
  // it should not get decluttered
  expect(cleaned.routes[2].currentLocation).toEqual(pos2)
  expect(cleaned.routes[1].currentLocation).not.toEqual(pos1)
  expect(cleaned.routes[3].currentLocation).not.toEqual(pos3)
  expect(cleaned.routes[4].currentLocation).not.toEqual(pos4)
})
