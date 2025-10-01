import { SET_ALL_MESSAGES, CUSTOM_MESSAGE } from 'src/config'
import { SetWargameMessagesAction, Role } from 'src/custom-types'
import { forces } from './forces.mock'

const blueCO: Role = forces[1].roles[0]

const actionSetWargameMessages: SetWargameMessagesAction = {
  type: SET_ALL_MESSAGES,
  payload: [
    {
      messageType: CUSTOM_MESSAGE,
      templateId: 'Chat',
      isOpen: false,
      hasBeenRead: false,
      details: {
        channel: 'channel-k16fgs63',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleName: blueCO.name,
          roleId: blueCO.roleId,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        timestamp: '2020-12-06T11:07:18.374Z',
        turnNumber: 1
      },
      message: {
        content: 'My second test mesage bluechat'
      },
      _id: '2020-12-06T11:07:18.374Z',
      _rev: '1-b0787ec1a69761adbd14ebe5186265fa'
    },
    {
      messageType: CUSTOM_MESSAGE,
      templateId: 'Chat',
      isOpen: false,
      hasBeenRead: false,
      details: {
        channel: 'channel-k16fgs63',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleName: blueCO.name,
          roleId: blueCO.roleId,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        timestamp: '2020-12-06T11:07:08.130Z',
        turnNumber: 1
      },
      message: {
        content: 'My test mesage bluechat'
      },
      _id: '2020-12-06T11:07:08.130Z',
      _rev: '1-22eb14479c475bdf0bd31fb08ea029c6'
    },
    {
      messageType: CUSTOM_MESSAGE,
      templateId: 'PG19 Weekly Orders',
      isOpen: false,
      hasBeenRead: false,
      details: {
        channel: 'channel-k16fheej',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleId: blueCO.roleId,
          roleName: blueCO.name,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        timestamp: '2020-12-06T11:06:51.596Z',
        turnNumber: 1
      },
      message: {
        CommandersIntent: 'Commanders Intent\n',
        Orders: [
          {
            Unit: 'Unit',
            Orders: 'Orders',
            ContingencyOrders: 'Contingency Orders'
          }
        ],
        PxTasking: 'Px Tasking\n',
        AlliedUnitTasking: 'Px Tasking\n',
        ForceActionOnContact: 'Px Tasking\n',
        ForceActionOnLossOfContact: '',
        SupportingLogisticsActivity: ''
      },
      _id: '2020-12-06T11:06:51.596Z',
      _rev: '1-011c35315375d64dab2a7de520613875'
    },
    {
      messageType: CUSTOM_MESSAGE,
      templateId: 'Chat',
      isOpen: false,
      hasBeenRead: false,
      details: {
        channel: 'game-admin',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleId: blueCO.roleId,
          roleName: blueCO.name,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        timestamp: '2020-12-06T11:06:19.602Z',
        turnNumber: 1
      },
      message: {
        content: 'My Second Test Message'
      },
      _id: '2020-12-06T11:06:19.602Z',
      _rev: '1-e17592723c22372813d53a52782f9b50'
    },
    {
      messageType: CUSTOM_MESSAGE,
      templateId: 'Chat',
      isOpen: false,
      hasBeenRead: false,
      details: {
        channel: 'game-admin',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleId: blueCO.roleId,
          roleName: blueCO.name,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        timestamp: '2020-12-06T11:06:12.434Z',
        turnNumber: 1
      },
      message: {
        content: 'My test Message'
      },
      _id: '2020-12-06T11:06:12.434Z',
      _rev: '1-f70b71621c42d3b94ad94ebc09cea9a0'
    },
    {
      messageType: CUSTOM_MESSAGE,
      templateId: 'Chat',
      isOpen: false,
      hasBeenRead: false,
      details: {
        channel: 'game-admin',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleId: blueCO.roleId,
          roleName: blueCO.name,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        timestamp: '2020-12-06T11:05:07.490Z',
        turnNumber: 1
      },
      message: {
        content: 'ddaw'
      },
      _id: '2020-12-06T11:05:07.491Z',
      _rev: '1-99a75cd848ce35b580fc41e50bdf51f3'
    }
  ]
}

export default actionSetWargameMessages
