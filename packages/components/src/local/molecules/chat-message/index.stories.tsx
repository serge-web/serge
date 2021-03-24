import { boolean } from '@storybook/addon-knobs'
import React from 'react'

// Import component files
import ChatMessage from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/ChatMessage',
  component: ChatMessage,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <ChatMessage
    message="This is a simple chat message."
    borderColor="#fff"
    role={'GAME CONTROL'}
    isOwner
  />
)
export const OtherUserMessage: React.FC = () => (
  <ChatMessage
    message="This is a simple chat message."
    borderColor="#fff"
    role={'GAME CONTROL'}
  />
)
export const PrivateMessage: React.FC = () => (
  <ChatMessage message="This is a simple chat message."
    borderColor="#fff"
    role={'GAME CONTROL'}
    privateMessage="Private weather message"
    isUmpire={boolean('Player from umpire force', true)}
    isOwner
  />
)
