/* global it expect */

import { CHAT_MESSAGE } from '@serge/config'
import React from 'react'
import renderer from 'react-test-renderer'
import { Props as ChatMessageProps } from '../../molecules/chat-message/types/props'

import ChatMessagesList from './index'

describe('ChatMessagesList renders correctly', () => {
  it('renders component correctly', () => {
    const icons = [
      './images/default_img/forceDefault.png'
    ]
    const colors = [
      '#F00'
    ]
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages: ChatMessageProps[] = [{
      messageType: CHAT_MESSAGE,
      message: { content: 'Content of message' },
      details: {
        channel: 'game-admin',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          role: 'Game Control',
          icon: 'default_img/umpireDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2020-09-18T05:41:17.349Z',
        privateMessage: 'Private weather message'
      },
      role: 'GAME CONTROL',
      borderColor: '#fff',
      isUmpire: true,
      isOwner: true,
      _id: '2020-09-18T05:41:17.349Z'
    }]
    const tree = renderer
      .create(<ChatMessagesList messages={messages} colors={colors} icons={icons} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
