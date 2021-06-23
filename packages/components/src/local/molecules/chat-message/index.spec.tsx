/* global it expect */

import { ChatMessage as ChatMessageType } from '@serge/custom-types'
import React from 'react'
import renderer from 'react-test-renderer'
import { CHAT_MESSAGE } from '@serge/config'
import ChatMessage from './index'
import moment from 'moment-timezone'

const message: ChatMessageType = {
  messageType: CHAT_MESSAGE,
  message: { content: 'Content of message' },
  details: {
    channel: 'game-admin',
    from: {
      force: 'White',
      forceColor: '#FCFBEE',
      roleName: 'Game Control',
      roleId: 'r12345',
      icon: 'default_img/umpireDefault.png'
    },
    messageType: 'Chat',
    timestamp: '2020-09-18T05:41:17.349Z',
    privateMessage: 'Private weather message'
  },
  _id: '2020-09-18T05:41:17.349Z'
}

it('ChatMessage renders correctly', () => {
  moment.tz.setDefault('Etc/UTC')
  const tree = renderer
    .create(<ChatMessage message={message} isUmpire={true} isOwner={false} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
