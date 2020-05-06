/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RCB from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<RCB type="checkbox" label="Visible to" options={['Red', 'Blue']}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
