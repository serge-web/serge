/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Test from './index'

it('Test renders correctly', () => {
  const tree = renderer
    .create(<Test name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});