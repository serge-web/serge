import { wargameSettings } from 'src/config'

const umpireForce = {
  name: 'White',
  uniqid: 'umpire',
  overview: 'Umpire force.',
  roles: [{
    name: 'Game Control',
    isGameControl: true,
    isObserver: true,
    isInsightViewer: true,
    isRFIManager: true,
    roleId: 'r654643'
  }],
  icon: 'images/default_img/umpireDefault.png',
  color: '#FCFBEE',
  umpire: true,
  dirty: false
}

const blueForce = {
  name: 'Blue2',
  uniqid: 'Blue2',
  overview: 'Blue force.',
  roles: [
    {
      name: 'CO',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      roleId: 'r65463343'
    }
  ],
  icon: 'images/default_img/umpireDefault.png',
  color: '#00F',
  umpire: false,
  dirty: false
}

const redForce = {
  name: 'Red2',
  uniqid: 'red2',
  overview: 'Red2 force.',
  roles: [
    {
      name: 'CO',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      roleId: 'r651184643'
    }
  ],
  icon: 'images/default_img/umpireDefault.png',
  color: '#F00',
  umpire: false,
  dirty: false
}

const greenForce = {
  name: 'Green',
  uniqid: 'green',
  overview: 'Green Shipping',
  roles: [
    {
      name: 'CO',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      roleId: 'r656664643'
    }
  ],
  icon: 'images/default_img/umpireDefault.png',
  color: '#0F0',
  umpire: false,
  dirty: false
}

const channelsElement = [
  {
    name: 'Map',
    participants: [
      {
        force: 'White',
        forceUniqid: 'umpire',
        icon: 'http://192.168.1.118:8080/default_img/umpireDefault.png',
        roles: [
        ],
        subscriptionId: 'k4csjam2',
        templates: [
        ]
      },
      {
        force: 'Blue',
        forceUniqid: 'force-k4csikw8',
        icon: 'http://192.168.1.118:8080/default_img/forceDefault.png',
        roles: [
        ],
        subscriptionId: 'k4csjcow',
        templates: [
        ]
      },
      {
        force: 'Red',
        forceUniqid: 'force-k4csipl2',
        icon: 'http://192.168.1.118:8080/default_img/forceDefault.png',
        roles: [
        ],
        subscriptionId: 'k4csjf0f',
        templates: [
        ]
      }
    ],
    uniqid: 'channel-k4csiheo'
  }
]

export const wargame = {
  _id: wargameSettings,
  wargameTitle: 'imwarc_demo',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: 'Prototype wargame for imwarc 1/20',
      // spatialRepresentation: '',
      gameTurnTime: 43200000,
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      // turnStrategy: '',
      gameDate: '2023-07-05T14:00Z',
      showAccessCodes: true,
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [umpireForce, blueForce, redForce, greenForce],
      selectedForce: '',
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: channelsElement,
      selectedChannel: '',
      dirty: false
    }
  },
  wargameInitiated: false,
  gameTurn: 0,
  phase: 'planning',
  turnEndTime: null,
  adjudicationStartTime: '2019-07-05T14:00Z'
}
