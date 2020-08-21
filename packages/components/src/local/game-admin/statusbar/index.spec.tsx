/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import StatusBar from './index'

it('StatusBar renders correctly', () => {
  const tree = renderer
    .create(<StatusBar disabled={false}>Text</StatusBar>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
