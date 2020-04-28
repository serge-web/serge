/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RadioType from './index'

it('RadioType renders correctly', () => {
  const tree = renderer
    .create(<RadioType label="States" options={['Fishing', 'Moored', 'Transiting']}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});