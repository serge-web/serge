/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeSetCurrent from '../route-set-current'

import { RouteStore } from '@serge/custom-types'
import { Phase } from '@serge/config'

it('can set selected route', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Blue', platformTypes, false, false)

  const idOne = 'a0pra00003'
  const idTwo = 'a0pra000201'

  // nothing selected at start
  expect(store.selected).toEqual(undefined)

  // not set at start
  expect(store.routes[3].selected).toEqual(false)

  // select it
  const store2: RouteStore = routeSetCurrent(idOne, store)

  // is now set
  expect(store2.selected).toBeDefined()
  if (store2.selected) {
    expect(store2.selected.uniqid).toEqual(idOne)
  }
  expect(store2.routes[3].selected).toEqual(true)

  // select other
  const store3: RouteStore = routeSetCurrent(idTwo, store)

  // now unset
  if (store3.selected) {
    expect(store3.selected.uniqid).toEqual(idTwo)
  }
  expect(store3.routes[3].selected).toEqual(false)

  // first one again
  const store4: RouteStore = routeSetCurrent(idOne, store)

  // is now set
  expect(store4.selected).toBeDefined()
  if (store4.selected) {
    expect(store4.selected.uniqid).toEqual(idOne)
  }
  expect(store4.routes[3].selected).toEqual(true)

  // finally, clear selection
  const store5: RouteStore = routeSetCurrent('', store)

  // is now set
  expect(store5.selected).toBeUndefined()
  expect(store5.routes[3].selected).toEqual(false)
})
