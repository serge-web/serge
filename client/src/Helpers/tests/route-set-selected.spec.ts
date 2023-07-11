/* global it expect */

/* Import mock data */
import { watuWargame } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeSetCurrent from '../route-set-current'

import { Phase } from 'src/config'
import { ChannelMapping, RouteStore } from 'src/custom-types'
import deepCopy from '../deep-copy'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const blueForce = forces[1]
const blueCo = blueForce.roles[0]
const showSteps = false

it('can set selected route', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, blueForce.uniqid, blueCo.roleId, false, platformTypes, showSteps, showSteps, undefined, undefined, mappingChan)

  const idOne = blueForce.assets ? blueForce.assets[2].uniqid : 'aa'
  const idTwo = blueForce.assets ? blueForce.assets[1].uniqid : 'bb'

  // nothing selected at start
  expect(store.selected).toEqual(undefined)

  // not set at start
  expect(store.routes[0].selected).toEqual(false)

  // select it
  const store2: RouteStore = routeSetCurrent(idOne, store)

  // is now set
  expect(store2.selected).toBeDefined()
  if (store2.selected) {
    expect(store2.selected.uniqid).toEqual(idOne)
  }
  expect(store2.routes[2].selected).toEqual(true)

  // select other
  const store3: RouteStore = routeSetCurrent(idTwo, store)

  // now unset
  if (store3.selected) {
    expect(store3.selected.uniqid).toEqual(idTwo)
  }
  expect(store3.routes[2].selected).toEqual(false)

  // first one again
  const store4: RouteStore = routeSetCurrent(idOne, store)

  // is now set
  expect(store4.selected).toBeDefined()
  if (store4.selected) {
    expect(store4.selected.uniqid).toEqual(idOne)
  }
  expect(store4.routes[2].selected).toEqual(true)

  // finally, clear selection
  const store5: RouteStore = routeSetCurrent('', store)

  // is now set
  expect(store5.selected).toBeUndefined()
  expect(store5.routes[2].selected).toEqual(false)
})
