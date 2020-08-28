/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { plannedRoutesFor } from './planned-routes-for'
import RouteData from '../types/route-data'

it('Provides valid planned for multi-point planned with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, true, true)
  expect(store).toBeTruthy()
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = plannedRoutesFor(route.currentLocation, route.planned)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
    // and the polyline
    expect(data.polyline.length).toEqual(3)
  }
})

it('Provides valid planned for multi-point planned without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = plannedRoutesFor(route.currentLocation, route.planned)
    expect(data.turnEnds.length).toEqual(3)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
    // and the polyline
    expect(data.polyline.length).toEqual(5)
  }
})

it('Provides valid planned for single-point planned with filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, true, true)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = plannedRoutesFor(route.currentLocation, route.planned)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
    // and the polyline
    expect(data.polyline.length).toEqual(2)
  }
})

it('Provides valid planned for single-point planned without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', false, platformTypes, undefined, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route) {
    const data: RouteData = plannedRoutesFor(route.currentLocation, route.planned)
    expect(data.turnEnds.length).toEqual(3)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
    // and the polyline
    expect(data.polyline.length).toEqual(4)
  }
})
