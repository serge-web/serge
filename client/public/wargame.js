import { wargameSettings } from 'src/config'

const assetConditions = [
  'Working',
  'Disabled',
  'Immobile',
  'Destroyed'
]

const platformTypes = [
  {
    name: 'Fisherman',
    icon: 'fisherman.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15],
    conditions: assetConditions,
    states: {
      Transitting: {
        mobile: true
      },
      Fishing: {
        mobile: false
      },
      Moored: {
        mobile: false
      }
    }
  },
  {
    name: 'Frigate',
    icon: 'frigate.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15, 20, 25],
    conditions: assetConditions,
    states: {
      Transitting: {
        mobile: true
      },
      Escorting: {
        mobile: true
      },
      Pursuing: {
        mobile: true
      }
    }
  },
  {
    name: 'MPA',
    icon: 'aircraft.svg',
    travelMode: 'air',
    speedKts: [],
    conditions: assetConditions,
    states: {
      Landed: {
        mobile: true
      },
      Transitting: {
        mobile: true
      },
      Patrolling: {
        mobile: true
      },
      Searching: {
        mobile: true
      },
      Prosecuting: {
        mobile: true
      }
    }
  },
  {
    name: 'Coastal Battery',
    icon: 'missile.svg',
    travelMode: 'land',
    conditions: assetConditions,
    states: {
      LocationPending: {
        mobile: false
      },
      Active: {
        mobile: true
      },
      Prosecuting: {
        mobile: true
      }
    }
  },
  {
    name: 'Dhow',
    icon: 'fisherman.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15],
    conditions: assetConditions,
    states: {
      LocationPending: {
        mobile: false
      },
      Transitting: {
        mobile: true
      },
      Fishing: {
        mobile: false
      },
      Attacking: {
        mobile: true
      },
      Minelaying: {
        mobile: false
      },
      Evading: {
        mobile: true
      }
    }
  },
  {
    name: 'Tanker',
    icon: 'merchant.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15, 20],
    conditions: assetConditions,
    states: ['Moored', 'Transitting']
  }
]

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
  assets: [
    {
      name: 'Frigate',
      platformType: 'Frigate',
      position: 'P21',
      state: 'Transitting',
      visibleTo: {
        Blue2: true,
        Red2: true
      },
      perceptions: {
        Blue2: 'Blue2',
        Red2: 'Blue2'
      }
    },
    {
      name: 'MPA',
      platformType: 'MPA',
      position: 'C17',
      state: 'Landed',
      visibleTo: {
        Blue2: true,
        Red2: false
      },
      perceptions: {
        Blue2: 'Blue2',
        Red2: 'Blue2'
      }
    },
    {
      name: 'Tanker',
      platformType: 'Tanker',
      position: 'S23',
      state: 'Transitting',
      visibleTo: {
        Blue2: true,
        Red2: false
      },
      perceptions: {
        Blue2: 'Blue2',
        Red2: 'Blue2'
      }
    }
  ],
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
  assets: [
    {
      name: 'Dhow-A',
      platformType: 'Dhow',
      position: 'N04',
      state: 'LocationPending',
      visibleTo: {
        Blue2: false,
        Red2: true
      },
      perceptions: {
        Blue2: 'green',
        Red2: 'red2'
      }
    },
    {
      name: 'Dhow-B',
      platformType: 'Dhow',
      position: 'N10',
      state: 'LocationPending',
      visibleTo: {
        Blue2: false,
        Red2: true
      },
      perceptions: {
        Blue2: 'green',
        Red2: 'red2'
      }
    },
    {
      name: 'Dhow-C',
      platformType: 'Dhow',
      position: 'Q18',
      state: 'LocationPending',
      visibleTo: {
        Blue2: false,
        Red2: true
      },
      perceptions: {
        Blue2: 'green',
        Red2: 'red2'
      }
    },
    {
      name: 'Missile-A',
      platformType: 'Coastal Battery',
      position: 'Q12',
      state: 'LocationPending',
      visibleTo: {
        Blue2: false,
        Red2: true
      },
      perceptions: {
        Blue2: 'red2',
        Red2: 'red2'
      }
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
  assets: [
    {
      name: 'Tanker-1',
      platformType: 'Tanker',
      position: 'G00',
      state: 'Transitting',
      visibleTo: {
        Blue2: false,
        Red2: false
      },
      perceptions: {
        Blue2: 'Green',
        Red2: ''
      },
      plannedTurns: {
        T01: { state: 'Transitting', speed: 20, route: ['H00', 'H01', 'H02', 'H03'] },
        T02: { state: 'Transitting', speed: 20, route: ['I04', 'I05', 'I06', 'I06'] },
        T03: { state: 'Transitting', speed: 20, route: ['I07', 'I08', 'I09', 'I10'] },
        T04: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
        T05: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
        T06: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
        T07: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
        T08: { state: 'Moored', speed: 0 },
        T09: { state: 'Moored', speed: 0 },
        T1O: { state: 'Moored', speed: 0 }
      }
    },
    {
      name: 'Tanker-2',
      platformType: 'Tanker',
      position: 'C00',
      state: 'Transitting',
      visibleTo: {
        Blue2: true,
        Red2: false
      },
      perceptions: {
        Blue2: 'Green',
        Red2: ''
      },
      plannedTurns: {
        T01: { state: 'Moored', speed: 0 },
        T02: { state: 'Transitting', speed: 20, route: ['C00', 'C01', 'C02', 'C03'] },
        T03: { state: 'Transitting', speed: 20, route: ['C04', 'C05', 'C06', 'C07'] },
        T04: { state: 'Transitting', speed: 20, route: ['D07', 'E08', 'F08', 'G08'] },
        T05: { state: 'Transitting', speed: 20, route: ['H08', 'H09', 'I09', 'I10'] },
        T06: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
        T07: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
        T08: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
        T09: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
        T10: { state: 'Transitting', speed: 20, route: ['R22', 'S22', 'T22', 'U23'] }
      }
    },
    {
      name: 'Fisher-A',
      platformType: 'Fisherman',
      position: 'M02',
      state: 'Transitting',
      visibleTo: {
        Blue2: false,
        Red2: false
      },
      perceptions: {
        Blue2: 'green',
        Red2: 'green'
      },
      plannedTurns: {
        T01: { state: 'Transitting', speed: 10, route: ['L02', 'K03'] },
        T02: { state: 'Transitting', speed: 20, route: ['J03', 'I04'] },
        T03: { state: 'Fishing', speed: 0 },
        T04: { state: 'Transitting', speed: 10, route: ['I05', 'I06'] },
        T05: { state: 'Transitting', speed: 10, route: ['I07', 'I08'] },
        T06: { state: 'Fishing', speed: 0 },
        T07: { state: 'Transitting', speed: 10, route: ['J07', 'K07'] },
        T08: { state: 'Transitting', speed: 10, route: ['L06', 'M06'] },
        T09: { state: 'Fishing', speed: 0 },
        T10: { state: 'Transitting', speed: 10, route: ['M05', 'M04'] }
      }
    },
    {
      name: 'Fisher-B',
      platformType: 'Fisherman',
      position: 'N08',
      state: 'Transitting',
      visibleTo: {
        Blue2: false,
        Red2: false
      },
      perceptions: {
        Blue2: 'green',
        Red2: 'green'
      },
      plannedTurns: {
        T01: { state: 'Transitting', speed: 10, route: ['M09', 'L09'] },
        T02: { state: 'Fishing', speed: 0 },
        T03: { state: 'Transitting', speed: 10, route: ['K10', 'K09'] },
        T04: { state: 'Transitting', speed: 10, route: ['K08', 'K07'] },
        T05: { state: 'Transitting', speed: 10, route: ['K06', 'M06'] },
        T06: { state: 'Fishing', speed: 0 },
        T07: { state: 'Transitting', speed: 10, route: ['N06', 'N07'] },
        T08: { state: 'Transitting', speed: 10, route: ['M08', 'L08'] },
        T10: { state: 'Fishing', speed: 0 },
        T11: { state: 'Fishing', speed: 0 }
      }
    },
    {
      name: 'Fisher-C',
      platformType: 'Fisherman',
      position: 'N11',
      state: 'Transitting',
      visibleTo: {
        Blue2: false,
        Red2: false
      },
      perceptions: {
        Blue2: 'green',
        Red2: 'green'
      },
      plannedTurns: {
        T01: { state: 'Transitting', speed: 10, route: ['M11', 'L10'] },
        T02: { state: 'Transitting', speed: 20, route: ['K10', 'J09'] },
        T03: { state: 'Fishing', speed: 0 },
        T04: { state: 'Transitting', speed: 10, route: ['K08', 'K07'] },
        T05: { state: 'Transitting', speed: 10, route: ['K06', 'M06'] },
        T06: { state: 'Fishing', speed: 0 },
        T07: { state: 'Transitting', speed: 10, route: ['N06', 'N07'] },
        T08: { state: 'Transitting', speed: 10, route: ['M08', 'L08'] },
        T09: { state: 'Fishing', speed: 0 },
        T10: { state: 'Transitting', speed: 10, route: ['M09', 'N08'] }
      }
    }
  ],
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
    },
    platformTypes: {
      name: 'Platform Types',
      platformTypes: platformTypes,
      selectedType: '',
      dirty: false
    }
  },
  wargameInitiated: false,
  gameTurn: 0,
  phase: 'planning',
  turnEndTime: null,
  adjudicationStartTime: '2019-07-05T14:00Z'
}
