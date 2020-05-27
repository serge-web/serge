/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeSetCurrent from '../route-set-current'

import { RouteStore } from '@serge/custom-types'

it('can set selected route', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false, ['Green'])

  const idOne = 'a0pra000202'
  const idTwo = 'a0pra000201'

  // not set at start
  expect(store.forces[1].routes[2].selected).toEqual(false)

  // select it
  const store2: RouteStore = routeSetCurrent(idOne, store)

  // is now set
  expect(store2.forces[1].routes[2].selected).toEqual(true)

  // select other
  const store3: RouteStore = routeSetCurrent(idTwo, store)

  // now unset
  expect(store3.forces[1].routes[2].selected).toEqual(false)
})
