import React, { useState } from 'react'

// Import component files
import { MessageTemplatesMock, watuWargame } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import SettingChannels from './index'
import docs from './README.md'
import { ChannelTypes } from './types/props'

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
  const [localChannels, setLocalChannels] = useState<ChannelTypes[]>(channels)
  const [selectedChannel, setSelectedChannel] = useState<ChannelTypes>(channels[0])

  const handleChangeChannels = (updates: { channels: Array<ChannelTypes>, selectedChannel: ChannelTypes }): void => {
    console.log('handleChangeChannels: ', updates)
    const savedChannelIdx = localChannels.findIndex(c => c.uniqid === updates.selectedChannel.uniqid)
    if (savedChannelIdx !== -1) {
      localChannels[savedChannelIdx] = updates.selectedChannel
      setLocalChannels(localChannels)
    }
  }

  const handleOnSave = (updates: ChannelTypes): void => {
    console.log('handleOnSave: ', updates)
  }

  const onSidebarClick = (channel: ChannelTypes): void => {
    console.log('onSidebarClick: ', channel)
    setSelectedChannel(channel)
  }

  const handleCreate = (): void => {
    console.log('=> handleCreate: ')
  }

  return <SettingChannels
    onCreate={handleCreate}
    onChange={handleChangeChannels}
    onSave={handleOnSave}
    onSidebarClick={onSidebarClick}
    channels={localChannels}
    forces={forces}
    messageTemplates={MessageTemplatesMock}
    selectedChannel={selectedChannel}
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
