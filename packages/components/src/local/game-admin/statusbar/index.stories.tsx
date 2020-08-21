import React from 'react'

// Import component files
import StatusBar from './index'
import docs from './README.md'
import { withKnobs, boolean } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/StatusBar',
  component: StatusBar,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onClick = (): void => {
  console.log('clicked')
}

export const Default: React.FC = () => <StatusBar
  onClick={onClick}
  disabled={boolean('Disabled', false)} >Title</StatusBar>

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
