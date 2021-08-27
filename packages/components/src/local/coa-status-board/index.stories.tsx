import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CoaStatusBoard from './index'
import docs from './README.md'

import { MessageCustom } from '@serge/custom-types'
import Props from './types/props'
import { mostRecentOnly } from '@serge/helpers'
import {
  channelCollaborativeEditing,
  channelCollaborativeResponding,
  MessageTemplatesMock,
  forces,
  blueCollaborator,
  blueReleaseManager,
  whiteCollaborator,
  exconCollaborator,
  whiteReleaseMgr,
  blueAuthor,
  messageDataCollaborativeResponding,
  messageDataCollaborativeEditing
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

const mostColabEditMockRaw = mostRecentOnly(messageDataCollaborativeEditing) as MessageCustom[]
const mostColabEditMock = mostColabEditMockRaw.map((message: MessageCustom): MessageCustom => {
  const collab = message.details.collaboration
  if (collab) {
    if (collab.status === CollaborativeMessageStates.EditDocument ||
      collab.status === CollaborativeMessageStates.EditResponse) {
      // make the sample user the owner of this doc
      collab.owner = blueCollaborator
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
      collab.owner = exconCollaborator
    }
  }
  return message
})

export const CollaborativeEditEditor = Template.bind({})
CollaborativeEditEditor.args = {
  channel: channelCollaborativeEditing,
  rfiMessages: mostColabEditMock,
  isUmpire: false,
  role: blueCollaborator,
  templates: MessageTemplatesMock
}

export const CollaborativeEditReleaseManager = Template.bind({})
CollaborativeEditReleaseManager.args = {
  channel: channelCollaborativeEditing,
  rfiMessages: mostColabEditMock,
  isUmpire: false,
  role: blueReleaseManager,
  templates: MessageTemplatesMock
}

export const CollaborativeResponseSubmit = Template.bind({})
CollaborativeResponseSubmit.args = {
  channel: channelCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: blueAuthor,
  templates: MessageTemplatesMock
}

export const CollaborativeResponseParticipateWhite = Template.bind({})
CollaborativeResponseParticipateWhite.args = {
  channel: channelCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: whiteCollaborator,
  templates: MessageTemplatesMock
}


export const CollaborativeResponseParticipateExcon = Template.bind({})
CollaborativeResponseParticipateExcon.args = {
  channel: channelCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: exconCollaborator,
  templates: MessageTemplatesMock
}

export const CollaborativeResponseRelease = Template.bind({})
CollaborativeResponseRelease.args = {
  channel: channelCollaborativeResponding,
  rfiMessages: mostColabResponseMock,
  isUmpire: true,
  role: whiteReleaseMgr,
  templates: MessageTemplatesMock
}
