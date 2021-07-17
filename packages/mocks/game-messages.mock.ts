import { MessageChannel } from '@serge/custom-types'
import { CUSTOM_MESSAGE } from '@serge/config'

const gameMessages: MessageChannel[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-k63pjit0",
      from: {
        force: "Red",
        forceColor: "#F00",
        iconURL: "default_img/umpireDefault.png",
        roleName: "CO",
        roleId: "r12345"
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:04.394Z"
    },
    message: {
      content: "message from Red"
    },
    _id: "2020-03-25T15:08:47.520Z",
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
        roleName: "CO",
        roleId: "r12345"
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:21.119Z"
    },
    message: {
      content: "Message from Blue"
    },
    _id: "2020-03-25T15:08:47.530Z",
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
            roleName: "Game Control",
            roleId: "r12345"
        },
        messageType: "Chat",
        privateMessage: "The private content goes in here",
        timestamp: "2020-10-13T08:52:40.930Z"
    },
    message: {
        content: "Message from White, with Private content"
    },
    _id: "2020-03-25T15:08:47.540Z",
    hasBeenRead: false,
    isOpen: false
}
]
export default gameMessages
