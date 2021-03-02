import React from 'react'

// Import component files
import SettingOverview from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingOverview',
  component: SettingOverview,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = (args) => {
  const { overview } = WargameExportedMock.data

  const handleChange = (nextOverview: WargameOverview): void => {
    console.log(nextOverview)
  }
  const handleSave = (overview: WargameOverview): void => {
    console.log('Your save logic', overview)
  }
  const initiateWargame = (): void => {
    console.log('Initiating wargame')
  }
  return (
    // @ts-ignore it thinks we're missing wargame initiated, but storybook is providing that
    <SettingOverview
      overview={overview}
      onChange={handleChange}
      onSave={handleSave}
      initiateWargame={initiateWargame}
      {...args}
    />
  )
}

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  },
  args: {
    wargameInitiated: true
  }
}
