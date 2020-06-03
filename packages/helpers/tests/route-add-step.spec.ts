/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeAddStep from '../route-add-step'

import { RouteStore, RouteStep } from '@serge/custom-types'

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false)

  const idOne = 'a0pra00003'

  // length of route at start
  expect(store.routes[2].planned.length).toEqual(3)

  const step: RouteStep = {
    turn: 12,
    coords: ['A01', 'A02', 'A03', 'A04'],
    status: { state: 'BBQ Alongside' }
  }

  // clear from step
  const store2: RouteStore = routeAddStep(store, idOne, step)

  // is now set
  expect(store2.routes[2].planned.length).toEqual(4)
})
