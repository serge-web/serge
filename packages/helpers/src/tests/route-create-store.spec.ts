/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'

import { RouteStore, RouteForce, Route } from '@serge/custom-types'

it('can create route plus control other', () => {
  // note: in our mock data, the Green force is the only
  // one that is controlled by another, and that's the umpire force
  const store: RouteStore = routeCreateStore(forces, 'umpire', false)
  expect(store.forces.length).toEqual(1)
  expect(store.forces[0].uniqid).toEqual('Green')
})

it('can create route without control other', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false)
  expect(store.forces.length).toEqual(1)
})

it('can create route as umpire', () => {
  const store: RouteStore = routeCreateStore(forces, 'umpire', true)
  expect(store.forces.length).toEqual(3)

  // check inside a force
  const force: RouteForce = store.forces[0]
  expect(force.uniqid).toEqual('Blue')
  expect(force.routes.length).toEqual(3)

  // check inside a route
  const route: Route = force.routes[0]
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

  const store: RouteStore = routeCreateStore(forces, 'umpire', true)
  expect(store.forces.length).toEqual(3)

  // check inside a route
  const route: any = store.forces[1].routes[0]
  expect(route.uniqid).toEqual('a0pra000100')
  expect(route.history.length).toEqual(2)
  expect(route.history[0].turn).toEqual(5)
  expect(route.history[0].coords).toBeDefined()
  if (route.history[0].coords) {
    expect(route.history[0].coords.length).toEqual(2)
  }
})
