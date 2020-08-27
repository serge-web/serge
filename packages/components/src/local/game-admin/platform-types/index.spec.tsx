/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlatformTypes from './index'

it('platform-types renders correctly', () => {
  const tree = renderer
    .create(<PlatformTypes disabled={false}>Text</PlatformTypes>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
