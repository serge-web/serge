import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CoaStatusBoard from './index'
import docs from './README.md'

import { MessageCustom } from '@serge/custom-types'
import { mostRecentOnly } from '@serge/helpers'
import {
  channelCollaborativeEditing,
  channelCollaborativeResponding,
  MessageTemplatesMockByKey,
  collabForces,
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
import Props from './types/props'

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
  const [messages, setMessages] = useState(args.messages)

  const onChange = (nextMessage: MessageCustom): void => {
    // if this message has a reference number, we should delete any previous message
    // with that reference number before we insert the message
    const dropOldCopies = messages.filter((msg: MessageCustom) => {
      return nextMessage.message.Reference === undefined || msg.message.Reference !== nextMessage.message.Reference
    })

    const newMessages = [nextMessage, ...dropOldCopies]
    setMessages(newMessages)
  }

  const handleReadMessage = (unreadCount: number): void => {
    console.log('unread mesages left: ' + unreadCount)
  }

  return <CoaStatusBoard
    {...args}
    forces={collabForces}
    messages={messages}
    onChange={onChange}
    onMessageRead={handleReadMessage}
    currentWargame='wargame-test'
  />
}

const mostColabEditMockRaw = mostRecentOnly(messageDataCollaborativeEditing) as MessageCustom[]
const mostColabEditMock = mostColabEditMockRaw.map((message: MessageCustom): MessageCustom => {
  const collab = message.details.collaboration
  if (collab) {
    if (collab.status === CollaborativeMessageStates.BeingEdited) {
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
    if (collab.status === CollaborativeMessageStates.BeingEdited) {
      // make the sample user the owner of this doc
      collab.owner = exconCollaborator
    }
  }
  return message
})

export const CollaborativeEditEditor = Template.bind({})
CollaborativeEditEditor.args = {
  channel: channelCollaborativeEditing,
  messages: mostColabEditMock,
  isUmpire: false,
  role: blueCollaborator,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeEditReleaseManager = Template.bind({})
CollaborativeEditReleaseManager.args = {
  channel: channelCollaborativeEditing,
  messages: mostColabEditMock,
  isUmpire: false,
  role: blueReleaseManager,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseSubmit = Template.bind({})
CollaborativeResponseSubmit.args = {
  channel: channelCollaborativeResponding,
  messages: mostColabResponseMock,
  isUmpire: true,
  role: blueAuthor,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseParticipateWhite = Template.bind({})
CollaborativeResponseParticipateWhite.args = {
  channel: channelCollaborativeResponding,
  messages: mostColabResponseMock,
  isUmpire: true,
  role: whiteCollaborator,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseParticipateExcon = Template.bind({})
CollaborativeResponseParticipateExcon.args = {
  channel: channelCollaborativeResponding,
  messages: mostColabResponseMock,
  isUmpire: true,
  role: exconCollaborator,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseRelease = Template.bind({})
CollaborativeResponseRelease.args = {
  channel: channelCollaborativeResponding,
  messages: mostColabResponseMock,
  isUmpire: true,
  role: whiteReleaseMgr,
  templates: MessageTemplatesMockByKey
}
