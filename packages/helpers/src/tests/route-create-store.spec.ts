// /* global it expect */
import { cloneDeep } from 'lodash'

/* Import mock data */
import { watuWargame, preInitialisedForces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'

import { Phase, LaydownPhases, UNKNOWN_TYPE } from '@serge/config'

import { RouteStore, RouteChild, Route, ForceData, Asset, ChannelMapping } from '@serge/custom-types'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const umpireForce = forces[0]
const blueForce = forces[1]
const redForce = forces[2]
const greenForce = forces[3]
const showSteps = false

// check we have unput data
it('check test dependencies', () => {
  expect(cloneDeep).toBeTruthy()
  expect(blueForce && redForce && mappingChan && umpireForce && greenForce && !showSteps).toBeTruthy()
  expect(LaydownPhases && UNKNOWN_TYPE).toBeTruthy()
  expect(preInitialisedForces).toBeTruthy()
  const dummy1 = {} as RouteChild
  expect(dummy1).toBeTruthy()
  const dummy2 = {} as ForceData
  expect(dummy2).toBeTruthy()
  const dummy3 = {} as Asset
  expect(dummy3).toBeTruthy()
})

// // TODO: new tests for controlled by
// it('can create route under control as umpire ', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce.uniqid, umpireForce.roles[0].roleId,
//     platformTypes, showSteps, showSteps, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(7)

//   // check inside a route
//   const route: Route = store.routes[0]
//   expect(route.uniqid).toEqual('nortID')
//   expect(route.history.length).toEqual(3)
//   expect(route.planned.length).toEqual(2)
//   expect(route.original.length).toEqual(2)
//   expect(route.underControlByThisForce).toBeFalsy()

//   expect(route.visibleTo).toBeTruthy()
//   expect(route.visibleTo.length).toEqual(1)
//   expect(route.visibleTo[0]).toEqual('Red-2')

//   expect(route.condition).toEqual('Working')
// })

// it('can create route with static steps under control as umpire in playing phase', () => {
//   const store: RouteStore = routeCreateStore('nortID', Phase.Adjudication, forces, umpireForce.uniqid, umpireForce.roles[0].roleId,
//     platformTypes, showSteps, showSteps, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(7)

//   // check inside a route
//   const route: Route | undefined = store.selected

//   if (route) {
//     expect(route.uniqid).toEqual('nortID')
//     expect(route.history.length).toEqual(3)
//     // check non-mobile points looks how we expect
//     expect(route.history[0].route).toBeTruthy()
//     expect(route.history[1].route).toBeUndefined()
//     expect(route.history[2].route).toBeTruthy()
//     expect(route.planned.length).toEqual(2)
//     expect(route.planned[0].route).toBeTruthy()
//     expect(route.planned[1].route).toBeUndefined()
//     expect(route.original.length).toEqual(2)
//   }
// })

// it('can create route under control as umpire in playing phase', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce.uniqid, umpireForce.roles[0].roleId,
//     platformTypes, false, false, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(7)

//   // check inside a route
//   const route: Route = store.routes[1]
//   expect(route.uniqid).toEqual('talnID')
//   expect(route.history.length).toEqual(3)
//   expect(route.planned.length).toEqual(0)
//   expect(route.original.length).toEqual(0)
//   expect(route.selected).toBeFalsy()
// })

// it('can create route for un-recognised type', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId,
//     platformTypes, false, false, undefined, undefined, mappingChan)

//   expect(store.routes.length).toEqual(5)

//   // check inside a route
//   const mpa2: Route = store.routes[4]
//   expect(mpa2.uniqid).toEqual('a03322ty344331')
//   expect(mpa2.color).toEqual('#f00')
//   expect(mpa2.name).toEqual('C442') // contact number, since it's not perceived

//   // should not create planned steps for non-blue platform
//   expect(mpa2.planned.length).toEqual(0)

//   // should not create visible or condition elements for Blue force
//   expect(mpa2.visibleTo.length).toEqual(0)
//   expect(mpa2.condition).toEqual('Working')
// })

// it('create full history & planned for blue unit', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId,
//     platformTypes, showSteps, showSteps, undefined, undefined, mappingChan)

//   expect(store.routes.length).toEqual(5)

//   // console.table(store.routes.map((route: Route) => {
//   //   return {
//   //     name: route.name,
//   //     perceptions: route.perceivedForceId,
//   //     type: route.uniqid
//   //   }
//   // }))

//   // check a blue route
//   const nort: Route = store.routes[0]
//   expect(nort.color).toEqual('#00aaff')
//   expect(nort.name).toEqual('NORT')
//   expect(nort.history.length).toEqual(3)
//   expect(nort.planned.length).toEqual(2)

//   // check inside a route
//   const mpa: Route = store.routes[4]
//   expect(mpa.history.length).toEqual(1)
//   // should not create planned steps for non-blue platform
//   expect(mpa.planned.length).toEqual(0)

//   // double-check that real MPA has planned turns
//   const mpaHasPlannedturns = redForce.assets && redForce.assets[1].plannedTurns && redForce.assets[1].plannedTurns.length > 0
//   expect(mpaHasPlannedturns).toBeTruthy()
// })

// it('create trimmed history & full planned for selected blue unit', () => {
//   const frigateId = 'nortID'
//   const store: RouteStore = routeCreateStore(frigateId, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, true, false, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(5)

//   // check selected route
//   const frigate: Route | undefined = store.selected
//   expect(frigate).toBeTruthy()
//   if (frigate) {
//     expect(frigate.name).toEqual('NORT')
//     expect(frigate.history.length).toEqual(1)
//     expect(frigate.planned.length).toEqual(2)
//     expect(frigate.plannedTrimmed.length).toEqual(2)
//     expect(frigate.plannedTurnsCount).toEqual(2)
//     expect(frigate.selected).toBeTruthy()
//   }

//   // check no other routes set as selected
//   store.routes.forEach((route: Route) => {
//     // selected flag should be false if this isn't the frigate
//     expect(route.selected).toEqual(route.uniqid === frigateId)
//   })
// })

// it('create trimmed history & trimmed planned for without selected blue unit', () => {
//   const frigateId = 'nortID'
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, true, true, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(5)

//   expect(store.selected).toBeUndefined()

//   // check a blue route
//   const frigate: Route | undefined = store.routes.find(route => route.uniqid === frigateId)
//   expect(frigate).toBeTruthy()
//   if (frigate) {
//     expect(frigate.name).toEqual('NORT')
//     expect(frigate.history.length).toEqual(1)
//     expect(frigate.planned.length).toEqual(2)
//     expect(frigate.plannedTrimmed.length).toEqual(1)
//     expect(frigate.plannedTurnsCount).toEqual(2)
//   }
// })

it('create trimmed history & trimmed planned for without selected red unit', () => {
  const frigateId = 'nortID'
  const mpaID = 'a03322ty344331'
  const store: RouteStore = routeCreateStore(mpaID, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, true, true, undefined, undefined, mappingChan)
  expect(store.routes.length).toEqual(5)

  expect(store.selected).toBeDefined()

  // check a blue route
  const frigate: Route | undefined = store.routes.find(route => route.uniqid === frigateId)
  expect(frigate).toBeTruthy()
  if (frigate) {
    expect(frigate.name).toEqual('NORT')
    expect(frigate.history.length).toEqual(1)
    expect(frigate.planned.length).toEqual(2)
    expect(frigate.plannedTrimmed.length).toEqual(1)
  }

  // check a red route
  const mpa: Route | undefined = store.routes.find(route => route.uniqid === mpaID)
  expect(mpa).toBeTruthy()
  if (mpa) {
    expect(mpa.name).toEqual('C442')
    expect(mpa.history.length).toEqual(1)
    expect(mpa.plannedTrimmed.length).toEqual(0)
    expect(mpa.planned.length).toEqual(0)
  }
})

it('create trimmed history & planned for blue unit', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, true, true, undefined, undefined, mappingChan)
  expect(store.routes.length).toEqual(5)

  // check a blue route
  const nort: Route = store.routes[0]
  expect(nort.color).toEqual('#00aaff')
  expect(nort.name).toEqual('NORT')
  expect(nort.history.length).toEqual(1)
  expect(nort.planned.length).toEqual(2)
  expect(nort.plannedTrimmed.length).toEqual(1)

  // check inside a route
  const mpa: Route = store.routes[4]
  // should not create planned steps for non-blue platform
  expect(mpa.planned.length).toEqual(0)
})

