import React from 'react'

// Import component files
import ChatMessageSetup from './index'
import docs from './README.md'

import { ChatMessagesMock } from '@serge/mocks'

export default {
  title: 'local/templates/ChatMessageSetup',
  component: ChatMessageSetup,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

export const Default: React.FC = () => <ChatMessageSetup chatChannel={ChatMessagesMock} selectedForce={force} selectedRole="Game Control" />

