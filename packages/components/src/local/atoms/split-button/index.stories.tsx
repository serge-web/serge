import React from 'react'
import AssignButtonMessage from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/DropdownList',
  component: AssignButtonMessage,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
