/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MappingGridLayer from './index'

it('MappingGridLayer renders correctly', () => {
  const tree = renderer
    .create(<MappingGridLayer name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});