/* global it expect */

import { watuWargame } from '@serge/mocks'
import { RouteStore, Route, ChannelTypes, ChannelMapping } from 'src/custom-types'
import { routeCreateStore } from 'src/Helpers'
import { plannedRoutesFor } from './planned-routes-for'
import RouteData from '../types/route-data'
import { Phase } from 'src/config'

const latVal = 50.24619194950372
const lngVal = -19.48007194027348

const mapChannel = watuWargame.data.channels.channels.find((channel: ChannelTypes) => channel.name === 'mapping') as ChannelMapping
const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const redForce = forces[2]

it('Provides valid planned for multi-point planned with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, true, undefined, undefined, mapChannel)
  expect(store).toBeTruthy()
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.name === 'AGI')
  expect(route && route.currentLocation2).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.plannedTrimmed)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(2)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for multi-point including static steps planned without filter', () => {
  const store: RouteStore = routeCreateStore('red-AGI', Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.selected
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(2)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(2)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for multi-point planned without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(2)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // try some state descriptions
    expect(data.turnEnds[0].status.speedKts).toEqual(12)
    expect(data.turnEnds[0].status.state).toEqual('Transiting a')
    expect(data.turnEnds[0].turn).toEqual(3)
    expect(data.turnEnds[1].status.state).toEqual('Moored')
    expect(data.turnEnds[1].turn).toEqual(4)
    expect(data.turnEnds[1].status.speedKts).toBeUndefined()
    // and the polyline
    expect(data.polyline.length).toEqual(2)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for single-point planned with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, true, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.plannedTrimmed)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(2)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for single-point planned without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(2)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(2)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})
