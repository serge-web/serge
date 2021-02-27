/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import DataTable from './index'

it('DataTable renders correctly', () => {
  const tree = renderer
    .create(<DataTable name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});