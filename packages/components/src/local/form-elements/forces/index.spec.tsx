/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import Forces from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<Forces label="Visible to" options={[{ name: 'Blue', colour: '#0000ff' }, { name: 'Red', colour: '#c70039' }]} value={['Blue']} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
