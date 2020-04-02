/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MarkerName from './index'

it('MarkerName renders correctly', () => {
  const tree = renderer
    .create(<MarkerName name="test" colour="blue" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
