import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { CHAT_MESSAGE } from 'src/config'

// Import component files
import ChatMessage from './index'
import docs from './README.md'
import { Props as ChatMessageProps } from './types/props'

export default {
  title: 'local/molecules/ChatMessage',
  component: ChatMessage,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    isUmpire: {
      description: 'Player from umpire force'
    },
    isOwner: {
      description: 'Message sent from force of this player'
    },
    borderColor: {
      control: 'color'
    }
  }
}

const Template: Story<ChatMessageProps> = (args) => {
  const { message, isOwner, isUmpire } = args
  return <ChatMessage message={message} isUmpire={isUmpire} isOwner={isOwner}/>
}

export const Demonstration = Template
Demonstration.args = {
  message: {
    messageType: CHAT_MESSAGE,
    message: { content: 'Content of message' },
    details: {
      channel: 'game-admin',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        roleName: 'Game Control',
        roleId: 'i3453',
        iconURL: 'default_img/umpireDefault.png'
      },
      timestamp: '2020-09-18T05:41:17.349Z',
      privateMessage: 'Private weather message',
      turnNumber: 1
    },
    _id: 'id_34'
  },
  isUmpire: true,
  isOwner: true
}