it('create trimmed history & planned for blue unit but with full num of turns in attribute', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, true, true, undefined, undefined, mappingChan)
  expect(store.routes.length).toEqual(5)

  // check a blue route
  const group: Route = store.routes[0]
  expect(group.color).toEqual('#00aaff')
  expect(group.name).toEqual('NORT')
  expect(group.history.length).toEqual(1)
  expect(group.plannedTrimmed.length).toEqual(1)
  expect(group.planned.length).toEqual(2)
  // the full number of planned turns should still be returned here
  expect(group.plannedTurnsCount).toEqual(2)
})

it('can create route as umpire in planning mode', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, false, false, undefined, undefined, mappingChan)
  expect(store.routes.length).toEqual(7)

  // check inside a route
  const route: Route = store.routes[0]
  expect(route.uniqid).toEqual('nortID')
  expect(route.history.length).toEqual(3)
  expect(route.planned.length).toEqual(2)
  expect(route.plannedTrimmed.length).toEqual(2)
  expect(route.original.length).toEqual(2)
})

it('can create route as umpire in planning mode, filtering planned points', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, true, true, undefined, undefined, mappingChan)
  expect(store.routes.length).toEqual(7)

  // check inside a route
  const route: Route = store.routes[0]
  expect(route.uniqid).toEqual('nortID')
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
    const subjectId = asset.uniqid
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

    const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesClone, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, false, false, undefined, undefined, mappingChan)
    expect(store.routes.length).toEqual(7)

    // check inside a route
    const route: Route = store.routes[3]
    expect(route.uniqid).toEqual(subjectId)
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

