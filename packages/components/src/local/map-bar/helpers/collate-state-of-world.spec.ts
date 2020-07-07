/* global it expect */
import collateStateOfWorld from './collate-state-of-world'

import forces from '@serge/mocks/forces.mock'
import platforms from '@serge/mocks/platform-types.mock'
import { routeCreateStore } from '@serge/helpers'
import { RouteStore } from '@serge/custom-types'

it('contains relevant population results', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platforms)
  const stateOfWorld = collateStateOfWorld(store.routes, 3)
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.detail.length).toEqual(3) // one per force
  const force = stateOfWorld.detail[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.plannedTurns.length).toEqual(3)
  expect(asset.history.length).toEqual(1)
  expect(asset.newState).toEqual({ speedKts: 10, state: 'Transiting' })
})
