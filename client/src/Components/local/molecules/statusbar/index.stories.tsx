import React from 'react'

// Import component files
import StatusBar from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { WargameMock as wargame } from 'src/mocks'

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

const onSave = (update: string): void => {
  console.log(update)
}

export const Default: React.FC = () => <StatusBar wargame={wargame} onChange={onChange} onSave={onSave} />
export const Initiated: React.FC = () => <StatusBar wargame={{ ...wargame, wargameInitiated: true }} onChange={onChange} onSave={onSave} />

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
