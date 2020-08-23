import React from 'react'

// Import component files
import Tabs from './index'
import docs from './README.md'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { adminTabs } from '@serge/mocks'
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/tabs',
  component: Tabs,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onChange = (): void => {
  console.log('clicked')
}

export const Default: React.FC = () => <Tabs
  onChange={onChange}
  disabled={boolean('Disabled', false)}
  tabs={adminTabs} >Title</Tabs>

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
