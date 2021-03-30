import { MessageChannel } from '@serge/custom-types'
import { CUSTOM_MESSAGE, CollaborativeMessageStates } from '@serge/config'

/** set of mock messages that includes
 * extra data for collaborative editing
 */
const gameMessagesWithRFI: MessageChannel[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-k63pjit0",
      from: {
        force: "Red",
        forceColor: "#F00",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:04.394Z"
    },
    message: {
      content: "message from Red"
    },
    _id: "2020-03-25T15:08:47.520Z",
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
        icon: "default_img/umpireDefault.png",
        role: "CO"
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
        icon: "default_img/umpireDefault.png",
        role: "Game Control"
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
      channel: "BLUE RFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:52:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      content: "RFI 1 from Blue"
    },
    _id: "2020-03-25T15:08:52.530Z",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "BLUE RFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:53:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      content: "RFI 2 from Blue"
    },
    _id: "2020-03-25T15:08:53.530Z",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "BLUE RFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:54:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      content: "RFI 3 from Blue"
    },
    _id: "2020-03-25T15:08:54.530Z",
    _rev: "1",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "BLUE RFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:53:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner: 'Comms'
      }
    },
    message: {
      content: "RFI 2 from Blue"
    },
    _id: "2020-03-25T15:08:53.530Z",
    _rev: "2",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "BLUE RFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:54:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner: 'Logistics'
      }
    },
    message: {
      content: "RFI 3 from Blue"
    },
    _id: "2020-03-25T15:08:54.530Z",
    _rev: "2",
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "BLUE RFI",
      from: {
        force: "Blue",
        forceColor: "#00F",
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:54:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        owner: 'Logistics',
        response: 'RFI 3 response from White Logistics',
      }
    },
    message: {
      content: "RFI 3 from Blue"
    },
    _id: "2020-03-25T15:08:54.530Z",
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
        icon: "default_img/umpireDefault.png",
        role: "CO"
      },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.Unallocated
      }
    },
    message: {
      title: "RFI Title example",
      content: "RFI 4 from Red"
    },
    _rev: "1",
    _id: "2020-03-25T15:08:55.530Z",
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
          icon: "default_img/umpireDefault.png",
          role: "CO"
        },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner:"Game Control"
      }
    },
    message: {
      title: "RFI Title example",
      content: "RFI 4 from Red"
    },
    _id: "2020-03-25T15:08:55.530Z",
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
            icon: "default_img/umpireDefault.png",
            role: "CO"
        },
      messageType: "RFI",
      timestamp: "2020-10-13T08:55:21.119Z",
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        response: "Game control response to RFI 4",
        owner:"Game Control"
      }
    },
    message: {
      title: "RFI Title example",
      content: "RFI 4 from Red"
    },
    _id: "2020-03-25T15:08:55.530Z",
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
          icon: "default_img/umpireDefault.png",
          role: "CO"
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
      title: "RFI Title example",
      content: "RFI 4 from Red"
    },
    _id: "2020-03-25T15:08:55.530Z",
    _rev: "4",
    hasBeenRead: false,
    isOpen: false
  },
]
export default gameMessagesWithRFI
