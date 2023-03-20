import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as ActionConstants from '@serge/config'
import { createMessageExportItem } from '../../../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators'
import { exportItems } from '../../../ActionsAndReducers/ExportItems/ExportItems_Reducer'
import { expect, describe, it } from '@jest/globals'
import { ExportItemMessages, ExportItemsUiActionTypes, Wargame } from '@serge/custom-types'

const mockStore = configureStore([thunk])
// wargame backup

const wargame: Wargame = {
  name: '',
  phase: ActionConstants.ADJUDICATION_PHASE,
  gameTurn: 1,
  isLoading: false,
  wargameList: [
    {
      name: 'https://serge-dev.herokuapp.com/db/wargame-k26c53lc',
      title: 'Sunday',
      initiated: true,
      shortName: 'Sd'
    },
    {
      name: 'https://serge-dev.herokuapp.com/db/wargame-k16fadm4',
      title: 'Monday',
      initiated: true,
      shortName: 'Md'
    }
  ],
  currentWargame: 'wargame-k16fadm4',
  exportMessagelist: [
    {
      details: {
        channel: 'Blue Chat',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleName: 'Comms',
          roleId: 'comms',
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:47:38.806Z',
        turnNumber: 2
      },
      message: {
        content: 'Last message. turn 2 started!'
      },
      _id: '2019-12-04T10:47:38.810Z',
      _rev: '1-df67bb8710ba37127a5b9a1fb0f7b10d',
      messageType: ActionConstants.CHAT_MESSAGE
    },
    {
      details: {
        channel: 'Blue HQ',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          roleName: 'Game Control',
          roleId: 'game_control',
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          iconURL: 'http://localhost:8080/default_img/umpireDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:46:44.588Z',
        privateMessage: '',
        turnNumber: 2
      },
      message: {
        content: 'Already ended * ^__^'
      },
      _id: '2019-12-04T10:46:44.589Z',
      _rev: '1-3b7a6f950ff8f669bc20e5e3fe851b3e',
      messageType: ActionConstants.CHAT_MESSAGE
    },
    {
      details: {
        channel: 'Blue HQ',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          roleName: 'Game Control',
          roleId: 'game_control',
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          iconURL: 'http://localhost:8080/default_img/umpireDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:46:13.211Z',
        privateMessage: '',
        turnNumber: 2
      },
      message: {
        content: 'I am going to end turn'
      },
      _id: '2019-12-04T10:46:13.213Z',
      _rev: '1-abe31adf1e6fcfd150439be0c35be96e',
      messageType: ActionConstants.CHAT_MESSAGE
    },
    {
      details: {
        channel: 'Blue HQ',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleName: 'CO',
          roleId: 'co',
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'PG19 Weekly Orders',
        timestamp: '2019-12-04T10:44:55.754Z',
        turnNumber: 1
      },
      message: {
        CommandersIntent: 'Test message Commanders Intent',
        Orders: [
          {
            Unit: 'Unit 1',
            Orders: 'First order',
            ContingencyOrders: ''
          }
        ],
        PxTasking: 'Tasking',
        AlliedUnitTasking: 'unit tasking',
        ForceActionOnContact: '',
        ForceActionOnLossOfContact: '',
        SupportingLogisticsActivity: ''
      },
      _id: '2019-12-04T10:44:55.754Z',
      _rev: '1-5aac5f7ed2d08b2844cfd8a62bedf66d',
      messageType: ActionConstants.CHAT_MESSAGE
    },
    {
      details: {
        channel: 'Blue Chat',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleName: 'CO',
          roleId: 'co',
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:44:11.017Z',
        turnNumber: 1
      },
      message: {
        content: 'Test message (chat) 2'
      },
      _id: '2019-12-04T10:44:11.017Z',
      _rev: '1-70a3539a935743ba03e2b6181877c9ae',
      messageType: ActionConstants.CHAT_MESSAGE
    },
    {
      details: {
        channel: 'Blue Chat',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleName: 'CO',
          roleId: 'co',
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          iconURL: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2019-12-04T10:43:57.065Z',
        turnNumber: 1
      },
      message: {
        content: 'Test message (chat) 1'
      },
      _id: '2019-12-04T10:43:57.067Z',
      _rev: '1-7903abe9663e43b0c2bdf292d2abe1d6',
      messageType: ActionConstants.CHAT_MESSAGE
    }
  ],
  wargameTitle: 'Monday',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: '',
      gameTurnTime: { unit: 'millis', millis: 43200 },
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      gameDate: '2019-10-01T14:02',
      showAccessCodes: true,
      dirty: false,
      logPlayerActivity: false
    },
    forces: {
      name: 'Forces',
      forces: [
        {
          name: 'White',
          uniqid: 'umpire',
          overview: 'Umpire force.',
          roles: [
            {
              name: 'Game Control',
              roleId: 'game_control',
              isGameControl: true,
              isObserver: true,
              isInsightViewer: true,
              isRFIManager: true
            }
          ],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
          color: '#FCFBEE',
          umpire: true,
          dirty: false
        },
        {
          name: 'Blue',
          uniqid: 'force-k16fdykj',
          overview: 'An overview written here..',
          roles: [
            {
              name: 'CO',
              roleId: 'co',
              isGameControl: false,
              isObserver: false,
              isInsightViewer: false
            },
            {
              name: 'Comms',
              roleId: 'comms',
              isObserver: false,
              isInsightViewer: false,
              isGameControl: false
            }
          ],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          iconURL: 'http://localhost:8080/default_img/forceDefault.png',
          color: '#3dd0ff',
          umpire: false,
          dirty: false
        }
      ],
      selectedForce: '',
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [
        {
          name: 'Blue Chat',
          uniqid: 'channel-k16fgs63',
          participants: [
            {
              forceUniqid: 'force-k16fdykj',
              roles: [],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              subscriptionId: 'k16fh4xo',
              pType: ActionConstants.PARTICIPANT_CHAT
            }
          ],
          channelType: ActionConstants.CHANNEL_CHAT
        },
        {
          name: 'Blue HQ',
          uniqid: 'channel-k16fheej',
          participants: [
            {
              forceUniqid: 'force-k16fdykj',
              roles: [],
              icon: 'http://localhost:8080/default_img/forceDefault.png',
              subscriptionId: 'k16fhq4b',
              pType: ActionConstants.PARTICIPANT_CHAT
            },
            {
              forceUniqid: 'umpire',
              roles: [],
              icon: 'http://localhost:8080/default_img/umpireDefault.png',
              subscriptionId: 'k16fhy24',
              pType: ActionConstants.PARTICIPANT_CHAT
            }
          ],
          channelType: ActionConstants.CHANNEL_CHAT
        }
      ],
      selectedChannel: '',
      dirty: false
    }
  },
  currentTab: 'overview',
  wargameInitiated: true,
  adminNotLoggedIn: false
}

