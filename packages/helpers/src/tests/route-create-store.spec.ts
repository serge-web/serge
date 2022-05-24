// /* global it expect */
import { cloneDeep } from 'lodash'

/* Import mock data */
import { forces, platformTypes, preInitialisedForces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'

import { Phase, LaydownPhases, UMPIRE_FORCE, UNKNOWN_TYPE } from '@serge/config'

import { RouteStore, RouteChild, Route, ForceData, Asset } from '@serge/custom-types'

const umpireForce = forces[0].uniqid
const blueForce = forces[1].uniqid
const redForce = forces[2].uniqid

// TODO: new tests for controlled by

it('can create route under control as umpire ', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route = store.routes[1]
  expect(route.uniqid).toEqual('a0pra00001')
  expect(route.history.length).toEqual(1)
  expect(route.planned.length).toEqual(2)
  expect(route.original.length).toEqual(2)
  expect(route.underControlByThisForce).toBeFalsy()

  expect(route.visibleTo).toBeTruthy()
  expect(route.visibleTo.length).toEqual(1)
  expect(route.visibleTo[0]).toEqual('Red')

  expect(route.condition).toEqual('Full capability')
})

it('can create route with static steps under control as umpire in playing phase', () => {
  const store: RouteStore = routeCreateStore('a0pra000100', Phase.Adjudication, forces, umpireForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route | undefined = store.selected

  if (route) {
    expect(route.uniqid).toEqual('a0pra000100')
    expect(route.history.length).toEqual(3)
    // check non-mobile points looks how we expect
    expect(route.history[0].route).toBeTruthy()
    expect(route.history[1].route).toBeUndefined()
    expect(route.history[2].route).toBeTruthy()
    expect(route.planned.length).toEqual(3)
    expect(route.planned[0].route).toBeTruthy()
    expect(route.planned[1].route).toBeUndefined()
    expect(route.planned[2].route).toBeTruthy()
    expect(route.original.length).toEqual(3)
  }
})

it('can create route under control as umpire in playing phase', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route = store.routes[1]
  expect(route.uniqid).toEqual('a0pra00001')
  expect(route.history.length).toEqual(1)
  expect(route.planned.length).toEqual(2)
  expect(route.original.length).toEqual(2)
  expect(route.selected).toBeFalsy()
})

it('can create route for un-recognised type', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, false, false)

  expect(store.routes.length).toEqual(11)

  // check inside a route
  const dhow: Route = store.routes[4]
  expect(dhow.uniqid).toEqual('a0pra000100')
  expect(dhow.color).toEqual('#999')
  expect(dhow.name).toEqual('C065') // contact number, since it's not perceived

  // should not create planned steps for non-blue platform
  expect(dhow.planned.length).toEqual(0)

  // should not create visible or condition elements for Blue force
  expect(dhow.visibleTo.length).toEqual(0)
  expect(dhow.condition).toEqual('Full capability')
})

it('create full history & planned for blue unit', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(11)

  // check a blue route
  const group: Route = store.routes[0]
  expect(group.color).toEqual('#00F')
  expect(group.name).toEqual('CTF 511')
  expect(group.history.length).toEqual(3)
  expect(group.planned.length).toEqual(2)

  // check inside a route
  const dhow: Route = store.routes[4]
  expect(dhow.history.length).toEqual(3)
  // should not create planned steps for non-blue platform
  expect(dhow.planned.length).toEqual(0)
})

