/* global it expect */

import { CHAT_MESSAGE } from '@serge/config'
import { ChatMessage as ChatMessageProps } from '@serge/custom-types'
import React from 'react'
import renderer from 'react-test-renderer'

import ChatMessage from './index'

const props: ChatMessageProps = {
  messageType: CHAT_MESSAGE,
  message: { content: 'Content of message' },
  details: {
    channel: "game-admin",
    from: {
      force: "White",
      forceColor: "#FCFBEE",
      role: "Game Control",
      icon: "default_img/umpireDefault.png",
    },
    messageType: "Chat",
    timestamp: "2020-09-18T05:41:17.349Z",
    privateMessage: 'Private weather message',
  },
  role: 'GAME CONTROL',
  borderColor: '#fff',
  isUmpire: true,
  isOwner: false,
  _id: "2020-09-18T05:41:17.349Z"
}

it('ChatMessage renders correctly', () => {
  const tree = renderer
    .create(<ChatMessage {...props} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
