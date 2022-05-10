import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CollabStatusBoard from './index'
import docs from './README.md'

import { MessageCustom } from '@serge/custom-types'
import { CollabStatusBoardProps } from './types/props'
import { mostRecentOnly } from '@serge/helpers'
import {
  channelCollaborativeEditing2,
  channelCollaborativeResponding2,
  MessageTemplatesMockByKey,
  collabForces2,
  blueCollaborator2,
  blueReleaseManager2,
  whiteCollaborator2,
  exconCollaborator2,
  whiteReleaseMgr2,
  blueAuthor2,
  messageDataCollaborativeResponding,
  messageDataCollaborativeEditing
} from '@serge/mocks'
import { CollaborativeMessageStates } from '@serge/config'
export default {
  title: 'local/CollabStatusBoard',
  component: CollabStatusBoard,
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
    isUmpire: {
      description: 'if player is from an umpire force'
    },
    isObserver: {
      description: 'if player is marked as an observer'
    },
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

const Template: Story<CollabStatusBoardProps> = (args) => {
  const { isObserver, isUmpire } = args
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

  const handleReadMessage = (message: MessageCustom): void => {
    console.log('message red: ' + message)
  }
  return <CollabStatusBoard
    {...args}
    forces={collabForces2}
    messages={messages}
    isUmpire={isUmpire}
    isObserver={isObserver}
    onChange={onChange}
    onMessageRead={handleReadMessage}
    currentWargame='wargame-test'
  />
}

const mostColabEditMockRaw = mostRecentOnly(messageDataCollaborativeEditing) as MessageCustom[]
const mostColabEditMock = mostColabEditMockRaw.map((message: MessageCustom): MessageCustom => {
  const collab = message.details.collaboration
  if (collab) {
    if (collab.status === CollaborativeMessageStates.InProgress) {
      // make the sample user the owner of this doc
      collab.owner = blueCollaborator2
    }
  }
  return message
})

const mostColabResponseMockRaw = mostRecentOnly(messageDataCollaborativeResponding) as MessageCustom[]
const mostColabResponseMock = mostColabResponseMockRaw.map((message: MessageCustom): MessageCustom => {
  const collab = message.details.collaboration
  if (collab) {
    if (collab.status === CollaborativeMessageStates.InProgress) {
      // make the sample user the owner of this doc
      collab.owner = exconCollaborator2
    }
  }
  return message
})

export const CollaborativeEditEditor = Template.bind({})
CollaborativeEditEditor.args = {
  channelColb: channelCollaborativeEditing2,
  messages: mostColabEditMock,
  isObserver: false,
  isUmpire: true,
  role: blueCollaborator2,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeEditReleaseManager = Template.bind({})
CollaborativeEditReleaseManager.args = {
  channelColb: channelCollaborativeEditing2,
  messages: mostColabEditMock,
  isObserver: false,
  isUmpire: false,
  role: blueReleaseManager2,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeEditNomMemberObserver = Template.bind({})
CollaborativeEditNomMemberObserver.args = {
  channelColb: channelCollaborativeEditing2,
  messages: mostColabEditMock,
  isObserver: true,
  isUmpire: false,
  role: whiteCollaborator2,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseSubmit = Template.bind({})
CollaborativeResponseSubmit.args = {
  channelColb: channelCollaborativeResponding2,
  messages: mostColabResponseMock,
  isObserver: true,
  isUmpire: false,
  role: blueAuthor2,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseParticipateWhite = Template.bind({})
CollaborativeResponseParticipateWhite.args = {
  channelColb: channelCollaborativeResponding2,
  messages: mostColabResponseMock,
  isObserver: true,
  isUmpire: false,
  role: whiteCollaborator2,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseParticipateExcon = Template.bind({})
CollaborativeResponseParticipateExcon.args = {
  channelColb: channelCollaborativeResponding2,
  messages: mostColabResponseMock,
  isObserver: true,
  isUmpire: false,
  role: exconCollaborator2,
  templates: MessageTemplatesMockByKey
}

export const CollaborativeResponseRelease = Template.bind({})
CollaborativeResponseRelease.args = {
  channelColb: channelCollaborativeResponding2,
  messages: mostColabResponseMock,
  isObserver: true,
  isUmpire: false,
  role: whiteReleaseMgr2,
  templates: MessageTemplatesMockByKey
}
