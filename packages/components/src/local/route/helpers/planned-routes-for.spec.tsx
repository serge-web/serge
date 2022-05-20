/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { plannedRoutesFor } from './planned-routes-for'
import RouteData from '../types/route-data'
import { Phase } from '@serge/config'

const latVal = 79.24239850975904
const lngVal = 38.02340700796988

it('Provides valid planned for multi-point planned with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, true)
  expect(store).toBeTruthy()
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  expect(route && route.currentLocation2).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.plannedTrimmed)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(3)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for multi-point including static steps planned without filter', () => {
  const store: RouteStore = routeCreateStore('a0pra000100', Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.selected
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(3)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(4)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for multi-point planned without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(5)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // try some state descriptions
    expect(data.turnEnds[0].status.speedKts).toEqual(10)
    expect(data.turnEnds[0].status.state).toEqual('Transiting')
    expect(data.turnEnds[0].turn).toEqual(3)
    expect(data.turnEnds[1].status.state).toEqual('Fishing')
    expect(data.turnEnds[1].turn).toEqual(4)
    expect(data.turnEnds[1].status.speedKts).toBeUndefined()
    expect(data.turnEnds[2].status.state).toEqual('Fishing')
    expect(data.turnEnds[2].turn).toEqual(5)
    expect(data.turnEnds[2].status.speedKts).toBeUndefined()
    expect(data.turnEnds[3].status.state).toEqual('Transiting')
    expect(data.turnEnds[3].status.speedKts).toEqual(20)
    expect(data.turnEnds[3].turn).toEqual(6)
    expect(data.turnEnds[4].status.state).toEqual('Transiting')
    expect(data.turnEnds[4].status.speedKts).toEqual(30)
    expect(data.turnEnds[4].turn).toEqual(7)
    // and the polyline
    expect(data.polyline.length).toEqual(4)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})

it('Provides valid planned for single-point planned with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
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
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(5)
    expect(data.turnEnds[0].current.pos.lat).toEqual(latVal)
    expect(data.turnEnds[0].current.pos.lng).toEqual(lngVal)
    // and the polyline
    expect(data.polyline.length).toEqual(4)
  } else {
    expect(false).toBeTruthy() // should have route
  }
})
