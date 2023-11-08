import React from 'react'

// Import component files
import MessageLabel from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/MessageLabel',
  component: MessageLabel,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <MessageLabel label="Default" />
