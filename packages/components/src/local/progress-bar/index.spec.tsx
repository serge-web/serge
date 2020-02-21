/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ProgressBar from './index'

it('ProgressBar renders correctly', () => {
  const tree = renderer
    .create(<ProgressBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});