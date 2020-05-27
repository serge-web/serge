/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import routeCreateStore from '../route-create-store'

import { RouteStore } from '@serge/custom-types'

it('can set selected route', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false, ['Green'])

  console.log('asset id', store.forces[1].routes[2].uniqid)

  expect(store.forces.length).toEqual(2)
})
