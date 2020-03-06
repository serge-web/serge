/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MarkerNameForm from './index'

it('MarkerNameForm renders correctly', () => {
  const tree = renderer
    .create(<MarkerNameForm name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});