/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import TextInput from './index'

it('TextInput renders correctly', () => {
  const tree = renderer
    .create(<TextInput label="Turns" value={5}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
