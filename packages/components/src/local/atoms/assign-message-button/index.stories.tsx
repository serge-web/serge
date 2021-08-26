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

const clicked = (e: any) => {
  window.alert('clicked:' + e)
}

export const Default: React.FC = () => {
  return <AssignButtonMessage options={['Opt one', 'Opt two']} onClick={clicked} />
}

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}