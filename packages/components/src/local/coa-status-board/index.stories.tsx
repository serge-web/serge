import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CoaStatusBoard from './index'
import docs from './README.md'

import { MessageCustom, ForceRole } from '@serge/custom-types'
import Props from './types/props'
import { mostRecentOnly } from '@serge/helpers'
import {
  channelDataCollaborativeEditing,
  channelDataCollaborativeEditingCollaborationParticipant,
  channelDataColabEditCollaborativeReleaseManager,
  channelDataCollaborativeResponding,
  channelDataCollaborativeRespondingCollaborationParticipant,
  channelDataCollaborativeRespondingReleaseManager,
  messageDataCollaborativeEditing,
  messageDataCollaborativeResponding
} from '@serge/mocks'

export default {
  title: 'local/CoaStatusBoard',
  component: CoaStatusBoard,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    roles: {
      description: 'Player Roles'
    },
    channels: {
      description: 'All channels of selected player'
    },
    rfiMessages: {
      description: 'RFI message form all RFI channels'
    }
  }
}

const roles = [
  'Game Control',
  'Logistics',
  'Air',
  'Land'
]

const Template: Story<Props> = (args) => {
  const [messages, setMessages] = useState(args.rfiMessages)

  const onChange = (nextMessages: MessageCustom[]): void => {
    setMessages(nextMessages)
  }
  return <CoaStatusBoard {...args} rfiMessages={messages} onChange={onChange} />
}

// filter to only show the most recent versions of messages
const mostColabEditMock = mostRecentOnly(messageDataCollaborativeEditing) as MessageCustom[]
const mostColabResponseMock = mostRecentOnly(messageDataCollaborativeResponding) as MessageCustom[]
const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' }

export const CollaborativeEditing = Template.bind({})
CollaborativeEditing.args = {
  roles: roles,
  channel: channelDataCollaborativeEditing,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role
}
export const CECollaborationParticipant = Template.bind({})
CECollaborationParticipant.args = {
  roles: roles,
  channel: channelDataCollaborativeEditingCollaborationParticipant,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role
}
export const CEReleaseManager = Template.bind({})
CEReleaseManager.args = {
  roles: roles,
  channel: channelDataColabEditCollaborativeReleaseManager,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role
}

export const CollaborativeResponding = Template.bind({})
CollaborativeResponding.args = {
  roles: roles,
  channel: channelDataCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role
}
export const CRCollaborationParticipant = Template.bind({})
CRCollaborationParticipant.args = {
  roles: roles,
  channel: channelDataCollaborativeRespondingCollaborationParticipant,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role
}
export const CRReleaseManager = Template.bind({})
CRReleaseManager.args = {
  roles: roles,
  channel: channelDataCollaborativeRespondingReleaseManager,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role
}
