/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RfiStatusBoard from './index'

it('RfiStatusBoard renders correctly', () => {
  const tree = renderer
    .create(<RfiStatusBoard name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});