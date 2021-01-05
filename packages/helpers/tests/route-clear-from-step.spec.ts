/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeClearFromStep from '../route-clear-from-step'

import { RouteStore } from '@serge/custom-types'

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Blue', platformTypes, undefined, false, false)

  const idOne = 'a0pra00003'

  // length of route at start
  expect(store.routes[3].planned.length).toEqual(3)

  // clear from step
  const store2: RouteStore = routeClearFromStep(store, idOne, 5)

  // is now set
  expect(store2.routes[3].planned.length).toEqual(1)
})
