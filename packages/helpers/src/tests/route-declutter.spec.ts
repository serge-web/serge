/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeDeclutter from '../route-declutter'

import { RouteStore, Route, RouteTurn } from '@serge/custom-types'
import { Phase } from '@serge/config'

it('declutter routes', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Blue', platformTypes, false, false)

  // force some platforms into the cell already occupied
  // but the platform in route 2
  for (let ctr = 3; ctr < 6; ctr++) {
    store.routes[ctr].currentLocation = store.routes[1].currentLocation
    store.routes[ctr].currentPosition = store.routes[1].currentPosition
  }

  // force one asset into the location of another
  const pos1 = store.routes[1].currentLocation
  const pos2 = store.routes[2].currentLocation
  const pos3 = store.routes[3].currentLocation
  const pos4 = store.routes[4].currentLocation
  const pos5 = store.routes[5].currentLocation

  const cleaned = routeDeclutter(store, 0.5)

  // pos2 is the MPA. Nothing else is in it's cell, so
  // it should not get decluttered
  expect(cleaned.routes[2].currentLocation).toEqual(pos2)
  expect(cleaned.routes[1].currentLocation).not.toEqual(pos1)
  expect(cleaned.routes[3].currentLocation).not.toEqual(pos3)
  expect(cleaned.routes[4].currentLocation).not.toEqual(pos4)
  expect(cleaned.routes[5].currentLocation).not.toEqual(pos5)
})

it('dont declutter last point on selected track', () => {
  const fisherAId = 'a0pra000202'
  const dhowAId = 'a0pra000100'
  const store: RouteStore = routeCreateStore(fisherAId, Phase.Adjudication, forces, 'umpire', platformTypes, true, true)

  // check dhow location & end of fisher planned match
  const fisherA1: Route | undefined = store.selected
  expect(fisherA1).toBeTruthy()
  const dhow1: Route | undefined = store.routes.find(route => route.uniqid === dhowAId)
  expect(dhow1).toBeTruthy()

  if (fisherA1 && dhow1) {
    // start off with cells
    const dhowLoc1Cell: string = dhow1.currentPosition
    const fisherPlanned1 = fisherA1.planned[fisherA1.planned.length - 1]
    const lastLoc1Cell: string | undefined = fisherPlanned1.route && fisherPlanned1.route[fisherPlanned1.route.length - 1]
    // confirm they're in the same cell
    expect(dhowLoc1Cell).toEqual(lastLoc1Cell)
  }

  // store location of last planned cell for fisherman
  const fisherPlanned: RouteTurn | undefined = fisherA1 && fisherA1.planned && fisherA1.planned[fisherA1.planned.length - 1]
  const fisherLast = fisherPlanned && fisherPlanned.locations && fisherPlanned.locations[fisherPlanned.locations.length - 1]
  expect(fisherLast).toBeTruthy()

  // ok, now de-clutter
  const cleaned = routeDeclutter(store, 0.5)
  expect(cleaned).toBeTruthy()

  // check dhow location & end of fisher planned match
  const fisherA2: Route | undefined = cleaned.selected
  expect(fisherA2).toBeTruthy()
  const dhow2: Route | undefined = cleaned.routes.find(route => route.uniqid === dhowAId)
  expect(dhow2).toBeTruthy()

  if (fisherA2 && dhow2) {
    const dhowLoc2: string = dhow2.currentPosition
    const fisherPlanned2 = fisherA2.planned[fisherA2.planned.length - 1]
    const lastLoc2: string | undefined = fisherPlanned2.route && fisherPlanned2.route[fisherPlanned2.route.length - 1]
    // confirm they're in the same cell
    expect(dhowLoc2).toEqual(lastLoc2)

    // store new location of last planned cell for fisherman
    const fisherLast2 = fisherPlanned2.locations && fisherPlanned2.locations[fisherPlanned2.locations.length - 1]
    expect(fisherLast2).toBeTruthy()

    // ok, we don't expect fisher last 2 to have changed
    expect(fisherLast).toEqual(fisherLast2)
  }
})

it('declutter last point on un-selected track', () => {
  const fisherAId = 'a0pra000202'
  const dhowAId = 'a0pra000100'
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', platformTypes, true, false)

  // check dhow location & end of fisher planned match
  const fisherA1: Route | undefined = store.routes.find(route => route.uniqid === fisherAId)
  expect(fisherA1).toBeTruthy()
  const dhow1: Route | undefined = store.routes.find(route => route.uniqid === dhowAId)
  expect(dhow1).toBeTruthy()

  if (fisherA1 && dhow1) {
    // start off with cells
    const dhowLoc1Cell: string = dhow1.currentPosition
    const fisherPlanned1 = fisherA1.planned[fisherA1.planned.length - 1]
    const lastLoc1Cell: string | undefined = fisherPlanned1.route && fisherPlanned1.route[fisherPlanned1.route.length - 1]
    // confirm they're in the same cell
    expect(dhowLoc1Cell).toEqual(lastLoc1Cell)
  }

  // store location of last planned cell for fisherman
  const fisherPlanned: RouteTurn | undefined = fisherA1 && fisherA1.planned && fisherA1.planned[fisherA1.planned.length - 1]
  const fisherLast = fisherPlanned && fisherPlanned.locations && fisherPlanned.locations[fisherPlanned.locations.length - 1]
  expect(fisherLast).toBeTruthy()

  // ok, now de-clutter
  const cleaned = routeDeclutter(store, 0.5)
  expect(cleaned).toBeTruthy()

  // check dhow location & end of fisher planned match
  const fisherA2: Route | undefined = cleaned.routes.find(route => route.uniqid === fisherAId)
  expect(fisherA2).toBeTruthy()
  const dhow2: Route | undefined = cleaned.routes.find(route => route.uniqid === dhowAId)
  expect(dhow2).toBeTruthy()

  if (fisherA2 && dhow2) {
    const dhowLoc2: string = dhow2.currentPosition
    const fisherPlanned2 = fisherA2.planned[fisherA2.planned.length - 1]
    const lastLoc2: string | undefined = fisherPlanned2.route && fisherPlanned2.route[fisherPlanned2.route.length - 1]
    // confirm they're in the same cell
    expect(dhowLoc2).toEqual(lastLoc2)

    // store new location of last planned cell for fisherman
    const fisherLast2 = fisherPlanned2.locations && fisherPlanned2.locations[fisherPlanned2.locations.length - 1]
    expect(fisherLast2).toBeTruthy()

    // ok, do expect fisher last 2 to have changed, since neither is the selected track
    expect(fisherLast).not.toEqual(fisherLast2)
  }
})
