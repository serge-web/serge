/* global it expect */

/* Import mock data */
import { watuWargame } from 'src/mocks'

import routeCreateStore from '../route-create-store'

import { ChannelMapping, Route, RouteStore } from 'src/custom-types'
import { LaydownPhases, LaydownTypes, Phase } from 'src/config'
import { laydownPhaseFor } from '../route-create-route'
import deepCopy from '../deep-copy'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const showSteps = false

// suitably mangle the data
const blueF = forces[1]
const blue1 = blueF.assets && blueF.assets[0]
if (blue1) {
  blue1.locationPending = LaydownTypes.UmpireLaydown
  blue1.position = undefined
}
const blue2 = blueF.assets && blueF.assets[1]
if (blue2) {
  blue2.locationPending = LaydownTypes.ForceLaydown
  blue2.position = undefined
}

// blueF.assets = blueF.assets ? [blueF.assets[0]] : []
// forces[2].assets = []
forces[3].assets = []

it('determines correct laydown phase', () => {
  const notInitiated = false
  // adjudication phase
  // in umpire laydown
  expect(laydownPhaseFor(Phase.Adjudication, notInitiated, undefined,
    LaydownTypes.UmpireLaydown, undefined, undefined)).toEqual(LaydownPhases.Unmoved)

  // not for umpire laydown
  expect(laydownPhaseFor(Phase.Adjudication, notInitiated, undefined,
    LaydownTypes.ForceLaydown, undefined, undefined)).toEqual(LaydownPhases.Immobile)
  expect(laydownPhaseFor(Phase.Adjudication, notInitiated, undefined,
    LaydownTypes.Fixed, undefined, undefined)).toEqual(LaydownPhases.Immobile)

  // NOW WITH WARGAME INITIATED
  const initiated = true
  // adjudication phase
  // in umpire laydown
  expect(laydownPhaseFor(Phase.Adjudication, initiated, undefined,
    LaydownTypes.UmpireLaydown, undefined, undefined)).toEqual(LaydownPhases.Immobile)

  // not for umpire laydown
  expect(laydownPhaseFor(Phase.Adjudication, initiated, undefined,
    LaydownTypes.ForceLaydown, undefined, undefined)).toEqual(LaydownPhases.Unmoved)
  expect(laydownPhaseFor(Phase.Adjudication, initiated, undefined,
    LaydownTypes.Fixed, undefined, undefined)).toEqual(LaydownPhases.Immobile)
})

it('correctly sets laydown status for player in non-init', () => {
  // first version is umpure in non-initited wargame
  const notInitiated = false
  const isGameControl = false
  const blueForce = forces[1].uniqid
  const blueCO = forces[1].roles[0].roleId
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce, blueCO, isGameControl,
    platformTypes, showSteps, showSteps, notInitiated, undefined, mappingChan)
  expect(store).toBeTruthy()
  expect(store.routes[0].laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(store.routes[0].asset.locationPending).toEqual(LaydownTypes.UmpireLaydown)

  expect(store.routes[1].laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(store.routes[1].asset.locationPending).toEqual(LaydownTypes.ForceLaydown)

  expect(store.routes[2].laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(store.routes[2].asset.locationPending).toEqual(undefined)
})

it('correctly sets laydown status for umpire in init', () => {
  // first version is umpure in non-initited wargame
  const notInitiated = false
  const whiteForce = forces[0].uniqid
  const umpireRole = forces[0].roles[0].roleId
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, whiteForce, umpireRole, true,
    platformTypes, showSteps, showSteps, notInitiated, undefined, mappingChan)
  expect(store).toBeTruthy()
  expect(store.routes[0].laydownPhase).toEqual(LaydownPhases.Unmoved)
  expect(store.routes[0].asset.locationPending).toEqual(LaydownTypes.UmpireLaydown)

  expect(store.routes[1].laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(store.routes[1].asset.locationPending).toEqual(LaydownTypes.ForceLaydown)

  expect(store.routes[2].laydownPhase).toEqual(LaydownPhases.Immobile)
  expect(store.routes[2].asset.locationPending).toEqual(undefined)
//  console.table(routesAsArray(store.routes))
})

export const routesAsArray = (routes: Route[]): any[] => {
  return routes.map((route: Route) => {
    return [route.name,
      route.asset.locationPending,
      route.laydownPhase,
      route.currentPosition
    ]
  })
}
