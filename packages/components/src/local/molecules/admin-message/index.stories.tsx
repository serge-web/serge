import React from 'react'

// Import component files
import AdminMessage from './index'
import docs from './README.md'
import { AdminMessagesMock, forces } from '@serge/mocks'

export default {
  title: 'local/molecules/AdminMessage',
  component: AdminMessage,
  decorators: [(story: VoidFunction): React.ReactElement => (
    <div style={{ overflow: 'hidden' }}>{story()}</div>
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
const [, blueMessage] = AdminMessagesMock

export const Default: React.FC = () => <AdminMessage force={whiteForce.name} message={blueMessage} />
export const OwnMessage: React.FC = () => <AdminMessage force={blueForce.name} message={blueMessage} />
