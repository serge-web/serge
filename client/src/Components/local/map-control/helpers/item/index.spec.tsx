/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MapControlItem from './index'

it('MapControlItem renders correctly', () => {
  const tree = renderer
    .create(<MapControlItem/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
