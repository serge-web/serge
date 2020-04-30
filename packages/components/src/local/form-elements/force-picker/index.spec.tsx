/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ForcePicker from './index'

import forces from './mocks/forces'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<ForcePicker label="Visible to" options={forces}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
