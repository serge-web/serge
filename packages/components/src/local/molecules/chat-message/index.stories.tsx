import React from 'react'
import { Story } from '@storybook/react/types-6-0'

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
      description: 'Message sent from this player'
    },
    borderColor: {
      control: 'color'
    },
    timestamp: {
      control: 'date'
    }
  }
}

const Template: Story<ChatMessageProps> = (args) => {
  const { ...props } = args
  return <ChatMessage
    {...props} />
}

export const Demonstration = Template
Demonstration.args = {
  message: { content: 'Content of message' },
  details: {
    channel: 'game-admin',
    from: {
      force: 'White',
      forceColor: '#FCFBEE',
      role: 'Game Control',
      icon: 'default_img/umpireDefault.png'
    },
    messageType: 'State of The World',
    timestamp: '2020-09-18T05:41:17.349Z',
    privateMessage: 'Private weather message'
  },
  borderColor: '#fff',
  isUmpire: true,
  isOwner: true
}
