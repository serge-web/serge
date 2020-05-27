/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameAdmin from './index'

it('GameAdmin renders correctly', () => {
  const tree = renderer
    .create(<GameAdmin />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});