/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { historicRoutesFor } from './historic-routes-for'
import RouteData from '../types/route-data'
import { Phase } from '@serge/config'

const latVal = 79.24239850975904
const lngVal = 38.02340700796988

it('Provides valid history for single-point history with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
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
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
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
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
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

it('Provides valid history for multi-point history without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = historicRoutesFor(route.currentLocation2, route.history)

    expect(data.turnEnds.length).toEqual(3)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // try some state descriptions
    expect(data.turnEnds[0].status.speedKts).toEqual(10)
    expect(data.turnEnds[0].status.state).toEqual('Transiting')
    expect(data.turnEnds[0].turn).toEqual(1)
    expect(data.turnEnds[1].status.state).toEqual('Moored')
    expect(data.turnEnds[1].turn).toEqual(2)
    expect(data.turnEnds[1].status.speedKts).toBeUndefined()
    expect(data.turnEnds[2].status.state).toEqual('Transiting')
    expect(data.turnEnds[2].status.speedKts).toEqual(20)
    expect(data.turnEnds[2].turn).toEqual(3)
  } else {
    expect(false).toBeTruthy()
  }
})
