import React from 'react'

// Import component files
import AdminMessagesList from './index'
import docs from './README.md'

import { AdminMessagesMock, forces } from '@serge/mocks'

export default {
  title: 'local/organisms/AdminMessagesList',
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

const [whiteForce] = forces
const markAllAsRead = (): void => window.alert('Callback on mark all as read')
export const Default: React.FC = () => <AdminMessagesList force={whiteForce} messages={AdminMessagesMock} markAllAsRead={markAllAsRead} />
