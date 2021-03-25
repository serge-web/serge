/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import ChatMessageProps from '../../molecules/chat-message/types/props'

import ChatMessagesList from './index'

it('ChatMessagesList renders correctly', () => {
  it('renders component correctly', () => {
    const icons = [
      './images/default_img/forceDefault.png'
    ]
    const colors = [
      '#F00'
    ]
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages: ChatMessageProps[] = [{
      borderColor: '#ffffff',
      message: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T05:41:17.349Z',
      role: 'Game Control',
      privateMessage: 'Private message',
      isUmpire: true,
      isOwner: true,
    }]
    const tree = renderer
      .create(<ChatMessagesList messages={messages} colors={colors} icons={icons} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
});