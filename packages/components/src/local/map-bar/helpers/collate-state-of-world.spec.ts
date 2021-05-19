/* global it expect */
import collateStateOfWorld from './collate-state-of-world'

import forces from '@serge/mocks/forces.mock'
import platforms from '@serge/mocks/platform-types.mock'
import { routeCreateStore, deepCopy } from '@serge/helpers'
import { MessageStateOfWorld, RouteStore, StateOfWorld, Route } from '@serge/custom-types'
import { Phase } from '@serge/config'

it('world gets moved forward with existing history', () => {

  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if(redDhow) {
    expect(redDhow.name).toEqual('Dhow-A')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(3)
    expect(redDhow.history && redDhow.history.length).toEqual(3)
    expect(redDhow.position).toEqual('M04')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, undefined, false, false)
  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.forces.length).toEqual(3) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.position).toEqual('K05')
  expect(asset.plannedTurns && asset.plannedTurns.length).toEqual(2)
  expect(asset.history && asset.history.length).toEqual(4)
  expect(asset.newState).toEqual({ speedKts: 10, state: 'Transiting' })
})

it('world gets moved forward without existing history', () => {

  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if(redDhow) {
    expect(redDhow.name).toEqual('Dhow-A')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(3)
    expect(redDhow.history && redDhow.history.length).toEqual(3)
    expect(redDhow.position).toEqual('M04')

    // ok, mangle the history
    redDhow.history = []
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, undefined, false, false)
  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.forces.length).toEqual(3) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.position).toEqual('K05')
  expect(asset.plannedTurns && asset.plannedTurns.length).toEqual(2)
  expect(asset.history && asset.history.length).toEqual(1)
  expect(asset.newState).toEqual({ speedKts: 10, state: 'Transiting' })
})


it('world gets moved forward with destroyed asset', () => {

  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if(redDhow) {
    expect(redDhow.name).toEqual('Dhow-A')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(3)
    expect(redDhow.history && redDhow.history.length).toEqual(3)
    expect(redDhow.position).toEqual('M04')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, undefined, false, false)

  // mangle a route
  const dhowRoute = store.routes.find((route: Route) => route.name === 'Dhow-A')
  if(dhowRoute) {
    dhowRoute.asset.destroyed = true
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.forces.length).toEqual(3) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.position).toEqual('M04') // doesn't get moved forward
  expect(asset.plannedTurns).toBeUndefined()
  expect(asset.history && asset.history.length).toEqual(3)
  expect(asset.newState).toBeUndefined()
})
