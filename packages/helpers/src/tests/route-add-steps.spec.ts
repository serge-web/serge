/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeAddSteps from '../route-add-steps'
import { Phase } from '@serge/config'

import { RouteStore, RouteTurn } from '@serge/custom-types'

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Blue', 'role-id', platformTypes, false, false)

  const idOne = 'a0pra00003'

  // length of route at start
  expect(store.routes[3].planned.length).toEqual(3)
  expect(store.routes[3].plannedTurnsCount).toEqual(3)

  const step: RouteTurn = {
    turn: 12,
    route: ['A01', 'A02', 'A03', 'A04'],
    status: { state: 'BBQ Alongside' }
  }

  // clear from step
  const store2: RouteStore = routeAddSteps(store, idOne, [step])

  // is now set
  expect(store2.routes[3].planned.length).toEqual(4)
  expect(store2.routes[3].plannedTurnsCount).toEqual(4)
})