// it('route displays all hosted & comprising assets for white force', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, false, false, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(7)

//   // get the host platform
//   const frigate: Route = store.routes[1]
//   expect(frigate.uniqid).toEqual('talnID')

//   // find hosted platforms
//   const hosting: Array<RouteChild> = frigate.hosting
//   expect(hosting.length).toEqual(2)
//   // we can predict ids
//   expect(hosting[0].uniqid).toEqual('a0pra11002')
//   expect(hosting[1].uniqid).toEqual('a0pra18702')

//   // since this is white force, we see real names
//   expect(hosting[0].name).toEqual('Merlin')
//   expect(hosting[1].name).toEqual('Dart 42')

//   // find comprising platforms
//   const taskGroup = store.routes[0]
//   const comprising: Array<RouteChild> = taskGroup.comprising
//   expect(comprising.length).toEqual(2)
//   // we can predict ids
//   expect(comprising[0].uniqid).toEqual('a0prbr6441')
//   expect(comprising[1].uniqid).toEqual('a0traa6790')

//   // since this is white force, we see real names
//   expect(comprising[0].name).toEqual('Frigate A')
//   expect(comprising[1].name).toEqual('MCM Delta')
// })

// it('route displays all hosted & comprising assets for blue force with filtered planned routes', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, true, true, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(11)

//   // get the host platform
//   const frigate = store.routes[1]
//   expect(frigate.uniqid).toEqual('a0pra00001')

//   // check we have planned route with only one step
//   expect(frigate.planned.length).toEqual(2)
//   expect(frigate.plannedTrimmed.length).toEqual(1)
// })

// it('route displays all hosted & comprising assets for blue force', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, platformTypes, false, false, undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(12)

//   // get the host platform
//   const frigate = store.routes[1]
//   expect(frigate.uniqid).toEqual('a0pra00001')

//   // check we have planned route
//   expect(frigate.planned.length).toEqual(2)

//   // find hosted platforms
//   const hosting: Array<RouteChild> = frigate.hosting
//   expect(hosting.length).toEqual(2)
//   // we can predict ids
//   expect(hosting[0].uniqid).toEqual('a0pra11002')
//   expect(hosting[1].uniqid).toEqual('a0pra18702')

