/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import WorldState from './index'
// import { RouteStore } from '@serge/custom-types'
// const store:RouteStore = {routes: []}
//  store={store}

it('WorldState renders correctly', () => {
  const tree = renderer
    .create(<WorldState name="test" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
