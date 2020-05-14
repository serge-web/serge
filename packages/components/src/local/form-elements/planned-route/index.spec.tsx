/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlannedRoute from './index'

it('PlannedRoute renders correctly', () => {
  const tree = renderer
    .create(<PlannedRoute name="plannedRouteStatus" status="pending" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
