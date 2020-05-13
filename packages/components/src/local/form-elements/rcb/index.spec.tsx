/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RCB from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<RCB type="checkbox" label="Visible to" options={['Red', 'Blue']} value={["Red"]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('RadioType renders correctly', () => {
  const tree = renderer
    .create(<RCB type="radio" label="Visible to" options={['Red', 'Blue']} value={"Red"} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
