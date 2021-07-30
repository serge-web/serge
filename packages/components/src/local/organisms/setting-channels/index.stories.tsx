import React, { useState } from 'react'

// Import component files
import SettingChannels from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { ChannelData } from './types/props'
import { WargameExportedMock, MessageTemplatesMock } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingChannels',
  component: SettingChannels,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  // the channels child element may theoretically be undefined, we
  // make the compiler happy
  if (WargameExportedMock.data.channels.channels === undefined) {
    return <div/>
  }
  const [channels, setChannels] = useState<Array<ChannelData>>(WargameExportedMock.data.channels.channels)

  const handleChangeChannels = (updates: { channels: Array<ChannelData> }): void => {
    setChannels(updates.channels)
  }

  const handleOnSave = (updates: ChannelData): void => {
    console.log(updates)
  }

  return <SettingChannels
    onChange={handleChangeChannels}
    onSave={handleOnSave}
    channels={channels}
    forces={WargameExportedMock.data.forces.forces}
    messageTemplates={MessageTemplatesMock}
  />
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
