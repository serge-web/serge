import React from 'react'

// Import component files
import Tabs from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { adminTabs } from 'src/mocks'
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/Tabs',
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
  tabs={adminTabs} >Title</Tabs>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
