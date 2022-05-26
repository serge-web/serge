/* global it expect */

/* Import mock data */
import { watuWargame } from '@serge/mocks'
import { RouteStore, Route, ForceData, ChannelTypes, ChannelMapping } from '@serge/custom-types'

import storePlannedRoute from './store-planned-route'
import { Phase } from '@serge/config'

import { routeCreateStore, routeSetCurrent, findAsset, routeAddSteps, routeClearFromStep } from '@serge/helpers'

const mapChannel = watuWargame.data.channels.channels.find((channel: ChannelTypes) => channel.name === 'mapping') as ChannelMapping
const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const blueForce: ForceData = forces[1]

it('Stores the extended planned route', () => {
  const frigateId = 'nortID'

  // create the route store
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, false, platformTypes, false, false, undefined, undefined, mapChannel)
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
      route: ['Q19', 'P18'],
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
      if (newFrigate) {
        const planned2 = newFrigate.plannedTurns
        // check the planned turns are one step longer
        expect(planned2 && planned2.length).toEqual(routeLen + 1)
      } else {
        expect(false).toBeTruthy()
      }
    } else {
      expect(false).toBeTruthy()
    }
  } else {
    expect(false).toBeTruthy()
  }
})

it('Stores the shortened planned route', () => {
  const frigateId = 'nortID'

  // create the route store
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueForce.roles[0].roleId, false, platformTypes,
    false, false, undefined, undefined, mapChannel)
  expect(store).toBeTruthy()

  // set the frigate as selected
  const store2 = routeSetCurrent(frigateId, store)

  // get the route representing the frigate
  const frigRoute = store2.selected
  expect(frigRoute).toBeTruthy()
  if (frigRoute) {
    // trim the route
    const store3: RouteStore = routeClearFromStep(store2, frigateId, 2)

    // get the modified frigate route
    const frigRoute2: Route | undefined = store3.selected
    if (frigRoute2) {
      // store the new route
      const newForces = storePlannedRoute(frigateId, frigRoute2.planned, forces)
      expect(newForces).toBeTruthy()

      // get the frigate, to check it
      const newFrigate = findAsset(newForces, frigateId)
      if (newFrigate) {
        const planned2 = newFrigate.plannedTurns
        // check the planned turns is now just one step
        expect(planned2 && planned2.length).toEqual(1)
      } else {
        expect(false).toBeTruthy()
      }
    } else {
      expect(false).toBeTruthy()
    }
  } else {
    expect(false).toBeTruthy()
  }
})
