/* global it expect */

/* Import mock data */
import { watuWargame } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeAddSteps from '../route-add-steps'
import { Phase } from '@serge/config'

import { ChannelMapping, RouteStore, RouteTurn } from '@serge/custom-types'
import deepCopy from '../deep-copy'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const blueCo = forces[1].roles[0]
const showSteps = false

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, forces[1].uniqid, blueCo.roleId, false, platformTypes, showSteps, showSteps, undefined, undefined, mappingChan)

  const idOne = store.routes[0].uniqid

  // length of route at start
  expect(store.routes[0].planned.length).toEqual(2)
  expect(store.routes[0].plannedTurnsCount).toEqual(2)

  const step: RouteTurn = {
    turn: 12,
    route: ['A01', 'A02', 'A03', 'A04'],
    status: { state: 'BBQ Alongside' }
  }

  // add new steps
  const store2: RouteStore = routeAddSteps(store, idOne, [step, step])

  // is now set
  expect(store2.routes[0].planned.length).toEqual(4)
  expect(store2.routes[0].plannedTurnsCount).toEqual(4)
})
