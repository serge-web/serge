/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChatChannelMessage from './index'

describe('ChatChannelMessage component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChatChannelMessage />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
