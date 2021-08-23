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
import { isIfStatement } from 'typescript'
import { CollaborativeMessageStates } from '../../../../config/build'

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
const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' }
const roleNotGC: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'not-game-control', roleName: 'Game Control' }
const roleNotUmpire: ForceRole = { forceId: 'red', forceName: 'Red', roleId: 'not-game-control', roleName: 'CO' }

const mostColabEditMockRaw = mostRecentOnly(messageDataCollaborativeEditing) as MessageCustom[]
const mostColabEditMock = mostColabEditMockRaw.map((message: MessageCustom): MessageCustom => {
  const collab = message.details.collaboration
  if (collab) {
    if (collab.status === CollaborativeMessageStates.EditDocument ||
      collab.status === CollaborativeMessageStates.EditResponse) {
      // make the sample user the owner of this doc
      collab.owner = role
    }
  }
  return message
})

const mostColabResponseMockRaw = mostRecentOnly(messageDataCollaborativeResponding) as MessageCustom[]
const mostColabResponseMock = mostColabResponseMockRaw.map((message: MessageCustom): MessageCustom => {
  const collab = message.details.collaboration
  if (collab) {
    if (collab.status === CollaborativeMessageStates.EditDocument ||
      collab.status === CollaborativeMessageStates.EditResponse) {
      // make the sample user the owner of this doc
      collab.owner = role
    }
  }
  return message
})

export const CollabEditEditing = Template.bind({})
CollabEditEditing.args = {
  roles: roles,
  channel: channelDataCollaborativeEditing,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role
}
export const CollabEditParticipantOwner = Template.bind({})
CollabEditParticipantOwner.args = {
  roles: roles,
  channel: channelDataCollaborativeEditingCollaborationParticipant,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role
}
export const CollabEditParticipantNotOwner = Template.bind({})
CollabEditParticipantNotOwner.args = {
  roles: roles,
  channel: channelDataCollaborativeEditingCollaborationParticipant,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: roleNotGC
}
export const CollabEditReleaseManager = Template.bind({})
CollabEditReleaseManager.args = {
  roles: roles,
  channel: channelDataColabEditCollaborativeReleaseManager,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role
}
export const CollabEditNotUmpire = Template.bind({})
CollabEditNotUmpire.args = {
  roles: roles,
  channel: channelDataColabEditCollaborativeReleaseManager,
  rfiMessages: mostColabEditMock,
  isUmpire: false,
  role: roleNotUmpire
}

export const CollaborativeResponding = Template.bind({})
CollaborativeResponding.args = {
  roles: roles,
  channel: channelDataCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role
}
export const CollabResponseParticipantOwner = Template.bind({})
CollabResponseParticipantOwner.args = {
  roles: roles,
  channel: channelDataCollaborativeRespondingCollaborationParticipant,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role
}
export const CollabResponseParticipantNotOwner = Template.bind({})
CollabResponseParticipantNotOwner.args = {
  roles: roles,
  channel: channelDataCollaborativeRespondingCollaborationParticipant,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: roleNotGC
}

export const CollabResponseReleaseManager = Template.bind({})
CollabResponseReleaseManager.args = {
  roles: roles,
  channel: channelDataCollaborativeRespondingReleaseManager,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role
}

export const CollabResponseNotUmpire = Template.bind({})
CollabResponseNotUmpire.args = {
  roles: roles,
  channel: channelDataCollaborativeRespondingReleaseManager,
  rfiMessages: mostColabResponseMock,
  isUmpire: false,
  role: roleNotUmpire
}
