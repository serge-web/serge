/* global it expect */

/* Import mock data */
import { watuWargame } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeClearFromStep from '../route-clear-from-step'
import { Phase } from '@serge/config'

import { ChannelMapping, RouteStore } from '@serge/custom-types'
import deepCopy from '../deep-copy'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const blueCo = forces[1].roles[0]
const showSteps = false

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, forces[1].uniqid, blueCo.roleId, false,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)

  const idOne = store.routes[0].uniqid

  // length of route at start
  expect(store.routes[0].planned.length).toEqual(2)

  // clear from step
  const store2: RouteStore = routeClearFromStep(store, idOne, 2)

  // is now set
  expect(store2.routes[0].planned.length).toEqual(1)
})
