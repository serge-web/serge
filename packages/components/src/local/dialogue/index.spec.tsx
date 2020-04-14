/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Dialogue from './index'

it('Dialogue renders correctly', () => {
  const tree = renderer
    .create(<Dialogue type="test" headerText="test header"/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
