/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import HeartbeatChecker from './index'

it('HeartbeatChecker renders correctly', () => {
  const tree = renderer
    .create(<HeartbeatChecker enableHeartbeat />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
