/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessageCreator from './index'

it('MessageCreator renders correctly', () => {
  const tree = renderer
    .create(<MessageCreator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});