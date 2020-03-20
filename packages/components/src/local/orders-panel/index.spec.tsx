/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import OrdersPanel from './index'

it('OrdersPanel renders correctly', () => {
  const tree = renderer
    .create(<OrdersPanel name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});