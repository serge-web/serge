import React from 'react'

// Import component files
import MessagesList from './index'
import docs from './README.md'


export default {
  title: 'local/MessagesList',
  component: MessagesList,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <MessagesList />

