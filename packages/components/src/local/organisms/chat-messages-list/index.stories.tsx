import React, { useState } from 'react'

// Import component files
import ChatMessagesList from './index'
import docs from './README.md'


export default {
  title: 'local/organisms/ChatMessagesList',
  component: ChatMessagesList,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const icons = [
    './images/default_img/forceDefault.png'
  ]
  const colors = [
    '#0F0'
  ]
  const [isRead, setIsRead] = useState([true, false])
  const messages = [
    {
      _id: '1',
      borderColor: '#ffffff',
      message: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T06:41:17.349Z',
      role: 'Game Control',
      privateMessage: 'Private message',
      isUmpire: true,
      isOwner: true,
    }, {
      _id: '2',
      borderColor: '#3dd0ffB3',
      message: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T07:41:17.349Z',
      role: 'CO',
      isUmpire: false,
      isOwner: false,
    }, {
      _id: '3',
      borderColor: '#ffffff',
      message: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T08:41:17.349Z',
      role: 'Game Control',
      isUmpire: false,
      isOwner: true,
    },
    {
      _id: '4',
      borderColor: '#3dd0ffB3',
      message: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T09:41:17.349Z',
      role: 'CO',
      isUmpire: false,
      isOwner: false,
    },
    {
      _id: '5',
      borderColor: '#ff0000B3',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      timestamp: '2020-09-18T10:42:17.349Z',
      role: 'MEDIA',
      isUmpire: false,
      isOwner: false,
    }].map((message, id) => {
      return { ...message, hasBeenRead: isRead[id] }
    })
  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }
  return <ChatMessagesList
    messages={messages}
    icons={icons}
    colors={colors}
    onMarkAllAsRead={markAllAsRead}
  />
}

