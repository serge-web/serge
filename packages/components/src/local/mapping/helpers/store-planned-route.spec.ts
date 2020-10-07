/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'

import storePlannedRoute from './store-planned-route'

import { routeCreateStore, routeSetCurrent, findAsset, routeAddSteps } from '@serge/helpers'

it('Stores the planned route', () => {
  const frigateId = 'a0pra00001'

  // create the route store
  const store:RouteStore = routeCreateStore(undefined, forces, 'Blue', false, platformTypes, undefined, false, false)
  expect(store).toBeTruthy()

  // set the frigate as selected
  const store2 = routeSetCurrent(frigateId, store)

  // get the route representing the frigate
  const frigRoute = store2.selected
  expect(frigRoute).toBeTruthy()
  if(frigRoute) {
    // store how long it is currentl
    const routeLen = frigRoute.planned.length

    // add another point
    const store3: RouteStore = routeAddSteps(store2, frigateId, [      {
      turn: 6,
      coords: [ 'Q19', 'P18' ],
      locations: [ {lat: 12.2, lng:33.3}, {lat: 3.3, lng:5.5} ],
      status: { state: 'Transiting', speedKts: 20 }
    }])

    const frigRoute2: Route | undefined = store3.selected
    if(frigRoute2) {
      const newForces = storePlannedRoute(frigateId, frigRoute2.planned, forces)
      expect(newForces).toBeTruthy()
  
      const newFrigate = findAsset(newForces, frigateId)
      const planned2 = newFrigate.plannedTurns
      expect(planned2.length).toEqual(routeLen + 1)
    } else {
        expect(false).toBeTruthy()

    }



  } else {
    expect(false).toBeTruthy()
  }

})
