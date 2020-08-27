/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MapControl from './index'

it('MapControl renders correctly', () => {
  const tree = renderer
    .create(<MapControl filterPlannedRoutes={true}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
