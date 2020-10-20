/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import TextEntryField from './index'

it('TextEntryField renders correctly', () => {
  const tree = renderer
    .create(<TextEntryField label="Turns" value={5}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
