import React from 'react'

import { ChatMessagesMock } from '@serge/mocks'

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
  return <ChatMessagesList
    messages={ChatMessagesMock}
    icons={icons}
    colors={colors}
  />
}
