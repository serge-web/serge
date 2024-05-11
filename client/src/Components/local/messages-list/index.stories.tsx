import React from 'react'

// Import component files
import MessagesList from './index'
import docs from './README.md'

import { AdminMessagesMock } from 'src/mocks'

export default {
  title: 'local/MessagesList',
  component: MessagesList,
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

export const Default: React.FC = () => <MessagesList userId="" messages={AdminMessagesMock} />
