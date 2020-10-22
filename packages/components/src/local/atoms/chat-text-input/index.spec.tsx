/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatTextInput from './index'

it('ChatTextInput renders correctly', () => {
  const tree = renderer
    .create(<ChatTextInput value={5}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