//   // since this is blue force, we see real names
//   expect(hosting[0].name).toEqual('Merlin')
//   expect(hosting[1].name).toEqual('Dart 42')

//   // find comprising platforms
//   const taskGroup = store.routes[0]
//   const comprising: Array<RouteChild> = taskGroup.comprising
//   expect(comprising.length).toEqual(2)
//   // we can predict ids
//   expect(comprising[0].uniqid).toEqual('a0prbr6441')
//   expect(comprising[1].uniqid).toEqual('a0traa6790')

//   // since this is blue force, we see real names
//   expect(comprising[0].name).toEqual('Frigate A')
//   expect(comprising[1].name).toEqual('MCM Delta')

//   // check we can see the frigate is hosting something
//   expect(comprising[0].asset.hosting.length).toEqual(2)
//   expect(comprising[0].asset.hosting[0].name).toEqual('Dart 45')
//   expect(comprising[0].asset.hosting[1].name).toEqual('Dart 46')
// })

// it('route displays perceived hosted assets in tree for red force', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, blueForce.roles[0].roleId, platformTypes, false, false, undefined, undefined, mappingChan)

//   expect(store.routes.length).toEqual(9)
//   // try the host platform in the task group
//   const frigate = store.routes[0]
//   expect(frigate.uniqid).toEqual('a0prbr6441')
//   expect(frigate.name).toEqual('Frigate A Perceived Name')
//   expect(frigate.platformTypeId).toEqual(UNKNOWN_TYPE)
//   expect(frigate.perceivedForceId).toEqual(blueForce)

//   // find hosted platforms
//   const hosting: Array<RouteChild> = frigate.hosting

//   // only one of the platforms is visible
//   expect(hosting.length).toEqual(1)
//   // we can predict ids
//   expect(hosting[0].uniqid).toEqual('a0pra43302')
//   expect(hosting[0].platformTypeId).toEqual('a10')
//   expect(hosting[0].force).toEqual(blueForce)

//   // get the host platform
//   const frigate2 = store.routes[1]
//   expect(frigate2.uniqid).toEqual('a0pra00001')
//   expect(frigate2.name).toEqual('Frigate Perceived Name')
//   expect(frigate2.platformTypeId).toEqual('a3')
//   expect(frigate2.perceivedForceId).toEqual(blueForce)
//   // don't show planned route for platform from other force
//   expect(frigate2.planned.length).toEqual(0)

//   // find hosted platforms
//   const hosting2: Array<RouteChild> = frigate2.hosting

//   // only one of the platforms is visible
//   expect(hosting2.length).toEqual(1)
//   // we can predict ids
//   expect(hosting2[0].uniqid).toEqual('a0pra11002')

//   // since this is red force, we see perceived names
//   expect(hosting2[0].name).toEqual('C572')
//   expect(hosting2[0].force).toEqual(blueForce)
//   expect(hosting2[0].platformTypeId).toEqual('a8')
// })

// it('route displays perceived comprised assets in flat layer for red force', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, blueForce.roles[0].roleId, platformTypes, false, false undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(9)

//   // the first route should be for the frigate in the task group
//   const frigate = store.routes[0]
//   expect(frigate.uniqid).toEqual('a0prbr6441')
//   expect(frigate.name).toEqual('Frigate A Perceived Name')
//   expect(frigate.platformTypeId).toEqual(UNKNOWN_TYPE)
//   expect(frigate.perceivedForceId).toEqual(blueForce)

//   // the second route should be the hosting frigate
//   const frigate2 = store.routes[1]
//   expect(frigate2.uniqid).toEqual('a0pra00001')
//   expect(frigate2.name).toEqual('Frigate Perceived Name')
//   expect(frigate2.platformTypeId).toEqual('a3')
//   expect(frigate2.perceivedForceId).toEqual(blueForce)
// })

// it('route displays full history for asset in red force', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, platformTypes, false, true undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(9)

