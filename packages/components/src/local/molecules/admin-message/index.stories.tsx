import React from 'react'

// Import component files
import AdminMessage from './index'
import docs from './README.md'
import { MessagesMock, forces } from '@serge/mocks'

export default {
  title: 'local/molecules/AdminMessage',
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
const [whiteForce, blueForce] = forces
const [, blueMessage] = MessagesMock

export const Default: React.FC = () => <AdminMessage force={whiteForce.name} message={blueMessage}/>
export const OwnMessage: React.FC = () => <AdminMessage force={blueForce.name} message={blueMessage}/>
