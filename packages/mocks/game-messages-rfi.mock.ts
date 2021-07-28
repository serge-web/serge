import { MessageCustom, Role } from '@serge/custom-types'
import { CUSTOM_MESSAGE, CollaborativeMessageStates } from '@serge/config'
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
    details: {
      channel: "channel-k63pjit0",
      from: {
        force: "Red",
        forceColor: "#F00",
        iconURL: "default_img/umpireDefault.png",
        roleId: redCO.roleId
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:04.394Z"
    },
    message: {
      content: "message from Red"
    },
    _id: "2020-03-25T15:08:47.525Z",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-k63pjit0",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:21.119Z"
    },
    message: {
      content: "Message from Blue"
    },
    _id: "2020-03-25T15:08:47.530Z",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-k63pjit0",
      from: {
        force: "White",
        forceColor: "#FCFBEE",
        iconURL: "default_img/umpireDefault.png",
        roleId: whiteGC.roleId
      },
      messageType: "Chat",
      privateMessage: "The private content goes in here",
      timestamp: "2020-10-13T08:52:40.930Z"
    },
    message: {
      content: "Message from White, with Private content"
    },
    _id: "2020-03-25T15:08:47.540Z",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-BlueRFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
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
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-BlueRFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:53:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      "Reference": "Blue-2",
      "Request": "RFI 2 request goes in here",
      "Title": "RFI 2 from Blue"
    },
    _id: "id_2",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-BlueRFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:54:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      "Reference": "Blue-3",
      "Request": "RFI 3 request goes in here",
      "Title": "RFI 3 from Blue"
    },
    _id: "id_3",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-BlueRFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:53:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner: blueComms.roleId
      }
    },
    message: {
      "Reference": "Blue-2",
      "Request": "RFI 2 request goes in here",
      "Title": "RFI 2 from Blue"
    },
    _id: "id_2a",
    _rev: "2",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-BlueRFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:54:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner: blueCO.roleId
      }
    },
    message: {
      "Reference": "Blue-3",
      "Request": "RFI 3 request goes in here",
      "Title": "RFI 3 from Blue"
    },
    _id: "id_3a",
    _rev: "2",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-BlueRFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        iconURL: "default_img/umpireDefault.png",
        roleId: blueCO.roleId
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:54:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        owner: blueComms.roleId,
        response: 'RFI 3 response from White Logistics',
      }
    },
    message: {
      "Reference": "Blue-3",
      "Request": "RFI 3 request goes in here",
      "Title": "RFI 3 from Blue"
    },
    _id: "id_3b",
    _rev: "3",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "Red RFI",
      from: {
        force: "Red",
        forceColor: "#F00",
        iconURL: "default_img/umpireDefault.png",
        roleId: redCO.roleId
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      "Reference": "RED-1",
      "Request": "RFI 1 request from red goes in here",
      "Title": "RFI 1 from RED"
    },
    _rev: "1",
    _id: "id_4",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
        channel: "Red RFI",
        from: {
          force: "Red",
          forceColor: "#F00",
          iconURL: "default_img/umpireDefault.png",
          roleId: redCO.roleId
        },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner: whiteGC.roleId
      }
    },
    message: {
      "Reference": "RED-1",
      "Request": "RFI 1 request from red goes in here",
      "Title": "RFI 1 from RED"
    },
    _id: "id_4a",
    _rev: "2",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
        channel: "Red RFI",
        from: {
            force: "Red",
            forceColor: "#F00",
            iconURL: "default_img/umpireDefault.png",
            roleId: redCO.roleId
        },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        response: "Game control response to RFI 4",
        owner: whiteGC.roleId
      }
    },
    message: {
      "Reference": "RED-1",
      "Request": "RFI 1 request from red goes in here",
      "Title": "RFI 1 from RED"
    },
    _id: "id_4b",
    _rev: "3",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
        channel: "Red RFI",
        from: {
          force: "Red",
          forceColor: "#F00",
          iconURL: "default_img/umpireDefault.png",
          roleId: redCO.roleId
        },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Released,
        response: "Game control response to RFI 4"
      },
      privateMessage: "The private content goes in here"
    },
    message: {
      "Reference": "RED-1",
      "Request": "RFI 1 request from red goes in here",
      "Title": "RFI 1 from RED"
    },
    _id: "id_4c",
    _rev: "4",
    hasBeenRead: false,
    isOpen: false
  },
]
export default gameMessagesWithRFI
