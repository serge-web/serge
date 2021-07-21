/* global it expect */

import { CHAT_MESSAGE } from '@serge/config'
import React from 'react'
import renderer from 'react-test-renderer'
import { ChatMessage } from '@serge/custom-types'

import ChatMessagesList from './index'
import moment from 'moment-timezone'

describe('ChatMessagesList renders correctly', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const icons = [
      './images/default_img/forceDefault.png'
    ]
    const colors = [
      '#F00'
    ]
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages: ChatMessage[] = [{
      messageType: CHAT_MESSAGE,
      message: { content: 'Content of message' },
      details: {
        channel: 'game-admin',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          role: 'Game Control',
          iconURL: 'default_img/umpireDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2020-09-18T05:41:17.349Z',
        privateMessage: 'Private weather message'
      },
      _id: '2020-09-18T05:41:17.349Z'
    }]
    const tree = renderer
      .create(<ChatMessagesList userId='id' isUmpire={true} playerForce={'Blue'} messages={messages} colors={colors} icons={icons} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
