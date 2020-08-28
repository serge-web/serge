/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { historicRoutesFor } from './historic-routes-for'
import RouteData from '../types/route-data'

it('Provides valid history for single-point history with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = historicRoutesFor(route.currentLocation, route.history)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  }
})

it('Provides valid history for multi-point history with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = historicRoutesFor(route.currentLocation, route.history)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  }
})

it('Provides valid history for single-point history without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = historicRoutesFor(route.currentLocation, route.history)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  }
})

it('Provides valid history for multi-point history without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = historicRoutesFor(route.currentLocation, route.history)
    expect(data.turnEnds.length).toEqual(3)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  }
})
