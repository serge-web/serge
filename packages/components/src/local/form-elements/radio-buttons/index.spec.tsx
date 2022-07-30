/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import RadioButtons from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<RadioButtons label="Visible to" options={['Red', 'Blue']} value={'Red'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Number data renders correctly', () => {
  const tree = renderer
    .create(<RadioButtons label="Visible to" options={[1, 2, 3]} value={'Red'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
