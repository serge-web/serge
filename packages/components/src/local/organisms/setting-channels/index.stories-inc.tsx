import React, { useState } from 'react'

// Import component files
import SettingChannels from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { ChannelTypes } from './types/props'
import { watuWargame, MessageTemplatesMock } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const channels = watuWargame.data.channels.channels
const forces = watuWargame.data.forces.forces

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
  if (channels === undefined) {
    return <div />
  }
  const [channelData, setChannelData] = useState<Array<ChannelTypes>>(channels)

  const handleChangeChannels = (updates: { channels: Array<ChannelTypes> }): void => {
    setChannelData(updates.channels)
  }

  const handleOnSave = (updates: ChannelTypes): void => {
    console.log(updates)
  }

  const handleCreate = (): void => {
    console.log('handleCreate...')
  }

  return <SettingChannels
    onCreate={handleCreate}
    onChange={handleChangeChannels}
    onSave={handleOnSave}
    channels={channelData}
    forces={forces}
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
