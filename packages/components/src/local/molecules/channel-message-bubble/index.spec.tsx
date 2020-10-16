/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessageBubble from "./index";

describe('ChannelMessageBubble component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessageBubble
          title="lorem ipsum do lor sit amet"
          timestamp="2020-09-18T05:41:17.349Z"
          role="CO"
          messageType="Chat"
          hasBeenRead={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})