it('create trimmed history & full planned for selected blue unit', () => {
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeCreateStore(frigateId, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(11)

  // check selected route
  const frigate: Route | undefined = store.selected
  expect(frigate).toBeTruthy()
  if (frigate) {
    expect(frigate.name).toEqual('Frigate')
    expect(frigate.history.length).toEqual(1)
    expect(frigate.planned.length).toEqual(2)
    expect(frigate.plannedTrimmed.length).toEqual(2)
    expect(frigate.selected).toBeTruthy()
  }

  // check a blue route other than frigate (it should have full length route)
  const tankerId = 'a0pra00003'
  const tanker: Route | undefined = store.routes.find(route => route.uniqid === tankerId)
  expect(tanker).toBeTruthy()
  if (tanker) {
    expect(tanker.name).toEqual('Tanker')
    expect(tanker.history.length).toEqual(1)
    expect(tanker.planned.length).toEqual(3)
    expect(tanker.plannedTrimmed.length).toEqual(3)
    expect(tanker.plannedTurnsCount).toEqual(3)
    expect(tanker.selected).toBeFalsy()
  }

  // check no other routes set as selected
  store.routes.forEach((route: Route) => {
    // selected flag should be false if this isn't the frigate
    expect(route.selected).toEqual(route.uniqid === frigateId)
  })
})

it('create trimmed history & trimmed planned for without selected blue unit', () => {
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(11)

  expect(store.selected).toBeUndefined()

  // check a blue route
  const frigate: Route | undefined = store.routes.find(route => route.uniqid === frigateId)
  expect(frigate).toBeTruthy()
  if (frigate) {
    expect(frigate.name).toEqual('Frigate')
    expect(frigate.history.length).toEqual(1)
    expect(frigate.planned.length).toEqual(2)
    expect(frigate.plannedTrimmed.length).toEqual(1)
    expect(frigate.plannedTurnsCount).toEqual(2)
  }
})

it('create trimmed history & trimmed planned for without selected red unit', () => {
  const frigateId = 'a0pra00001'
  const dhowId = 'a0pra000100'
  const store: RouteStore = routeCreateStore(dhowId, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(11)

  expect(store.selected).toBeDefined()

  // check a blue route
  const frigate: Route | undefined = store.routes.find(route => route.uniqid === frigateId)
  expect(frigate).toBeTruthy()
  if (frigate) {
    expect(frigate.name).toEqual('Frigate')
    expect(frigate.history.length).toEqual(1)
    expect(frigate.planned.length).toEqual(2)
    expect(frigate.plannedTrimmed.length).toEqual(1)
  }

  // check a red route
  const dhow: Route | undefined = store.routes.find(route => route.uniqid === dhowId)
  expect(dhow).toBeTruthy()
  if (dhow) {
    expect(dhow.name).toEqual('C065')
    expect(dhow.history.length).toEqual(1)
    expect(dhow.plannedTrimmed.length).toEqual(0)
    expect(dhow.planned.length).toEqual(0)
  }
})

it('create trimmed history & planned for blue unit', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(11)

  // check a blue route
  const group: Route = store.routes[0]
  expect(group.color).toEqual('#00F')
  expect(group.name).toEqual('CTF 511')
  expect(group.history.length).toEqual(1)
  expect(group.planned.length).toEqual(2)
  expect(group.plannedTrimmed.length).toEqual(1)

  // check inside a route
  const dhow: Route = store.routes[4]
  // should not create planned steps for non-blue platform
  expect(dhow.planned.length).toEqual(0)
})

it('create trimmed history & planned for blue unit but with full num of turns in attribute', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(11)

  // check a blue route
  const group: Route = store.routes[0]
  expect(group.color).toEqual('#00F')
  expect(group.name).toEqual('CTF 511')
  expect(group.history.length).toEqual(1)
  expect(group.plannedTrimmed.length).toEqual(1)
  expect(group.planned.length).toEqual(2)
  // the full number of planned turns should still be returned here
  expect(group.plannedTurnsCount).toEqual(2)
})

it('can create route as umpire in planning mode', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route = store.routes[1]
  expect(route.uniqid).toEqual('a0pra00001')
  expect(route.history.length).toEqual(1)
  expect(route.planned.length).toEqual(2)
  expect(route.plannedTrimmed.length).toEqual(2)
  expect(route.original.length).toEqual(2)
})

it('can create route as umpire in planning mode, filtering planned points', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce, 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(13)

  // check inside a route
  const route: Route = store.routes[1]
  expect(route.uniqid).toEqual('a0pra00001')
  expect(route.history.length).toEqual(1)
  expect(route.planned.length).toEqual(2)
  expect(route.plannedTrimmed.length).toEqual(1)
  expect(route.original.length).toEqual(2)
})

