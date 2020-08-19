/* global it expect */

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import routeCreateStore from '../route-create-store'
import routeDeclutter from '../route-declutter'

import { RouteStore } from '@serge/custom-types'

it('clear route from selected step', () => {
  const store: RouteStore = routeCreateStore(forces, 'Blue', false, platformTypes, undefined)

  const cleaned = routeDeclutter(store)
  
  // is now set
  expect(cleaned).toBeDefined
})