//   // find the dhow
//   const dhow = store.routes.find(route => route.name === 'Dhow-A')
//   expect(dhow).toBeDefined()
//   if (dhow) {
//     expect(dhow.name).toEqual('Dhow-A')
//     expect(dhow.history.length).toEqual(3)
//     expect(dhow.history[2].route && dhow.history[2].route.length).toEqual(2)
//     // note: we put the second entry in 'route' structure, to test logic
//     expect(dhow.history[2].route && dhow.history[2].route[0]).toEqual('N05')
//     expect(dhow.history[2].route && dhow.history[2].route[1]).toEqual('N04')
//   }
// })

// it('route displays single step of history for asset in red force', () => {
//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, redForce.uniqid, redForce.roles[0].roleId, platformTypes, true, false undefined, undefined, mappingChan)
//   expect(store.routes.length).toEqual(9)

//   // find the dhow
//   const dhow = store.routes.find(route => route.name === 'Dhow-A')
//   expect(dhow).toBeDefined()
//   if (dhow) {
//     expect(dhow.name).toEqual('Dhow-A')
//     expect(dhow.history.length).toEqual(1)
//     expect(dhow.history[0].turn).toEqual(2)
//     expect(dhow.history[0].route && dhow.history[0].route.length).toEqual(2)
//     expect(dhow.history[0].route && dhow.history[0].route[0]).toEqual('N05')
//     expect(dhow.history[0].route && dhow.history[0].route[1]).toEqual('N04')
//   }
// })

// it('creates routes for assets in new laydown structure in pre-init', () => {
//   const safeForces: ForceData[] = cloneDeep(preInitialisedForces)

//   // mangle the data a bit
//   const blue: ForceData = safeForces[1]
//   if (!blue.assets) {
//     expect(false).toBeTruthy()
//     return
//   }
//   blue.assets[2].position = 'G23'

//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, safeForces, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, false, false, false, undefined, mappingChan)
//   expect(store.routes.length).toEqual(1) // only one route has a position

//   // check inside the route with a position
//   const route: Route = store.routes[0]
//   expect(route.uniqid).toEqual('a0pra00002')
//   expect(route.history.length).toEqual(0)
//   expect(route.planned.length).toEqual(0)
//   expect(route.original.length).toEqual(0)
//   expect(route.laydownPhase).toEqual(LaydownPhases.Immobile) // no route present, so can't have moved
//   expect(route.underControlByThisForce).toBeFalsy()
// })

// it('creates routes for assets in legacy structure in pre-init', () => {
//   const safeForces: ForceData[] = cloneDeep(forces)

//   // mangle the data a bit
//   const blue: ForceData = safeForces[1]
//   if (!blue.assets) {
//     expect(false).toBeTruthy()
//     return
//   }
//   blue.assets[2].position = 'G23'

//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, safeForces, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, false, false, false, undefined, mappingChan)
//   expect(store.routes.length).toEqual(13) // only one route has a position

//   // check inside the route with a position
//   const route: Route = store.routes[2]
//   expect(route.uniqid).toEqual('a0pra00002')
//   expect(route.history.length).toEqual(0)
//   expect(route.planned.length).toEqual(0)
//   expect(route.original.length).toEqual(0)
//   expect(route.laydownPhase).toEqual(LaydownPhases.Immobile)
//   expect(route.underControlByThisForce).toBeFalsy()
// })

// it('creates routes for assets in legacy structure in post-init', () => {
//   const safeForces: ForceData[] = cloneDeep(forces)

//   // mangle the data a bit
//   const blue: ForceData = safeForces[1]
//   if (!blue.assets) {
//     expect(false).toBeTruthy()
//     return
//   }
//   blue.assets[2].position = 'G23'

//   const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, safeForces, umpireForce.uniqid, umpireForce.roles[0].roleId, platformTypes, false, false, false, undefined, mappingChan)
//   expect(store.routes.length).toEqual(13) // only one route has a position

//   // check inside the route with a position
//   const route: Route = store.routes[2]
//   expect(route.uniqid).toEqual('a0pra00002')
//   expect(route.history.length).toEqual(0)
//   expect(route.planned.length).toEqual(0)
//   expect(route.original.length).toEqual(0)
//   expect(route.laydownPhase).toEqual(LaydownPhases.Immobile)
//   expect(route.underControlByThisForce).toBeFalsy()
// })
