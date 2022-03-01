/* global it expect */
import collateStateOfWorld, { updatePerceptions } from './collate-state-of-world'

import forces from '@serge/mocks/forces.mock'
import platforms from '@serge/mocks/platform-types.mock'
import { routeCreateStore, deepCopy } from '@serge/helpers'
import { MessageStateOfWorld, RouteStore, StateOfWorld, Route } from '@serge/custom-types'
import { Phase } from '@serge/config'

it('correctly updates perceptions for new forces', () => {
  const res = updatePerceptions(['Red', 'Green'], [{ by: 'Blue' }])
  expect(res.length).toEqual(2)
})

it('correctly updates perceptions for dropped forces', () => {
  const res = updatePerceptions(['Green'], [{ by: 'Red' }, { by: 'Green', type: 'Big duck' }])
  expect(res.length).toEqual(1)
  expect(res[0].type).toEqual('Big duck')
})

it('robustly handles zero existing', () => {
  const res = updatePerceptions(['Green'], [])
  expect(res.length).toEqual(1)
  expect(res[0].type).toEqual(undefined)
})

it('correctly handles zero new', () => {
  const res = updatePerceptions([], [{ by: 'Red' }, { by: 'Green', type: 'Big duck' }])
  expect(res.length).toEqual(0)
})

it('world gets moved forward with existing history', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    expect(redDhow.name).toEqual('Dhow-A')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(3)
    expect(redDhow.history && redDhow.history.length).toEqual(3)
    expect(redDhow.position).toEqual('M04')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, false, false)
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
  if (redDhow) {
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

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, false, false)
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
  if (redDhow) {
    expect(redDhow.name).toEqual('Dhow-A')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(3)
    expect(redDhow.history && redDhow.history.length).toEqual(3)
    expect(redDhow.position).toEqual('M04')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, false, false)

  // mangle a route
  const dhowRoute = store.routes.find((route: Route) => route.name === 'Dhow-A')
  if (dhowRoute) {
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

it('world gets moved forward with modified vis & condition', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    expect(redDhow.name).toEqual('Dhow-A')
    expect(redDhow.perceptions.length).toEqual(1)
    expect(redDhow.perceptions[0].by).toEqual('Blue')
    expect(redDhow.condition).toEqual('Full capability')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, false, false)

  // modify route for dhow-a
  const dhowRoute = store.routes.find((route: Route) => route.name === 'Dhow-A')
  if (dhowRoute) {
    dhowRoute.visibleTo = ['Green']
    dhowRoute.condition = 'Knackered beyond repair'
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3)
  const stateOfWorld: StateOfWorld = message.state
  const force = stateOfWorld.forces[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.perceptions.length).toEqual(1)
  expect(asset.perceptions[0].by).toEqual('Green')
  expect(asset.condition).toEqual('Knackered beyond repair')
})
it('world gets moved forward with empty condition', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    redDhow.condition = 'Limping along'
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'Red', platforms, false, false)

  // modify route for dhow-a
  const dhowRoute = store.routes.find((route: Route) => route.name === 'Dhow-A')
  if (dhowRoute) {
    dhowRoute.visibleTo = ['Green']
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3)
  const stateOfWorld: StateOfWorld = message.state
  const force = stateOfWorld.forces[1]
  expect(force.name).toEqual('Red')
  const asset = force.assets[0]
  expect(asset.name).toEqual('Dhow-A')
  expect(asset.condition).toEqual('Limping along')
})
