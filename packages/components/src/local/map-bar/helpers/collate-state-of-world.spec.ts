/* global it expect */
import collateStateOfWorld from './collate-state-of-world'

import forces from '@serge/mocks/forces.mock'
import platforms from '@serge/mocks/platform-types.mock'
import { routeCreateStore } from '@serge/helpers'
import { MessageStateOfWorld, RouteStore, StateOfWorld } from '@serge/custom-types'

it('contains relevant population results', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', platforms, undefined, false, false)
  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.forces.length).toEqual(3) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.plannedTurns && asset.plannedTurns.length).toEqual(3)
  expect(asset.history && asset.history.length).toEqual(3)
  expect(asset.newState).toEqual({ speedKts: 10, state: 'Transiting' })
})
