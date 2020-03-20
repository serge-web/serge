/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import OrdersPanelContent from './index'

it('OrdersPanelContent renders correctly', () => {
  const tree = renderer
    .create(<OrdersPanelContent name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});