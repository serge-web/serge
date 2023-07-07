/* global it expect */

import { ChatMessage as ChatMessageType } from 'src/custom-types'
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
      roleId: 'u2345',
      roleName: 'Game Control',
      iconURL: 'default_img/umpireDefault.png'
    },
    messageType: 'Chat',
    timestamp: '2020-09-18T05:41:17.349Z',
    privateMessage: 'Private weather message',
    turnNumber: 1
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
