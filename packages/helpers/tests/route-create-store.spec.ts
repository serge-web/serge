/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import { forcesControlledBy } from '../route-create-store'

import { RouteStore, Route } from '@serge/custom-types'

it('determines correct controlled routes', () => {
  expect(forcesControlledBy(forces, 'Blue')).toEqual([])
  expect(forcesControlledBy(forces, 'umpire')).toEqual(['Green'])
})

it('can create route as umpire in adjudication mode', () => {
  const store: RouteStore = routeCreateStore(forces, 'umpire', true, platformTypes)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route = store.routes[1]
  expect(route.uniqid).toEqual('a0pra00001')
  expect(route.history.length).toEqual(1)
  expect(route.planned.length).toEqual(1)
  expect(route.original.length).toEqual(1)
})

it('can create route for un-recognised type', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', true, platformTypes)

  expect(store.routes.length).toEqual(11)

  // check inside a route
  const route: Route = store.routes[4]
  expect(route.uniqid).toEqual('a0pra000100')
  expect(route.color).toEqual('#999')
})

it('can create route as umpire in planning mode', () => {
  const store: RouteStore = routeCreateStore(forces, 'umpire', false, platformTypes)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route = store.routes[1]
  expect(route.uniqid).toEqual('a0pra00001')
  expect(route.history.length).toEqual(1)
  expect(route.planned.length).toEqual(2)
  expect(route.original.length).toEqual(2)
})

it('support new way of storing past steps', () => {
  const redForce: any = forces[2]
  const asset: any = redForce.assets[0]
  // switch history for one using new structure (that includes all steps)
  asset.history = [
    {
      route: [
        'N16',
        'M16'
      ],
      status: {
        speedKts: 20,
        state: 'Transiting'
      },
      turn: 5
    },
    {
      route: [
        'M16',
        'L16'
      ],
      status: {
        speedKts: 10,
        state: 'Transiting'
      },
      turn: 6
    }
  ]

  const store: RouteStore = routeCreateStore(forces, 'umpire', false, platformTypes)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: any = store.routes[4]
  expect(route.uniqid).toEqual('a0pra000100')
  expect(route.history.length).toEqual(2)
  expect(route.history[0].turn).toEqual(5)
  expect(route.history[0].coords).toBeDefined()
  if (route.history[0].coords) {
    expect(route.history[0].coords.length).toEqual(2)
  }
})
