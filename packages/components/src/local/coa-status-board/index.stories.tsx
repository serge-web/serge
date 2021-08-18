import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CoaStatusBoard from './index'
import docs from './README.md'

import { SpecialChannelTypes, CUSTOM_MESSAGE, CollaborativeMessageStates } from '@serge/config'
import { MessageCustom, ForceRole, ChannelData, Role } from '@serge/custom-types'
import Props from './types/props'
import { mostRecentOnly } from '@serge/helpers'
import { forces } from '@serge/mocks'
import { useState } from 'react'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const redCO: Role = forces[2].roles[0]

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

const colabEdit: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}
const CECPchannel: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}
const CERMchannel: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: true,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}
const colabEditMock: MessageCustom[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.Finalized
      }
    },
    message: {
      Reference: 'Blue-3',
      Request: 'RFI 3 request goes in here',
      Title: 'RFI 3 from Blue'
    },
    _id: 'id_3a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.Closed
      }
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _rev: '1',
    _id: 'id_4',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      messageType: 'Chat',
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        response: 'Game control response to RFI 444'
      }
    },
    message: {
      content: 'Message from White, with Private content'
    },
    _id: '2020-03-25T15:08:47.540Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'Chat',
      timestamp: '2020-10-13T08:52:04.394Z',
      collaboration: {
        status: CollaborativeMessageStates.EditDocument,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      content: 'message from Red'
    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'ks8soryj',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      messageType: 'Chat',
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.DocumentPending,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      content: 'Message from Blue'
    },
    _id: '2020-03-25T15:08:47.530Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  }
]

const colabResponse: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'response',
    returnVerbs: [],
    startWithReview: false
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE,
  name: 'New CR',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8sztkw'
}
const CRCPchannels: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'response',
    returnVerbs: [],
    startWithReview: false
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE,
  name: 'New CR',
  participants: [
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8sztkw'
}
const CRRMchannels: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'response',
    returnVerbs: [],
    startWithReview: false
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE,
  name: 'New CR',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: true,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8sztkw'
}
const colabResponseMock: MessageCustom[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.ResponsePending
      }
    },
    message: {
      Reference: 'Blue-3',
      Request: 'RFI 3 request goes in here',
      Title: 'RFI 3 from Blue'
    },
    _id: 'id_3a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.EditResponse
      }
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _rev: '1',
    _id: 'id_4',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      messageType: 'Chat',
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        status: CollaborativeMessageStates.Closed,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      content: 'Message from White, with Private content'
    },
    _id: '2020-03-25T15:08:47.540Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'Chat',
      timestamp: '2020-10-13T08:52:04.394Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      content: 'message from Red'
    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      messageType: 'Chat',
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.Released,
        response: 'Game control response to RFI 4'
      }
    },
    message: {
      content: 'Message from Blue'
    },
    _id: '2020-03-25T15:08:47.530Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  }
]


const Template: Story<Props> = (args) => {
  const [messages, setMessages] = useState(args.rfiMessages)

  const onChange = (nextMessages: MessageCustom[]): void => {
    setMessages(nextMessages)
  }
  return <CoaStatusBoard {...args} rfiMessages={messages} onChange={onChange} />
}

// filter to only show the most recent versions of messages
const mostColabEditMock = mostRecentOnly(colabEditMock) as MessageCustom[]
const mostColabResponseMock = mostRecentOnly(colabResponseMock) as MessageCustom[]
const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' }

export const CollaborativeEditing = Template.bind({})
CollaborativeEditing.args = {
  roles: roles,
  channels: colabEdit,
  rfiMessages: mostColabEditMock,
  isRFIManager: true,
  isUmpire: true,
  role: role
}
export const CECollaborationParticipant = Template.bind({})
CECollaborationParticipant.args = {
  roles: roles,
  channels: CECPchannel,
  rfiMessages: mostColabEditMock,
  isRFIManager: true,
  isUmpire: true,
  role: role
}
export const CEReleaseManager = Template.bind({})
CEReleaseManager.args = {
  roles: roles,
  channels: CERMchannel,
  rfiMessages: mostColabEditMock,
  isRFIManager: true,
  isUmpire: true,
  role: role,
}

export const CollaborativeResponding = Template.bind({})
CollaborativeResponding.args = {
  roles: roles,
  channels: colabResponse,
  rfiMessages: mostColabResponseMock,
  isRFIManager: true,
  isUmpire: true,
  role: role
}
export const CRCollaborationParticipant = Template.bind({})
CRCollaborationParticipant.args = {
  roles: roles,
  channels: CRCPchannels,
  rfiMessages: mostColabResponseMock,
  isRFIManager: true,
  isUmpire: true,
  role: role
}
export const CRReleaseManager = Template.bind({})
CRReleaseManager.args = {
  roles: roles,
  channels: CRRMchannels,
  rfiMessages: mostColabResponseMock,
  isRFIManager: true,
  isUmpire: true,
  role: role
}
