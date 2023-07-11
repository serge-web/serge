import { MessageChannel, Role } from 'src/custom-types'
import { CUSTOM_MESSAGE } from 'src/config'

import { forces } from './forces.mock'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const redCO: Role = forces[2].roles[0]

const gameMessages: MessageChannel[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: "channel-k63pjit0",
      from: {
        force: "Red",
        forceColor: "#F00",
        iconURL: "default_img/umpireDefault.png",
        roleName: redCO.name,
        roleId: redCO.roleId
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:04.394Z",
      turnNumber: 1,
      privateMessage: "Private response to message"
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
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      messageType: "Chat",
      timestamp: "2020-10-13T08:52:21.119Z",
      turnNumber: 1
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
            roleName: whiteGC.name,
            roleId: whiteGC.roleId
        },
        messageType: "Chat",
        privateMessage: "The private content goes in here",
        timestamp: "2020-10-13T08:52:40.930Z",
        turnNumber: 1
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
