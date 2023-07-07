/* global it expect */
import collateStateOfWorld, { updatePerceptions } from './collate-state-of-world'

import { watuWargame } from '@serge/mocks'
import { routeCreateStore, deepCopy } from '@serge/helpers'
import { MessageStateOfWorld, RouteStore, StateOfWorld, Route, ForceData, Asset, MapAnnotations, ChannelMapping } from 'src/custom-types'
import { Phase } from '@serge/config'

const markers: MapAnnotations = watuWargame.data.annotations ? watuWargame.data.annotations.annotations : []

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const showSteps = false
const redForce = forces[2]

it('dependencies present', () => {
  expect(redForce).toBeTruthy()
})

it('correctly updates perceptions for new forces', () => {
  const res = updatePerceptions(['Red', 'Green'], [{ by: 'Blue' }])
  expect(res.length).toEqual(2)
})

it('correctly updates perceptions for dropped forces', () => {
  const res = updatePerceptions(['Green'], [{ by: 'Red' }, { by: 'Green', typeId: 'Big duck' }])
  expect(res.length).toEqual(1)
  expect(res[0].typeId).toEqual('Big duck')
})

it('robustly handles zero existing', () => {
  const res = updatePerceptions(['Green'], [])
  expect(res.length).toEqual(1)
  expect(res[0].typeId).toEqual(undefined)
})

it('correctly handles zero new', () => {
  const res = updatePerceptions([], [{ by: 'Red' }, { by: 'Green', typeId: 'Big duck' }])
  expect(res.length).toEqual(0)
})

it('world gets moved forward with existing history', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce: ForceData = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    expect(redDhow.name).toEqual('AGI')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(2)
    expect(redDhow.history && redDhow.history.length).toEqual(2)
    expect(redDhow.position).toEqual('8918a84db3bffff')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, true,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3, markers)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.mapAnnotations).toBeTruthy()
  expect(stateOfWorld.mapAnnotations.length).toEqual(3)
  expect(stateOfWorld.forces.length).toEqual(2) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.uniqid).toEqual(redForce.uniqid)
  const asset = force.assets[0]
  expect(asset.name).toEqual('AGI')
  expect(asset.position).toEqual('8918a84db47ffff')
  expect(asset.plannedTurns && asset.plannedTurns.length).toEqual(1)
  expect(asset.history && asset.history.length).toEqual(3)
  expect(asset.newState).toEqual({ speedKts: 12, state: 'Transiting a' })
})

it('world gets moved forward without existing history', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce: ForceData = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    expect(redDhow.name).toEqual('AGI')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(2)
    expect(redDhow.history && redDhow.history.length).toEqual(2)
    expect(redDhow.position).toEqual('8918a84db3bffff')

    // ok, mangle the history
    redDhow.history = []
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, redForce.uniqid, redForce.roles[0].roleId, true,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)
  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3, markers)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.forces.length).toEqual(2) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.uniqid).toEqual(redForce.uniqid)
  const asset = force.assets[0]
  expect(asset.name).toEqual('AGI')
  expect(asset.position).toEqual('8918a84db47ffff')
  expect(asset.plannedTurns && asset.plannedTurns.length).toEqual(1)
  expect(asset.history && asset.history.length).toEqual(1)
  expect(asset.newState).toEqual({ speedKts: 12, state: 'Transiting a' })
})

it('world gets moved forward with destroyed asset', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce: ForceData = forcesCopy[2]
  const redDhow: Asset | undefined = redForce.assets && redForce.assets[0]
  if (redDhow) {
    expect(redDhow.name).toEqual('AGI')
    expect(redDhow.plannedTurns && redDhow.plannedTurns.length).toEqual(2)
    expect(redDhow.history && redDhow.history.length).toEqual(2)
    expect(redDhow.position).toEqual('8918a84db3bffff')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)

  // mangle a route
  const dhowRoute = store.routes.find((route: Route) => route.name === 'AGI')
  if (dhowRoute) {
    dhowRoute.asset.destroyed = true
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3, markers)
  const stateOfWorld: StateOfWorld = message.state
  expect(stateOfWorld).toBeDefined()
  expect(stateOfWorld.turn).toEqual(4)
  expect(stateOfWorld.forces.length).toEqual(2) // one per force
  const force = stateOfWorld.forces[1]
  expect(force.uniqid).toEqual(redForce.uniqid)
  const asset = force.assets[0]
  expect(asset.name).toEqual('AGI')
  expect(asset.position).toEqual('8918a84db3bffff') // doesn't get moved forward
  expect(asset.plannedTurns).toBeUndefined()
  expect(asset.history && asset.history.length).toEqual(2)
  expect(asset.newState).toBeUndefined()
})

it('world gets moved forward with modified vis & condition', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    expect(redDhow.name).toEqual('AGI')
    expect(redDhow.perceptions.length).toEqual(2)
    expect(redDhow.perceptions[0].by).toEqual('Blue-1')
    expect(redDhow.condition).toEqual('Working')
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)

  // modify route for AGI
  const dhowRoute = store.routes.find((route: Route) => route.name === 'AGI')
  if (dhowRoute) {
    dhowRoute.visibleTo = ['Green']
    dhowRoute.condition = 'Knackered beyond repair'
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3, markers)
  const stateOfWorld: StateOfWorld = message.state
  const force = stateOfWorld.forces[1]
  expect(force.uniqid).toEqual(redForce.uniqid)
  const asset = force.assets[0]
  expect(asset.name).toEqual('AGI')
  expect(asset.perceptions.length).toEqual(1)
  expect(asset.perceptions[0].by).toEqual('Green')
  expect(asset.condition).toEqual('Knackered beyond repair')
})
it('world gets moved forward with empty condition', () => {
  const forcesCopy = deepCopy(forces)

  // check the data going in matches what we expect
  const redForce: ForceData = forcesCopy[2]
  const redDhow = redForce.assets && redForce.assets[0]
  if (redDhow) {
    redDhow.condition = 'Limping along'
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)

  // modify route for AGI
  const dhowRoute = store.routes.find((route: Route) => route.name === 'AGI')
  if (dhowRoute) {
    dhowRoute.visibleTo = ['Green']
  } else {
    console.warn('failed to find red dhow')
    expect(false).toBeTruthy()
  }

  const message: MessageStateOfWorld = collateStateOfWorld(store.routes, 3, markers)
  const stateOfWorld: StateOfWorld = message.state
  const force = stateOfWorld.forces[1]
  expect(force.uniqid).toEqual(redForce.uniqid)
  const asset = force.assets[0]
  expect(asset.uniqid).toEqual(redDhow && redDhow.uniqid)
  expect(asset.condition).toEqual('Working')
})
