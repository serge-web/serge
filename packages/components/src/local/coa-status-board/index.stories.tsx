import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CoaStatusBoard from './index'
import docs from './README.md'

import { GameMessagesMockRFI } from '@serge/mocks' // GameChannels
import { MessageCustom } from '@serge/custom-types'
import {CollaborativeMessageStates} from '@serge/config'
import Props from './types/props'
import { mostRecentOnly } from '@serge/helpers'

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

const channel = [
  {
    collabOptions: {
      extraColumns: [],
      mode: "edit",
      originatorsSeeChanges: false,
      returnVerbs: ["Endorse", "Request Changes"],
      startWithReview: true
    },
    format: "collab-edit",
    name: "New Channel",
    participants: [
      {
        canCollaborate: true, 
        canReleaseMessages: false, 
        force: "White", 
        forceUniqid: "umpire", 
        roles: [], 
        subscriptionId: "a7b1c", 
        templates: [
          {title: "Request for Information", _id: "k16eedkj"}
        ]
      },
      {
        canCollaborate: false,
        canReleaseMessages: true,
        force: "White",
        forceUniqid: "umpire",
        roles: [],
        subscriptionId: "qt71b",
        templates: [
          {title: "Request for Information", _id: "k16eedkj"}
        ]
      },
      {
        canCollaborate: false,
        canReleaseMessages: false,
        force: "White",
        forceUniqid: "umpire",
        roles: [],
        subscriptionId: "la35b",
        templates: [
          {title: "Request for Information", _id: "k16eedkj"}
        ]
      }
    ],
    uniqid: "ks0cewid",
  }
]

const msg: MessageCustom[] = [
  {
    messageType: "CustomMessage",
    details: {
       channel: "ks0cewid",
       from: {
          force: "Blue",
          forceColor: "#00F",
          iconURL: "default_img/umpireDefault.png",
          roleName: "CO",
          roleId: "rkrlw445e"
       },
       messageType: "RFI",
       timestamp: "2020-10-13T08:54:21.119Z",
       collaboration: {
          status: CollaborativeMessageStates.PendingReview,
          owner: "rkrlw6f5emms",
          ownerName: "Comms",
          response: "RFI 3 response from White Logistics"
       }
    },
    message: {
       Reference: "Blue-3",
       Request: "RFI 3 request goes in here",
       Title: "RFI 3 from Blue"
    },
    _id: "id_3b",
    _rev: "3",
    hasBeenRead: false,
    isOpen: false
 },
 {
  messageType: "CustomMessage",
  details: {
    channel: "channel-BlueRFI",
    from: {
      force: "Blue",
      forceColor: "#00F",
      roleName: "CO",
      iconURL: "default_img/umpireDefault.png",
      roleId: "rkrlw445e"
    },
    messageType: "RFI",
    timestamp: "2020-10-13T08:52:21.119Z",
    collaboration: {
      status: CollaborativeMessageStates.Unallocated
    }
  },
  message: {
    "Reference": "Blue-1",
    "Request": "RFI 1 request goes in here",
    "Title": "RFI 1 from Blue"
  },
  _id: "id_1",
  _rev: "1",
  hasBeenRead: false,
  isOpen: false
},
]

const Template: Story<Props> = (args) => {
  console.log('ARGS: ', args)
  return <CoaStatusBoard {...args} />
}

// filter to only show the most recent versions of messages
// const mostRecentMessages = mostRecentOnly(GameMessagesMockRFI) as MessageCustom[]
// console.log('++++++++++++++++++ ', mostRecentMessages)
export const Demonstration = Template.bind({})
Demonstration.args = {
  roles: roles,
  channels: channel, // GameChannels
  rfiMessages: msg, // mostRecentMessages
  isRFIManager: true,
  isUmpire: true,
  role: 'Game Control'
}
