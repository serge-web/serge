import React, { useState } from 'react'

// Import component files
import { ChannelPlanning } from 'src/custom-types'
import { MessageTemplatesMock, watuWargame } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import SettingChannels from './index'
import docs from './README.md'
import { ChannelTypes } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const wChannels = watuWargame.data.channels.channels
const wForces = watuWargame.data.forces.forces

const planningChannel: ChannelPlanning = {
  name: 'Blue Planning',
  channelType: 'ChannelPlanning',
  uniqid: 'dummy-planning',
  constraints: {
    bounds: [
      [
        55,
        22
      ],
      [
        2,
        86
      ]
    ],
    maxZoom: 7,
    minZoom: 3,
    tileLayer: {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxNativeZoom: 7,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  participants: [
    {
      forceUniqid: 'F-Blue',
      pType: 'ParticipantPlanning',
      roles: [],
      subscriptionId: 'huk3qr',
      templates: [
        {
          _id: 'k16e-maritime',
          title: 'Maritime Activity'
        },
        {
          title: 'Land Activity',
          _id: 'k16e-land'
        },
        {
          title: 'Air Activity',
          _id: 'k16e-air'
        },
        {
          title: 'Other Activity',
          _id: 'k16e-other'
        }
      ]
    }
  ]
}
const withPlanning = wChannels.concat(planningChannel)

const legacyChannel = {
  name: 'Legacy channel',
  uniqid: 'dummy-legacy'
}
const withLegacy = wChannels.concat(legacyChannel as any as ChannelPlanning)

export default {
  title: 'local/organisms/SettingChannels',
  component: SettingChannels,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

const Template: Story = (args) => {
  // the channels child element may theoretically be undefined, we
  // make the compiler happy
  if (args.channels === undefined) {
    return <div />
  }
  const [localChannels, setLocalChannels] = useState<ChannelTypes[]>(args.channels)
  const [selectedChannel, setSelectedChannel] = useState<ChannelTypes>(args.channels[0])

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
    forces={wForces}
    messageTemplates={MessageTemplatesMock}
    selectedChannel={selectedChannel}
  />
}

export const Default = Template.bind({})
Default.args = {
  channels: wChannels
}

export const WithPlanning = Template.bind({})
WithPlanning.args = {
  channels: withPlanning
}

export const WithLegacy = Template.bind({})
WithLegacy.args = {
  channels: withLegacy
}
