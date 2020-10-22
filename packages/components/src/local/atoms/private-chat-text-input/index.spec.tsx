/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import PrivateChatTextInput from './index'

describe('PrivateChatTextInput component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PrivateChatTextInput />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
