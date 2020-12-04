/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'

import storePlannedRoute from './store-planned-route'

import { routeCreateStore, routeSetCurrent, findAsset, routeAddSteps, routeClearFromStep } from '@serge/helpers'

it('Stores the extended planned route', () => {
  const frigateId = 'a0pra00001'

  // create the route store
  const store: RouteStore = routeCreateStore(undefined, forces, 'Blue', platformTypes, undefined, false, false)
  expect(store).toBeTruthy()

  // set the frigate as selected
  const store2 = routeSetCurrent(frigateId, store)

  // get the route representing the frigate
  const frigRoute = store2.selected
  expect(frigRoute).toBeTruthy()
  if (frigRoute) {
    // store how long it is currentl
    const routeLen = frigRoute.planned.length

    // add another point
    const store3: RouteStore = routeAddSteps(store2, frigateId, [{
      turn: 6,
      coords: ['Q19', 'P18'],
      status: { state: 'Transiting', speedKts: 20 }
    }])

    // get the modified frigate route
    const frigRoute2: Route | undefined = store3.selected
    if (frigRoute2) {
      // store the new route
      const newForces = storePlannedRoute(frigateId, frigRoute2.planned, forces)
      expect(newForces).toBeTruthy()

      // get the frigate, to check it
      const newFrigate = findAsset(newForces, frigateId)
      const planned2 = newFrigate.plannedTurns
      // check the planned turns are one step longer
      expect(planned2.length).toEqual(routeLen + 1)
    } else {
      expect(false).toBeTruthy()
    }
  } else {
    expect(false).toBeTruthy()
  }
})

it('Stores the shortened planned route', () => {
  const frigateId = 'a0pra00001'

  // create the route store
  const store: RouteStore = routeCreateStore(undefined, forces, 'Blue', platformTypes, undefined, false, false)
  expect(store).toBeTruthy()

  // set the frigate as selected
  const store2 = routeSetCurrent(frigateId, store)

  // get the route representing the frigate
  const frigRoute = store2.selected
  expect(frigRoute).toBeTruthy()
  if (frigRoute) {
    // trim the route
    const store3: RouteStore = routeClearFromStep(store2, frigateId, 5)

    // get the modified frigate route
    const frigRoute2: Route | undefined = store3.selected
    if (frigRoute2) {
      // store the new route
      const newForces = storePlannedRoute(frigateId, frigRoute2.planned, forces)
      expect(newForces).toBeTruthy()

      // get the frigate, to check it
      const newFrigate = findAsset(newForces, frigateId)
      const planned2 = newFrigate.plannedTurns
      // check the planned turns is now just one step
      expect(planned2.length).toEqual(1)
    } else {
      expect(false).toBeTruthy()
    }
  } else {
    expect(false).toBeTruthy()
  }
})
