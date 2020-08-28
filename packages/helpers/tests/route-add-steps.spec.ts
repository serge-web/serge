/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeAddSteps from '../route-add-steps'

import { RouteStore, RouteStep } from '@serge/custom-types'

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Blue', false, platformTypes, undefined, false, false)

  const idOne = 'a0pra00003'

  // length of route at start
  expect(store.routes[3].planned.length).toEqual(3)

  const step: RouteStep = {
    turn: 12,
    coords: ['A01', 'A02', 'A03', 'A04'],
    status: { state: 'BBQ Alongside' }
  }

  // clear from step
  const store2: RouteStore = routeAddSteps(store, idOne, [step])

  // is now set
  expect(store2.routes[3].planned.length).toEqual(4)
})
