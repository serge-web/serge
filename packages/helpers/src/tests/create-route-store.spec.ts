/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import createRouteStore from '../create-route-store'

import { RouteStore } from '@serge/custom-types'

it('can create route', () => {
  const store: RouteStore = createRouteStore(forces)
  expect(store.data.length).toEqual(2)
})
