/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Selector from './index'

const options = ['item1', 'item2', 'item3']

it('Selector renders correctly', () => {
  const tree = renderer
    .create(<Selector name="test" label="test" options={options} selected="item2" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