it('support new way of storing past steps', () => {
  const forcesClone = cloneDeep(forces)
  const redForce: ForceData = forcesClone[2]
  if (redForce && redForce.assets) {
    const asset: Asset = redForce.assets[0]
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

    const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesClone, umpireForce, 'role-id', platformTypes, false, false)
    expect(store.routes.length).toEqual(13)

    // check inside a route
    const route: Route = store.routes[4]
    expect(route.uniqid).toEqual('a0pra000100')
    expect(route.history.length).toEqual(2)
    expect(route.history[0].turn).toEqual(5)
    expect(route.history[0].route).toBeDefined()
    if (route.history[0].route) {
      expect(route.history[0].route.length).toEqual(2)
    }
  } else {
    throw new Error('failed to find red asset')
  }
})

it('route displays all hosted & comprising assets for white force', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, UMPIRE_FORCE, 'role-id', platformTypes, false, false)
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

it('route displays all hosted & comprising assets for blue force with filtered planned routes', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, true, true)
  expect(store.routes.length).toEqual(11)

  // get the host platform
  const frigate = store.routes[1]
  expect(frigate.uniqid).toEqual('a0pra00001')

  // check we have planned route with only one step
  expect(frigate.planned.length).toEqual(2)
  expect(frigate.plannedTrimmed.length).toEqual(1)
})

it('route displays all hosted & comprising assets for blue force', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(12)

  // get the host platform
  const frigate = store.routes[1]
  expect(frigate.uniqid).toEqual('a0pra00001')

  // check we have planned route
  expect(frigate.planned.length).toEqual(2)

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
  expect(comprising[0].asset.hosting.length).toEqual(2)
  expect(comprising[0].asset.hosting[0].name).toEqual('Dart 45')
  expect(comprising[0].asset.hosting[1].name).toEqual('Dart 46')
})

it('route displays perceived hosted assets in tree for red force', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce, 'role-id', platformTypes, false, false)

  expect(store.routes.length).toEqual(9)
  // try the host platform in the task group
  const frigate = store.routes[0]
  expect(frigate.uniqid).toEqual('a0prbr6441')
  expect(frigate.name).toEqual('Frigate A Perceived Name')
  expect(frigate.platformTypeId).toEqual(UNKNOWN_TYPE)
  expect(frigate.perceivedForceId).toEqual(blueForce)

  // find hosted platforms
  const hosting: Array<RouteChild> = frigate.hosting

  // only one of the platforms is visible
  expect(hosting.length).toEqual(1)
  // we can predict ids
  expect(hosting[0].uniqid).toEqual('a0pra43302')
  expect(hosting[0].platformTypeId).toEqual('a10')
  expect(hosting[0].force).toEqual(blueForce)

  // get the host platform
  const frigate2 = store.routes[1]
  expect(frigate2.uniqid).toEqual('a0pra00001')
  expect(frigate2.name).toEqual('Frigate Perceived Name')
  expect(frigate2.platformTypeId).toEqual('a3')
  expect(frigate2.perceivedForceId).toEqual(blueForce)
  // don't show planned route for platform from other force
  expect(frigate2.planned.length).toEqual(0)

  // find hosted platforms
  const hosting2: Array<RouteChild> = frigate2.hosting

  // only one of the platforms is visible
  expect(hosting2.length).toEqual(1)
  // we can predict ids
  expect(hosting2[0].uniqid).toEqual('a0pra11002')

  // since this is red force, we see perceived names
  expect(hosting2[0].name).toEqual('C572')
  expect(hosting2[0].force).toEqual(blueForce)
  expect(hosting2[0].platformTypeId).toEqual('a8')
})

it('route displays perceived comprised assets in flat layer for red force', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce, 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(9)

  // the first route should be for the frigate in the task group
  const frigate = store.routes[0]
  expect(frigate.uniqid).toEqual('a0prbr6441')
  expect(frigate.name).toEqual('Frigate A Perceived Name')
  expect(frigate.platformTypeId).toEqual(UNKNOWN_TYPE)
  expect(frigate.perceivedForceId).toEqual(blueForce)

  // the second route should be the hosting frigate
  const frigate2 = store.routes[1]
  expect(frigate2.uniqid).toEqual('a0pra00001')
  expect(frigate2.name).toEqual('Frigate Perceived Name')
  expect(frigate2.platformTypeId).toEqual('a3')
  expect(frigate2.perceivedForceId).toEqual(blueForce)
})

