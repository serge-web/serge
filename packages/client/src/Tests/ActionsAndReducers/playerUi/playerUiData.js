export default {
  selectedForce: 'umpire',
  forceColor: '#FCFBEE',
  selectedRole: 'Game Control',
  isObserver: true,
  controlUi: true,
  currentTurn: 0,
  phase: 'adjudication',
  gameDate: '2019-11-29T09:59:10+00:00',
  gameTurnTime: 43200000,
  realtimeTurnTime: 300000,
  turnEndTime: '2019-11-29T10:06:04+00:00',
  adjudicationStartTime: '2019-11-29T10:01:04+00:00',
  gameDescription: '12321',
  currentWargame: 'wargame-k3jz649d',
  wargameTitle: 'playerUiReducer tests',
  chatChannel: {
    name: 'game-admin',
    template: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          format: 'textarea',
          options: {
            inputAttributes: {
              placeholder: 'type the text'
            }
          }
        }
      },
      title: 'Chat',
      format: 'grid'
    },
    messages: [
      {
        details: {
          channel: 'game-admin',
          from: {
            force: 'White',
            forceColor: '#FCFBEE',
            role: 'Game Control',
            icon: 'http://localhost:8080/default_img/umpireDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2019-11-29T10:02:49.410Z'
        },
        message: {
          content: '123'
        },
        _id: '2019-11-29T10:02:49.410Z',
        _rev: '1-cc1ea3338b47ffb704eaed4814bebf35',
        hasBeenRead: false,
        isOpen: false
      },
      {
        details: {
          channel: 'game-admin',
          from: {
            force: 'White',
            forceColor: '#FCFBEE',
            role: 'Game Control',
            icon: 'http://localhost:8080/default_img/umpireDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2019-11-29T10:02:10.949Z'
        },
        message: {
          content: 'Test message'
        },
        _id: '2019-11-29T10:02:10.949Z',
        _rev: '1-042c4daec06a30add866e56913c54013',
        hasBeenRead: false,
        isOpen: false
      }
    ]
  },
  channels: {
    'channel-k3jz7591': {
      name: 'Black channel',
      templates: [],
      forceIcons: ['http://localhost:8080/default_img/forceDefault.png'],
      messages: [
        {
          details: {
            channel: 'infoTypeChannelMarkerk3k05yyt'
          },
          infoType: true,
          gameTurn: 0
        }
      ],
      unreadMessageCount: 0,
      observing: true
    },
    'channel-k3jz7h07': {
      name: 'White Channel',
      templates: [
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'Chat',
          details: {},
          completed: false,
          _id: 'k16eedkl',
          _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
        }
      ],
      forceIcons: [],
      messages: [
        {
          details: {
            channel: 'infoTypeChannelMarkerk3k05yyt'
          },
          infoType: true,
          gameTurn: 0
        }
      ],
      unreadMessageCount: 0,
      observing: false
    }
  },
  allChannels: [
    {
      name: 'Black channel',
      uniqid: 'channel-k3jz7591',
      participants: [
        {
          force: 'Black',
          forceUniqid: 'force-k3jz6bf4',
          roles: [],
          templates: [],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          subscriptionId: 'k3jz7eih'
        }
      ]
    },
    {
      name: 'White Channel',
      uniqid: 'channel-k3jz7h07',
      participants: [
        {
          force: 'White',
          forceUniqid: 'umpire',
          roles: [],
          templates: [],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          subscriptionId: 'k3jz7ndz'
        }
      ]
    }
  ],
  allForces: [
    {
      name: 'White',
      uniqid: 'umpire',
      overview: 'Umpire force.',
      roles: [
        {
          name: 'Game Control',
          password: 'pk3jz5y5j',
          control: true,
          isObserver: true,
          isInsightViewer: true
        }
      ],
      icon: 'http://localhost:8080/default_img/umpireDefault.png',
      color: '#FCFBEE',
      umpire: true,
      dirty: false
    },
    {
      name: 'Black',
      uniqid: 'force-k3jz6bf4',
      overview: 'An overview written here..',
      roles: [
        {
          name: 'CO',
          password: 'pk3jz6bf5',
          control: false,
          isObserver: false,
          isInsightViewer: false
        }
      ],
      icon: 'http://localhost:8080/default_img/forceDefault.png',
      color: '#3dd0ff',
      umpire: false,
      dirty: false
    }
  ],
  allTemplates: [
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'State of World',
      details: {}
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Daily intentions',
      details: {},
      completed: false,
      _id: 'k16eedkn',
      _rev: '1-cc8e8cdb01447959c266761066448382'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Link',
      details: {},
      completed: false,
      _id: 'k16eedkm',
      _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Chat',
      details: {},
      completed: false,
      _id: 'k16eedkl',
      _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Request for Support',
      details: {},
      completed: false,
      _id: 'k16eedkk',
      _rev: '1-4c3969d57f8cf470858dd1819ee5c2e8'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Request for Information',
      details: {},
      completed: false,
      _id: 'k16eedkj',
      _rev: '1-683379b9418a2ba688eb4a8dfec4de11'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Message',
      details: {},
      completed: false,
      _id: 'k16eedki',
      _rev: '1-7de33e447b392eeaf7164f4ec331bc57'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Weather forecast',
      details: {},
      completed: false,
      _id: 'k16eedkh',
      _rev: '1-f332e0104a371b590346b66dc8e9fa2b'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.704Z',
      title: 'Machinery failure',
      details: {},
      completed: false,
      _id: 'k16eedkg',
      _rev: '1-80fc0c1feca8eb6d812d3fa2068ffe89'
    }
  ],
  showObjective: false,
  wargameInitiated: true,
  feedbackMessages: [],
  tourIsOpen: false,
  modalOpened: null,
  showAccessCodes: true,
  timeWarning: 60000,
  isInsightViewer: true
};
