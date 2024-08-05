import React, { useState } from 'react'
// Import component files
import { MessageTemplatesMock, watuWargame } from 'src/mocks'

import { StoryFn } from '@storybook/react'
import SettingChannels from './index'
import docs from './README.md'
import { ChannelTypes } from './types/props'
import { ChannelMapping, CoreRenderer, EnumProperty, MappingPermissions, MilSymRenderer, NumberProperty, ParticipantMapping, StringProperty } from 'src/custom-types'
import { CHANNEL_MAPPING, PARTICIPANT_MAPPING, Phase } from 'src/config'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const wChannels = watuWargame.data.channels.channels
const wForces = watuWargame.data.forces.forces

const legacyChannel = {
  name: 'Legacy channel',
  uniqid: 'dummy-legacy'
}
const withLegacy = wChannels.concat(legacyChannel as any)

const importantProp: EnumProperty = {
  id: 'important',
  label: 'Important',
  type: 'EnumProperty', 
  description: 'Whether this relates to an important operation or interaction',
  choices: ['Yes', 'No'],
  playerEditable: true
}

const forceProp: EnumProperty = {
  id: 'force',
  label: 'Force',
  type: 'EnumProperty', 
  choices: ['f-red', 'f-blue', 'f-green'],
  playerEditable: false
}

const phaseProp: EnumProperty = {
  id: 'phase',
  label: 'Phase',
  description: 'The phase when this item was generated',
  type: 'EnumProperty', 
  choices: [Phase.Adjudication, Phase.Planning],
  playerEditable: false
}

const turnProp: NumberProperty = {
  id: 'turn',
  label: 'Turn',
  description: 'The turn when this item was generated',
  type: 'NumberProperty',
  playerEditable: false,
  format: '0'
}

const healthProp: NumberProperty = {
  id: 'health',
  label: 'Health',
  description: 'The health of this unit (0..100)',
  type: 'NumberProperty',
  playerEditable: true,
  format: '0'
}

const categoryProp: EnumProperty = {
  id: 'category',
  label: 'Category',
  type: 'EnumProperty', 
  choices: ['Infrastructure', 'Military', 'Civilian'],
  playerEditable: false
}

const sizeProp: EnumProperty = {
  id: 'size',
  label: 'Size',
  type: 'EnumProperty', 
  choices: ['S', 'M', 'L'],
  playerEditable: false
}

const ordersProp: StringProperty = {
  id: 'orders',
  label: 'Orders',
  description: 'Today\'s orders for this unit',
  lines: 3,
  type: 'StringProperty', 
  playerEditable: true
}

const baseProps = [forceProp, phaseProp, turnProp]

const coreRenderer: CoreRenderer = {
  id: 'core',
  type: 'CoreRenderer',
  baseProps,
  additionalProps: [importantProp]
}

const milSymRenderer: MilSymRenderer = {
  id: 'milSym',
  type: 'MilSymRenderer',
  baseProps,
  additionalProps: [categoryProp, sizeProp, healthProp, ordersProp]
}

const redParticipant: ParticipantMapping = {
  forceUniqid: 'f-red',
  roles: [],
  subscriptionId: 'aaaa',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Planning, Phase.Adjudication],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-red': [MappingPermissions.ViewSpatial, MappingPermissions.MoveResize, MappingPermissions.AddRemove, 
      MappingPermissions.ViewProps, MappingPermissions.EditOwnProps],
    'f-blue': [MappingPermissions.ViewSpatial] 
  } 
}

const bluePlanningParticipant: ParticipantMapping = {
  forceUniqid: 'f-blue',
  roles: ['blue-mtg-1'],
  subscriptionId: 'bbbb',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Planning],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-blue': [MappingPermissions.ViewSpatial, MappingPermissions.MoveResize, MappingPermissions.EditOwnProps],
    'f-red': [MappingPermissions.ViewSpatial] 
  } 
}   

const blueAdudicationParticipant: ParticipantMapping = {
  forceUniqid: 'f-blue',
  roles: ['blue-mtg-1'],
  subscriptionId: 'bbbb',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Adjudication],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-blue': [MappingPermissions.Exists, MappingPermissions.AddRemove, MappingPermissions.ViewProps],
    'f-red': [] 
  } 
}   

const umpireParticipant: ParticipantMapping = {
  forceUniqid: 'umpire',
  roles: ['umpire'],
  subscriptionId: 'casa',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Planning, Phase.Adjudication],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-blue': [MappingPermissions.AddRemove, MappingPermissions.ViewProps, MappingPermissions.EditAllProps, MappingPermissions.MoveResize, MappingPermissions.ViewSpatial],
    'f-red': [MappingPermissions.ViewSpatial, MappingPermissions.ViewProps, MappingPermissions.AddRemove] 
  } 
}   

const coreMapChannel: ChannelMapping = {
  uniqid: 'core',
  name: 'core mapping',
  channelType: CHANNEL_MAPPING,
  constraints: {
    bounds: [[1.1, 2.2], [3.3, 5.5]],
    minZoom: 3,
    tileLayer: {
      url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
      maxNativeZoom: 12
    }
  },
  participants: [
    redParticipant, bluePlanningParticipant, blueAdudicationParticipant, umpireParticipant
  ],
  renderers: [coreRenderer, milSymRenderer]
}

const withMapping = wChannels.concat(coreMapChannel as any)

export default {
  title: 'local/organisms/SettingChannels',
  component: SettingChannels,
  decorators: [wrapper],
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

const Template: StoryFn = (args) => {
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
    console.log(' => handleCreate: ')
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

export const WithLegacy = Template.bind({})
WithLegacy.args = {
  channels: withLegacy
}

export const WithMapping = Template.bind({})
WithMapping.args = {
  channels: withMapping
}
