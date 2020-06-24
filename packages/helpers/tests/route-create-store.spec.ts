/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import { forcesControlledBy } from '../route-create-store'

import { RouteStore , Route, RouteChild } from '@serge/custom-types'
import { UMPIRE_FORCE } from '@serge/config'

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

it('route displays all hosted & comprising assets for white force', () => {
  const store: RouteStore = routeCreateStore(forces, UMPIRE_FORCE, false, platformTypes)
  expect(store.routes.length).toEqual(13)

  // get the host platform
  const frigate: Route = store.routes[1]
  expect(frigate.uniqid).toEqual('a0pra00001')

  // find hosted platforms
  const hosting: Array<RouteChild> = frigate.hosting
  expect(hosting.length).toEqual(2)
  // we can predict ids
  expect(hosting[0].uniqid).toEqual('a0pra11002')
  expect(hosting[1].uniqid).toEqual('a0pra18702')

  // since this is white force, we see real names
  expect(hosting[0].name).toEqual('Merlin')
  expect(hosting[1].name).toEqual('Dart 42')
  

  // find comprising platforms
  const taskGroup = store.routes[0]
  const comprising: Array<RouteChild> = taskGroup.comprising
  expect(comprising.length).toEqual(2)
  // we can predict ids
  expect(comprising[0].uniqid).toEqual('a0prbr6441')
  expect(comprising[1].uniqid).toEqual('a0traa6790')

  // since this is white force, we see real names
  expect(comprising[0].name).toEqual('Frigate A')
  expect(comprising[1].name).toEqual('MCM Delta')
})

it('route displays all hosted & comprising assets for blue force', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false, platformTypes)
  expect(store.routes.length).toEqual(11)

  // get the host platform
  const frigate = store.routes[1]
  expect(frigate.uniqid).toEqual('a0pra00001')

  // find hosted platforms
  const hosting: Array<RouteChild> = frigate.hosting
  expect(hosting.length).toEqual(2)
  // we can predict ids
  expect(hosting[0].uniqid).toEqual('a0pra11002')
  expect(hosting[1].uniqid).toEqual('a0pra18702')

  // since this is blue force, we see real names
  expect(hosting[0].name).toEqual('Merlin')
  expect(hosting[1].name).toEqual('Dart 42')
  

  // find comprising platforms
  const taskGroup = store.routes[0]
  const comprising: Array<RouteChild> = taskGroup.comprising
  expect(comprising.length).toEqual(2)
  // we can predict ids
  expect(comprising[0].uniqid).toEqual('a0prbr6441')
  expect(comprising[1].uniqid).toEqual('a0traa6790')

  // since this is blue force, we see real names
  expect(comprising[0].name).toEqual('Frigate A')
  expect(comprising[1].name).toEqual('MCM Delta')

  // check we can see the frigate is hosting something
  expect(comprising[0].asset.hosting.length).toEqual(1)
  expect(comprising[0].asset.hosting[0].name).toEqual('Dart 45')
})

it('route displays perceived hosted assets in tree for red force', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platformTypes)
  expect(store.routes.length).toEqual(9)

  // try the host platform in the task group
  const frigate = store.routes[0]
  expect(frigate.uniqid).toEqual('a0prbr6441')
  expect(frigate.name).toEqual('Frigate A Perceived Name')
  expect(frigate.platformType).toEqual('unknown')
  expect(frigate.perceivedForceName).toEqual('blue')

  // find hosted platforms
  const hosting: Array<RouteChild> = frigate.hosting

  // only one of the platforms is visible
  expect(hosting.length).toEqual(1)
  // we can predict ids
  expect(hosting[0].uniqid).toEqual('a0pra43302')
  expect(hosting[0].platformType).toEqual('unmanned-airborne-vehicle')
  expect(hosting[0].force).toEqual('blue')
  

  // get the host platform
  const frigate2 = store.routes[1]
  expect(frigate2.uniqid).toEqual('a0pra00001')
  expect(frigate2.name).toEqual('Frigate Perceived Name')
  expect(frigate2.platformType).toEqual('frigate')
  expect(frigate2.perceivedForceName).toEqual('blue')

  // find hosted platforms
  const hosting2: Array<RouteChild> = frigate2.hosting

  // only one of the platforms is visible
  expect(hosting2.length).toEqual(1)
  // we can predict ids
  expect(hosting2[0].uniqid).toEqual('a0pra11002')

  // since this is red force, we see perceived names
  expect(hosting2[0].name).toEqual('C572')
  expect(hosting2[0].force).toEqual('blue')
  expect(hosting2[0].platformType).toEqual('helicopter')
})


it('route displays perceived comprised assets in flat layer for red force', () => {
  const store: RouteStore = routeCreateStore(forces, 'Red', false, platformTypes)
  expect(store.routes.length).toEqual(9)

  // the first route should be for the frigate in the task group
  const frigate = store.routes[0]
  expect(frigate.uniqid).toEqual('a0prbr6441')
  expect(frigate.name).toEqual('Frigate A Perceived Name')
  expect(frigate.platformType).toEqual('unknown')
  expect(frigate.perceivedForceName).toEqual('blue')


  // the second route should be the hosting frigate
  const frigate2 = store.routes[1]
  expect(frigate2.uniqid).toEqual('a0pra00001')
  expect(frigate2.name).toEqual('Frigate Perceived Name')
  expect(frigate2.platformType).toEqual('frigate')
  expect(frigate2.perceivedForceName).toEqual('blue')
})