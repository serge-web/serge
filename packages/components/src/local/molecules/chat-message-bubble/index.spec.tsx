/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChatMessageBubble from './index'

describe('ChatMessageBubble component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChatMessageBubble
          title="lorem ipsum do lor sit amet"
          timestamp="2020-09-18T05:41:17.349Z"
          role="CO"
          messageType="Chat"
          hasBeenRead={false}
          borderColor="#3dd0ffB3"
          isSent={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})
