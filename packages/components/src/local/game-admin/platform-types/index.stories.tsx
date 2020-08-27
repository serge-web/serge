import React from 'react'

// Import component files
import PlatformTypes from './index'
import docs from './README.md'
import { withKnobs, boolean } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/PlatformTypes',
  component: PlatformTypes,
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

export const Default: React.FC = () => <PlatformTypes
  onClick={onClick}
  disabled={boolean('Disabled', false)} >Title</PlatformTypes>

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
