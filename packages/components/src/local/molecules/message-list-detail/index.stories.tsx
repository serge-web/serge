import React from 'react'

// Import component files
import MessageListDetail from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/MessageListDetail',
  component: MessageListDetail,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <MessageListDetail name="test" colour="green"/>

