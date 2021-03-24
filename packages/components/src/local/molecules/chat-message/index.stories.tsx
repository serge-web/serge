import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChatMessage from './index'
import docs from './README.md'
import ChatMessageProps from './types/props'

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
    },  
  },
  argTypes: {
    isUmpire: {
      description: 'Player from umpire force'
    },
    isOwner: {
      description: 'Message sent from this player'
    }
  }
}

const Template: Story<ChatMessageProps> = (args) => {
  const {  ...props } = args
  return <ChatMessage  
    borderColor="#fff"
    role={'GAME CONTROL'} {...props} />
}

export const Demonstration = Template
Demonstration.args = {
  message: "Content of message",
  privateMessage: "Private weather message"
}
