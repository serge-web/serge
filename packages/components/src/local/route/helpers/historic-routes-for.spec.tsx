/* global it expect */

import { watuWargame } from '@serge/mocks'
import { RouteStore, Route, ChannelTypes, ChannelMapping } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { historicRoutesFor } from './historic-routes-for'
import RouteData from '../types/route-data'
import { Phase } from '@serge/config'

const mapChannel = watuWargame.data.channels.channels.find((channel: ChannelTypes) => channel.name === 'mapping') as ChannelMapping
const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const redForce = forces[2]

const latVal = 50.24310600328171
const lngVal = -19.467288440193588

it('Provides valid history for single-point history with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = historicRoutesFor(route.currentLocation2, route.history)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
  } else {
    expect(false).toBeTruthy()
  }
})

it('Provides valid history for multi-point history with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, true, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = historicRoutesFor(route.currentLocation2, route.history)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
  } else {
    expect(false).toBeTruthy()
  }
})

it('Provides valid history for single-point history without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, false, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = historicRoutesFor(route.currentLocation2, route.history)
    expect(data.turnEnds.length).toEqual(2)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
  } else {
    expect(false).toBeTruthy()
  }
})

it('Provides valid history for multi-point history without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, false, platformTypes, false, false, undefined, undefined, mapChannel)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'red-AGI')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = historicRoutesFor(route.currentLocation2, route.history)
    expect(data.turnEnds.length).toEqual(2)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // try some state descriptions
    expect(data.turnEnds[0].status.speedKts).toEqual(undefined)
    expect(data.turnEnds[0].status.state).toEqual('Moored 1')
    expect(data.turnEnds[0].turn).toEqual(1)
    expect(data.turnEnds[1].status.state).toEqual('Scanning 1')
    expect(data.turnEnds[1].turn).toEqual(2)
    expect(data.turnEnds[1].status.speedKts).toBeUndefined()
  } else {
    expect(false).toBeTruthy()
  }
})
