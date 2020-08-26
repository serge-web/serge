/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore , Route} from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { routesFor } from '../helpers/routes-for'
import RouteData from '../types/route-data'

it('Provides valid history for single-point history with filter', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platformTypes, undefined, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  if(route) {
    console.log(route.currentLocation, route.history[0].locations)
    const data: RouteData = routesFor('Dhow-B', route.currentLocation, route.history, true)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  } else {
    fail('failed to find track')
  }
})

it('Provides valid history for multi-point history with filter', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platformTypes, undefined, true, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  if(route) {
    console.log(route.currentLocation, route.history[0].locations)
    const data: RouteData = routesFor('Dhow-A', route.currentLocation, route.history, true)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  } else {
    fail('failed to find track')
  }
})

it('Provides valid history for single-point history without filter', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platformTypes, undefined, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  if(route) {
    console.log(route.currentLocation, route.history[0].locations)
    const data: RouteData = routesFor('Dhow-B', route.currentLocation, route.history, true)
    expect(data.turnEnds.length).toEqual(1)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)
  } else {
    fail('failed to find track')
  }
})

it('Provides valid history for multi-point history without filter', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platformTypes, undefined, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-A')
  if(route) {
    console.log(route.currentLocation, route.history[0].locations)
    const data: RouteData = routesFor('Dhow-A', route.currentLocation, route.history, true)
    expect(data.turnEnds.length).toEqual(3)
    expect(data.turnEnds[0].current.pos.lat).toEqual(12.2)
    expect(data.turnEnds[0].current.pos.lng).toEqual(23.4)

    expect(data.steps.length).toEqual(3)

  } else {
    fail('failed to find track')
  }
})