it('route displays full history for asset in red force', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce, 'role-id', platformTypes, false, true)
  expect(store.routes.length).toEqual(9)

  // find the dhow
  const dhow = store.routes.find(route => route.name === 'Dhow-A')
  expect(dhow).toBeDefined()
  if (dhow) {
    expect(dhow.name).toEqual('Dhow-A')
    expect(dhow.history.length).toEqual(3)
    expect(dhow.history[2].route && dhow.history[2].route.length).toEqual(2)
    // note: we put the second entry in 'route' structure, to test logic
    expect(dhow.history[2].route && dhow.history[2].route[0]).toEqual('N05')
    expect(dhow.history[2].route && dhow.history[2].route[1]).toEqual('N04')
  }
})

it('route displays single step of history for asset in red force', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce, 'role-id', platformTypes, true, false)
  expect(store.routes.length).toEqual(9)

  // find the dhow
  const dhow = store.routes.find(route => route.name === 'Dhow-A')
  expect(dhow).toBeDefined()
  if (dhow) {
    expect(dhow.name).toEqual('Dhow-A')
    expect(dhow.history.length).toEqual(1)
    expect(dhow.history[0].turn).toEqual(2)
    expect(dhow.history[0].route && dhow.history[0].route.length).toEqual(2)
    expect(dhow.history[0].route && dhow.history[0].route[0]).toEqual('N05')
    expect(dhow.history[0].route && dhow.history[0].route[1]).toEqual('N04')
  }
})

it('creates routes for assets in new laydown structure in pre-init', () => {
  const safeForces: ForceData[] = cloneDeep(preInitialisedForces)

  // mangle the data a bit
  const blue: ForceData = safeForces[1]
  if (!blue.assets) {
    expect(false).toBeTruthy()
    return
  }
  blue.assets[2].position = 'G23'

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, safeForces, umpireForce, 'role-id', platformTypes, false, false, false)
  expect(store.routes.length).toEqual(1) // only one route has a position

  // check inside the route with a position
  const route: Route = store.routes[0]
  expect(route.uniqid).toEqual('a0pra00002')
  expect(route.history.length).toEqual(0)
  expect(route.planned.length).toEqual(0)
  expect(route.original.length).toEqual(0)
  expect(route.laydownPhase).toEqual(LaydownPhases.Immobile) // no route present, so can't have moved
  expect(route.underControlByThisForce).toBeFalsy()
})

it('creates routes for assets in legacy structure in pre-init', () => {
  const safeForces: ForceData[] = cloneDeep(forces)

  // mangle the data a bit
  const blue: ForceData = safeForces[1]
  if (!blue.assets) {
    expect(false).toBeTruthy()
    return
  }
  blue.assets[2].position = 'G23'

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, safeForces, umpireForce, 'role-id', platformTypes, false, false, false)
  expect(store.routes.length).toEqual(13) // only one route has a position

  // check inside the route with a position
  const route: Route = store.routes[2]
  expect(route.uniqid).toEqual('a0pra00002')
  expect(route.history.length).toEqual(0)
  expect(route.planned.length).toEqual(0)
  expect(route.original.length).toEqual(0)
  expect(route.laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(route.underControlByThisForce).toBeFalsy()
})

it('creates routes for assets in legacy structure in post-init', () => {
  const safeForces: ForceData[] = cloneDeep(forces)

  // mangle the data a bit
  const blue: ForceData = safeForces[1]
  if (!blue.assets) {
    expect(false).toBeTruthy()
    return
  }
  blue.assets[2].position = 'G23'

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, safeForces, umpireForce, 'role-id', platformTypes, false, false, false)
  expect(store.routes.length).toEqual(13) // only one route has a position

  // check inside the route with a position
  const route: Route = store.routes[2]
  expect(route.uniqid).toEqual('a0pra00002')
  expect(route.history.length).toEqual(0)
  expect(route.planned.length).toEqual(0)
  expect(route.original.length).toEqual(0)
  expect(route.laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(route.underControlByThisForce).toBeFalsy()
})
