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
  messageDataCollaborativeResponding,
  MessageTemplatesMockByKey,
  forces
} from '@serge/mocks'
import { CollaborativeMessageStates } from '@serge/config'

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

const Template: Story<Props> = (args) => {
  const [messages, setMessages] = useState(args.rfiMessages)

  const onChange = (nextMessages: MessageCustom[]): void => {
    setMessages(nextMessages)
  }
  return <CoaStatusBoard {...args} forces={forces} rfiMessages={messages} onChange={onChange} />
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
  channel: channelDataCollaborativeEditing,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role,
  templates: MessageTemplatesMockByKey
}
export const CollabEditParticipantOwner = Template.bind({})
CollabEditParticipantOwner.args = {
  channel: channelDataCollaborativeEditingCollaborationParticipant,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role,
  templates: MessageTemplatesMockByKey
}
export const CollabEditParticipantNotOwner = Template.bind({})
CollabEditParticipantNotOwner.args = {
  channel: channelDataCollaborativeEditingCollaborationParticipant,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: roleNotGC,
  templates: MessageTemplatesMockByKey
}
export const CollabEditReleaseManager = Template.bind({})
CollabEditReleaseManager.args = {
  channel: channelDataColabEditCollaborativeReleaseManager,
  rfiMessages: mostColabEditMock,
  isUmpire: true,
  role: role,
  templates: MessageTemplatesMockByKey
}
export const CollabEditNotUmpire = Template.bind({})
CollabEditNotUmpire.args = {
  channel: channelDataColabEditCollaborativeReleaseManager,
  rfiMessages: mostColabEditMock,
  isUmpire: false,
  role: roleNotUmpire,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponding = Template.bind({})
CollaborativeResponding.args = {
  channel: channelDataCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role,
  templates: MessageTemplatesMockByKey
}
export const CollabResponseParticipantOwner = Template.bind({})
CollabResponseParticipantOwner.args = {
  channel: channelDataCollaborativeRespondingCollaborationParticipant,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role,
  templates: MessageTemplatesMockByKey
}
export const CollabResponseParticipantNotOwner = Template.bind({})
CollabResponseParticipantNotOwner.args = {
  channel: channelDataCollaborativeRespondingCollaborationParticipant,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: roleNotGC,
  templates: MessageTemplatesMockByKey
}

export const CollabResponseReleaseManager = Template.bind({})
CollabResponseReleaseManager.args = {
  channel: channelDataCollaborativeRespondingReleaseManager,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: role,
  templates: MessageTemplatesMockByKey
}

export const CollabResponseNotUmpire = Template.bind({})
CollabResponseNotUmpire.args = {
  channel: channelDataCollaborativeRespondingReleaseManager,
  rfiMessages: mostColabResponseMock,
  isUmpire: false,
  role: roleNotUmpire,
  templates: MessageTemplatesMockByKey
}
