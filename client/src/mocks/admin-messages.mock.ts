import { CUSTOM_MESSAGE } from 'src/config'
import { MessageCustom, MessageChannel, Role } from 'src/custom-types'
import { forces } from './forces.mock'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const message1: MessageChannel = {
  messageType: CUSTOM_MESSAGE,
  details: {
    channel: 'game-admin',
    from: {
      force: 'White',
      forceColor: '#FCFBEE',
      roleId: whiteGC.roleId,
      roleName: whiteGC.name,
      iconURL: 'default_img/umpireDefault.png'
    },
    messageType: 'Chat',
    timestamp: '2020-03-25T15:08:47.510Z',
    turnNumber: 1
  },
  message: {
    content: 'test\n'
  },
  _id: '2020-03-25T15:08:47.510Z',
  hasBeenRead: false,
  isOpen: false
}
const message2: MessageCustom = {
  messageType: CUSTOM_MESSAGE,
  details: {
    channel: 'game-admin',
    from: {
      force: 'Blue',
      forceColor: '#1989dc',
      roleId: blueCO.roleId,
      roleName: blueCO.name,
      name: 'Blue',
      iconURL: 'default_img/umpireDefault.png'
    },
    messageType: 'Chat',
    timestamp: '2020-03-25T15:08:47.510Z',
    turnNumber: 1
  },
  message: {
    content: 'Lorem ipsum do lor sit amet adipiscius elit\n'
  },
  _id: '2020-03-25T15:08:47.520Z',
  hasBeenRead: false,
  isOpen: false
}

const messages: MessageChannel[] = [message1, message2]

export default messages
