/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChatMessageBubble from './index'
import { forces } from '@serge/mocks'
import { forceColors } from '@serge/helpers'

const [whiteForce] = forces

const forceColorList = forceColors(forces)

describe('ChatMessageBubble component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChatMessageBubble
          title="lorem ipsum do lor sit amet"
          timestamp="2020-09-18T05:41:17.349Z"
          role="CO"
          hasBeenRead={false}
          authorForceId={whiteForce.name}
          playerForceId={whiteForce.name}
          forceColors={forceColorList}
          privateMessage={'This is an example of a private message.'}
          isUmpire={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
