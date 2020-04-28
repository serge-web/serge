/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import CheckboxType from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<CheckboxType label="Visible to" options={['Red', 'Blue']}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});