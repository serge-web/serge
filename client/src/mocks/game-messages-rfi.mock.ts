import { MessageCustom, Role } from 'src/custom-types'
import { CUSTOM_MESSAGE, CollaborativeMessageStates } from 'src/config'
import { forces } from './forces.mock'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const blueComms: Role = forces[1].roles[1]
const redCO: Role = forces[2].roles[0]

/** set of mock messages that includes
 * extra data for collaborative editing
 */
const gameMessagesWithRFI: MessageCustom[] = [
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'k16eedkl',
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      timestamp: '2020-10-13T08:52:04.394Z',
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: {
          content: 'Game control response to RFI 4'
        }
      },
      turnNumber: 1
    },
    message: {
      content: 'message from Red'
    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: true,
    isOpen: true
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'Chat',
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: {
          content: 'Game control response to RFI 4'
        }
      },
      turnNumber: 1
    },
    message: {
      content: 'Message from Blue'
    },
    _id: '2020-03-25T15:08:47.530Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'Chat',
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        status: CollaborativeMessageStates.Closed,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: {
          content: 'Game control response to RFI 4'
        }
      },
      turnNumber: 1
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
    templateId: 'RFI',
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        lastUpdated: '2020-03-25T15:08:47.540Z',
        status: CollaborativeMessageStates.Released
      },
      turnNumber: 1
    },
    message: {
      Reference: 'Blue-1',
      Request: 'RFI 1 request goes in here',
      Title: 'RFI 1 from Blue'
    },
    _id: 'id_1',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:53:21.119Z',
      collaboration: {
        lastUpdated: '2020-03-25T15:08:47.540Z',
        status: CollaborativeMessageStates.Unallocated
      },
      turnNumber: 1
    },
    message: {
      Reference: 'Blue-2',
      Request: 'RFI 2 request goes in here',
      Title: 'RFI 2 from Blue'
    },
    _id: 'id_2',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        lastUpdated: '2020-03-25T15:08:47.540Z',
        status: CollaborativeMessageStates.Unallocated
      },
      turnNumber: 1
    },
    message: {
      Reference: 'Blue-3',
      Request: 'RFI 3 request goes in here',
      Title: 'RFI 3 from Blue'
    },
    _id: 'id_3',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:53:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        owner: { forceId: forces[1].uniqid, forceName: forces[1].name, roleId: blueComms.roleId, roleName: blueComms.name }
      },
      turnNumber: 1
    },
    message: {
      Reference: 'Blue-2',
      Request: 'RFI 2 request goes in here',
      Title: 'RFI 2 from Blue'
    },
    _id: 'id_2a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        owner: { forceId: forces[1].uniqid, forceName: forces[1].name, roleId: blueCO.roleId, roleName: blueCO.name }
      },
      turnNumber: 1
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
    templateId: 'RFI',
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: {
          content: 'RFI 3 response from White Logistics'
        }
      },
      turnNumber: 1
    },
    message: {
      Reference: 'Blue-3',
      Request: 'RFI 3 request goes in here',
      Title: 'RFI 3 from Blue'
    },
    _id: 'id_3b',
    _rev: '3',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        lastUpdated: '2020-03-25T15:08:47.540Z',
        status: CollaborativeMessageStates.Released
      },
      turnNumber: 1
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
    templateId: 'RFI',
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        owner: { forceId: forces[0].uniqid, forceName: forces[0].name, roleId: whiteGC.roleId, roleName: whiteGC.name }
      },
      turnNumber: 1
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _id: 'id_4a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: {
          content: 'Game control response to RFI 4'
        }
      },
      turnNumber: 1
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _id: 'id_4b',
    _rev: '3',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    templateId: 'RFI',
    details: {
      channel: 'Red RFI',
      archived: true,
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        status: CollaborativeMessageStates.Released,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: {
          content: 'Game control response to RFI 4'
        }
      },
      privateMessage: 'The private content goes in here',
      turnNumber: 1
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _id: 'id_4c',
    _rev: '4',
    hasBeenRead: false,
    isOpen: false
  }
]
export default gameMessagesWithRFI
