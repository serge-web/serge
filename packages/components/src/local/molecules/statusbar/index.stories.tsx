import React from 'react'

// Import component files
import StatusBar from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { WargameMock as wargame } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/StatusBar',
  component: StatusBar,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onChange = (newVal: string): void => {
  console.log('changed', newVal)
}

export const Default: React.FC = () => <StatusBar wargame={wargame} onChange={onChange} />
export const Initiated: React.FC = () => <StatusBar wargame={{ ...wargame, wargameInitiated: true }} onChange={onChange} />

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
