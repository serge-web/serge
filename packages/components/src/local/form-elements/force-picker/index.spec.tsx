/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ForcePicker from './index'

import forces from './mocks/forces'

import { getSelectedItem } from '@serge/helpers'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<ForcePicker label="Visible to" options={forces} selected={getSelectedItem(forces).name} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