const exportItem: ExportItemMessages = {
  type: ActionConstants.EXPORT_ITEM_MESSAGES,
  title: 'Export 2019-12-04 10:51:43',
  wargame: 'wargame-k16fadm4',
  data: [
    {
      title: 'Chat',
      items: [
        [
          'CHANNEL',
          'FORCE',
          'FORCECOLOR',
          'ROLE',
          'ICON',
          'MESSAGETYPE',
          'TIMESTAMP',
          'GAMETURN',
          'CONTENT',
          '_ID',
          '_REV',
          'PRIVATEMESSAGE'
        ],
        [
          'Blue Chat',
          'Blue',
          '#3dd0ff',
          'Comms',
          'http://localhost:8080/default_img/forceDefault.png',
          'Chat',
          '2019-12-04T10:47:38.806Z',
          '2',
          'Last message. turn 2 started!',
          '2019-12-04T10:47:38.810Z',
          '1-df67bb8710ba37127a5b9a1fb0f7b10d'
        ],
        [
          'Blue HQ',
          'White',
          '#FCFBEE',
          'Game Control',
          'http://localhost:8080/default_img/umpireDefault.png',
          'Chat',
          '2019-12-04T10:46:44.588Z',
          '2',
          'Already ended * ^__^',
          '2019-12-04T10:46:44.589Z',
          '1-3b7a6f950ff8f669bc20e5e3fe851b3e',
          ''
        ],
        [
          'Blue HQ',
          'White',
          '#FCFBEE',
          'Game Control',
          'http://localhost:8080/default_img/umpireDefault.png',
          'Chat',
          '2019-12-04T10:46:13.211Z',
          '2',
          'I am going to end turn',
          '2019-12-04T10:46:13.213Z',
          '1-abe31adf1e6fcfd150439be0c35be96e',
          ''
        ],
        [
          'Blue Chat',
          'Blue',
          '#3dd0ff',
          'CO',
          'http://localhost:8080/default_img/forceDefault.png',
          'Chat',
          '2019-12-04T10:44:11.017Z',
          '1',
          'Test message (chat) 2',
          '2019-12-04T10:44:11.017Z',
          '1-70a3539a935743ba03e2b6181877c9ae',
          ''
        ],
        [
          'Blue Chat',
          'Blue',
          '#3dd0ff',
          'CO',
          'http://localhost:8080/default_img/forceDefault.png',
          'Chat',
          '2019-12-04T10:43:57.065Z',
          '1',
          'Test message (chat) 1',
          '2019-12-04T10:43:57.067Z',
          '1-7903abe9663e43b0c2bdf292d2abe1d6',
          ''
        ]
      ]
    },
    {
      title: 'PG19 Weekly Orders',
      items: [
        [
          'CHANNEL',
          'FORCE',
          'FORCECOLOR',
          'ROLE',
          'ICON',
          'MESSAGETYPE',
          'TIMESTAMP',
          'GAMETURN',
          'COMMANDERSINTENT',
          'ORDERS_0 UNIT',
          'ORDERS_0 ORDERS',
          'ORDERS_0 CONTINGENCYORDERS',
          'PXTASKING',
          'ALLIEDUNITTASKING',
          'FORCEACTIONONCONTACT',
          'FORCEACTIONONLOSSOFCONTACT',
          'SUPPORTINGLOGISTICSACTIVITY',
          '_ID',
          '_REV'
        ],
        [
          'Blue HQ',
          'Blue',
          '#3dd0ff',
          'CO',
          'http://localhost:8080/default_img/forceDefault.png',
          'PG19 Weekly Orders',
          '2019-12-04T10:44:55.754Z',
          '1',
          'Test message Commanders Intent',
          'Unit 1',
          'First order',
          '',
          'Tasking',
          'unit tasking',
          '',
          '',
          '',
          '2019-12-04T10:44:55.754Z',
          '1-5aac5f7ed2d08b2844cfd8a62bedf66d'
        ]
      ]
    }
  ]
}

describe('exportItems actions', () => {
  it('gets wargame and ActionConstant.CREATE_EXPORT_ITEM after successful mapping', async () => {
    const store = mockStore({})

    store.dispatch(createMessageExportItem(wargame))

    const [action] = store.getActions()

    // check type
    expect(action.type).toEqual(ActionConstants.CREATE_EXPORT_ITEM)
    // check payload object
    expect(typeof action.payload).toEqual('object')
    expect(typeof action.payload.type).toEqual('string')
    expect(typeof action.payload.title).toEqual('string')
    expect(typeof action.payload.wargame).toEqual('string')
    expect(Array.isArray(action.payload.data)).toBeTruthy()
    // if have items check items object props
    if (action.payload.data.length) {
      expect(action.payload.data.filter((tab: any) => (
        !tab.title || !Array.isArray(tab.items))
      ).length).toEqual(0)
    }
  })
})

describe('exportItems reducer', () => {
  it('should save export item data', () => {
    const exportItemAction: ExportItemsUiActionTypes = {
      type: ActionConstants.CREATE_EXPORT_ITEM,
      payload: exportItem
    }
    expect(exportItems({ data: [], loader: false }, exportItemAction)).toEqual({ data: [exportItem], loader: false })
  })
})
