import React from 'react'

// Import component files
import AdminMessagesList from './index'
import docs from './README.md'

import { MessagesMock } from '@serge/mocks'

export default {
  title: 'local/AdminMessagesList',
  component: AdminMessagesList,
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

export const Default: React.FC = () => <AdminMessagesList userId="" messages={MessagesMock} />
