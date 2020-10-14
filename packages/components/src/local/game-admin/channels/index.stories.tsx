import React, { useState } from 'react'

// Import component files
import Channels from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { ChannelData } from './types/props'
import { WargameExportedMock, MessageTemplatesMock } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/Channels',
  component: Channels,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [channels, setChannels] = useState<Array<ChannelData>>(WargameExportedMock.data.channels.channels)

  const handleChangeChannels = (nextChannels: Array<ChannelData>): void => {
    setChannels(nextChannels)
  }

  return <Channels
    onChange={handleChangeChannels}
    channels={channels}
    forces={WargameExportedMock.data.forces.forces}
    messages={MessageTemplatesMock}
  />
}

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
