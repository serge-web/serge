import React from 'react'

// Import component files
import MessageCreator from './index'
import docs from './README.md'


export default {
  title: 'local/MessageCreator',
  component: MessageCreator,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <MessageCreator />

