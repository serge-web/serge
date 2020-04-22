/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MapBar from './index'

it('MapBar renders correctly', () => {
  const tree = renderer
    .create(<MapBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});