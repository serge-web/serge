/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeClearFromStep from '../route-clear-from-step'

import { RouteStore } from '@serge/custom-types'

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false, ['Green'])

  const idOne = 'a0pra000202'

  // length of route at start
  expect(store.forces[1].routes[2].planned.length).toEqual(9)

  // clear from step
  const store2: RouteStore = routeClearFromStep(store, idOne, 6)

  // is now set
  expect(store2.forces[1].routes[2].planned.length).toEqual(3)
})
