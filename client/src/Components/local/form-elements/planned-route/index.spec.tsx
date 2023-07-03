/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlannedRoute from './index'

const handleChange = (command: string): void => {
  window.alert('Firing command:' + command)
}

it('PlannedRoute renders correctly', () => {
  const tree = renderer
    .create(<PlannedRoute handleCommand={handleChange} name="plannedRouteStatus" isMobile={true} status="pending" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
