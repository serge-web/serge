import React from 'react'

// Import component files
import AdminMessage from './index'
import docs from './README.md'
import { MessagesMock } from '@serge/mocks'

export default {
  title: 'local/AdminMessage',
  component: AdminMessage,
  decorators: [(story: Function) => (
    <div style={{ overflow: 'hidden' }}>{ story() }</div>
  )],
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

export const Default: React.FC = () => <AdminMessage message={MessagesMock[0]}/>
export const OwnMessage: React.FC = () => <AdminMessage message={MessagesMock[1]}/>
