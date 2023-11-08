import React from 'react'

// Import component files
import Message from './index'
import docs from './README.md'
import { AdminMessagesMock } from 'src/mocks'

export default {
  title: 'local/Message',
  component: Message,
  decorators: [],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false
    },
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Message message={AdminMessagesMock[0]}/>
