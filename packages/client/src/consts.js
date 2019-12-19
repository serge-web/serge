import uniqId from 'uniqid'
import moment from 'moment'
import ExpiredStorage from 'expired-storage'

// Nov 2019. Ian modified the server path to use the
// current URL, so we can use Heroku to provide
// review instances of the app.  In these
// review instances, we can't predict the URL, so
// were failing CORS test
export const serverPath = (
  window.G_CONFIG.REACT_APP_SERVER_PATH || process.env.REACT_APP_SERVER_PATH || window.location.origin + '/'
).replace(/\/?$/, '/')

// export const serverPath = 'http://localhost:8080/';
/*
for development just create .env.local file in client folder and add line,
it's under gitignore and you don't need change this value before every deployment:
REACT_APP_SERVER_PATH='http://localhost:8080/'
*/

export const databasePath = `${serverPath}db/`

export const DEFAULT_SERVER = 'Nelson'
export const DEFAULT_PORT = '8080'

export const MSG_STORE = 'messages'
export const MSG_TYPE_STORE = 'message_types'
export const SERGE_INFO = 'serge_info'
export const CHAT_CHANNEL_ID = 'game-admin'

export const PLANNING_PHASE = 'planning'
export const ADJUDICATION_PHASE = 'adjudication'

export const ADMIN_ROUTE = '/serge/admin'
export const MESSAGE_TEMPLATE_ROUTE = '/serge/messageTemplates'
export const MESSAGE_LIBRARY_ROUTE = '/serge/messageLibrary'
export const MESSAGE_CREATOR_BASE_ROUTE = '/serge/messageCreator'
export const CREATE_TEMPLATE_ROUTE = '/create/template'
export const EDIT_TEMPLATE_ROUTE = '/edit/template'
export const CREATE_MESSAGE_ROUTE = '/create/message'
export const EDIT_MESSAGE_ROUTE = '/edit/message'
export const GAME_SETUP_ROUTE = '/serge/gameSetup'
export const WELCOME_SCREEN_EDIT_ROUTE = '/serge/editWelcomeScreen'
export const EXPORT_ROUTE = '/serge/export'
export const EXPORT_MESSAGES_SUBROUTE = '/messages'
export const EXPORT_FORCES_SUBROUTE = '/foeces'
export const EXPORT_PRINT_SUBROUTE = '/print/:id'
export const PLAYERUI_ROUTE = '/serge/player'
export const DEMO_ROUTE = '/serge/demo'

export const expiredStorage = new ExpiredStorage()
export const LOCAL_STORAGE_TIMEOUT = 2592000 // one month

export const MAX_LISTENERS = 82

export const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Authorization, Lang'
}

export const defaultGameInfo = {
  imageUrlSet: false,
  imageUrl: '/default_img/sergeDefault.png',
  title: 'Serge',
  description: `Welcome you have arrived at the development centre gaming facility.\n
  You will use this web-based application to interact with players from other forces, together with the umpires in the White Cell.\n
  At any point during your time here you can submit insights via the Insights button at the top-right of the gaming page.
  These insights could relate to the current doctrine being explored, the performance of your force, or how the game is being organised / facilitated.\n
  Thanks in advance for your participation.\n
  Maj Duncan Dare, PO1 Gaming`,
  showAccessCodes: false
}

export const forceTemplate = {
  name: '',
  uniqid: null,
  overview: 'An overview written here..',
  roles: [
    {
      name: 'CO',
      password: `p${uniqId.time()}`,
      control: false,
      isObserver: false,
      isInsightViewer: false
    }
  ],
  icon: serverPath + 'default_img/forceDefault.png',
  color: '#3dd0ff',
  umpire: false,
  dirty: false
}

export const platformTypesTemplate = [
  {
    name: 'Fisherman',
    icon: 'fisherman.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15],
    states: ['Transitting', 'Fishing']
  },
  {
    name: 'Frigate',
    icon: 'frigate.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15, 20, 25],
    states: ['Transitting', 'Escorting', 'Pursuing']
  },
  {
    name: 'MPA',
    icon: 'aircraft.svg',
    travelMode: 'air',
    speedKts: [],
    states: ['Landed', 'Transitting', 'Patrolling', 'Searching', 'Prosecuting']
  },
  {
    name: 'Coastal Battery',
    icon: 'missile.svg',
    travelMode: 'land',
    states: ['LocationPending', 'Active', 'Prosecuting']
  },
  {
    name: 'Dhow',
    icon: 'fisherman.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15],
    states: ['LocationPending', 'Transitting', 'Fishing', 'Attacking', 'Minelaying', 'Evading']
  },
  {
    name: 'Tanker',
    icon: 'merchant.svg',
    travelMode: 'sea',
    speedKts: [5, 10, 15, 20],
    states: ['Moored', 'Transitting']
  }
]

export const umpireForceTemplate = {
  name: 'White',
  uniqid: 'umpire',
  overview: 'Umpire force.',
  roles: [
    {
      name: 'Game Control',
      password: `p${uniqId.time()}`,
      control: true,
      isObserver: true,
      isInsightViewer: true
    }
  ],
  icon: serverPath + 'default_img/umpireDefault.png',
  color: '#FCFBEE',
  umpire: true,
  dirty: false
}

export const blueForceTemplate = {
  name: 'Blue2',
  uniqid: 'Blue2',
  overview: 'Blue force.',
  roles: [
    {
      name: 'CO',
      password: `p${uniqId.time()}`,
      control: false,
      isObserver: false,
      isInsightViewer: false
    }
  ],
  icon: serverPath + 'default_img/umpireDefault.png',
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

export const redForceTemplate = {
  name: 'Red2',
  uniqid: 'red2',
  overview: 'Red2 force.',
  roles: [
    {
      name: 'CO',
      password: `p${uniqId.time()}`,
      control: false,
      isObserver: false,
      isInsightViewer: false
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
  icon: serverPath + 'default_img/umpireDefault.png',
  color: '#F00',
  umpire: false,
  dirty: false
}

export const greenForceTemplate = {
  name: 'Green',
  uniqid: 'green',
  overview: 'Green Shipping',
  roles: [
    {
      name: 'CO',
      password: `p${uniqId.time()}`,
      control: false,
      isObserver: false,
      isInsightViewer: false
    }
  ],
  icon: serverPath + 'default_img/umpireDefault.png',
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
export const channelTemplate = {
  name: '',
  uniqid: '',
  participants: []
}

export const dbDefaultSettings = {
  _id: '_local/settings',
  wargameTitle: '',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: '',
      // spatialRepresentation: '',
      gameTurnTime: 43200000,
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      // turnStrategy: '',
      gameDate: moment(new Date(), moment.ISO_8601).format(),
      showAccessCodes: false,
      complete: false,
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [umpireForceTemplate, blueForceTemplate, redForceTemplate, greenForceTemplate],
      selectedForce: '',
      complete: false,
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [],
      selectedChannel: '',
      complete: false,
      dirty: false
    },
    platformTypes: {
      name: 'Platform Types',
      platformTypes: platformTypesTemplate,
      selectedChannel: '',
      complete: false,
      dirty: false
    }
  },
  wargameInitiated: false,
  gameTurn: 0,
  phase: ADJUDICATION_PHASE,
  turnEndTime: null,
  adjudicationStartTime: moment().format()
}

export const tmplForceLaydown = {
  type: 'ForceLaydown',
  data: {
    Red2: [
      { name: 'Dhow-A', location: 'N11' },
      { name: 'Dhow-B', location: 'N12' },
      { name: 'Dhow-C', location: 'O06' },
      { name: 'Missile-A', location: 'O07' }
    ]
  }
}

/** note: this is the state of the world after Red force laydown has
 * happened, and after white has sorted out initial visibility
 */
export const tmplStateOfWorld1 = {
  type: 'StateOfWorld',
  data: {
    Green: [
      { name: 'Tanker-1', visibleTo: { Blue2: true, Red2: false } },
      { name: 'Tanker-2', visibleTo: { Blue2: true, Red2: false } }
    ],
    Red2: [
      { name: 'Dhow-A', location: 'N11', visibleTo: { Blue2: false } },
      { name: 'Dhow-B', location: 'N12', visibleTo: { Blue2: true } },
      { name: 'Dhow-C', location: 'O06', visibleTo: { Blue2: false } },
      { name: 'Missile-A', location: 'O07', visibleTo: { Blue2: false } }
    ],
    Blue2: [
      { name: 'Frigate', visibleTo: { Red2: true } },
      { name: 'Tanker', visibleTo: { Red2: true } }
    ]
  }
}

/** here is some first sets of orders */
export const tmplOrdersBlue1 = {
  type: 'Orders',
  data: {
    name: 'Blue2',
    assets: [
      {
        name: 'Frigate',
        plannedTurns: {
          T01: { state: 'Transitting', speed: 20, route: ['P12', 'O21', 'O20', 'N19'] },
          T02: { state: 'Transitting', speed: 20, route: ['019', '018', '017', 'N17'] },
          T03: { state: 'Transitting', speed: 20, route: ['M17', 'L16', 'L15', 'L14'] }
        }
      },
      {
        name: 'Tanker',
        plannedTurns: {
          T01: { state: 'Transitting', speed: 10, route: ['S23', 'R22'] },
          T02: { state: 'Transitting', speed: 10, route: ['Q22', 'P21'] },
          T03: { state: 'Transitting', speed: 10, route: ['O21', 'O20'] }
        }
      }
    ]
  }
}

export const tmplOrdersRed1 = {
  type: 'Orders',
  data: {
    name: 'Red2',
    assets: [
      {
        name: 'Dhow-A',
        plannedTurns: {
          T01: { state: 'Transitting', speed: 10, route: ['M10', 'L10'] },
          T02: { state: 'Transitting', speed: 10, route: ['K11', 'J11'] },
          T03: { state: 'Transitting', speed: 10, route: ['J12', 'K13'] }
        }
      },
      {
        name: 'Dhow-B',
        plannedTurns: {
          T01: { state: 'Transitting', speed: 10, route: ['N13', 'N14'] },
          T02: { state: 'Transitting', speed: 10, route: ['N15', 'N16'] },
          T03: { state: 'Transitting', speed: 10, route: ['N17', 'N18'] }
        }
      },
      {
        name: 'Dhow-C',
        plannedTurns: {
          T01: { state: 'Transitting', speed: 10, route: ['N06', 'M06'] },
          T02: { state: 'Transitting', speed: 10, route: ['L05', 'K05'] },
          T03: { state: 'Transitting', speed: 10, route: ['J05', 'IO5'] }
        }
      }
    ]
  }
}

/** this is the SofW after a real move has happened */
export const tmplStateOfWorld2 = {
  type: 'StateOfWorld',
  data: {
    Green: [
      {
        name: 'Tanker-1',
        history: { T01: { state: 'Transitting', speed: 20, route: ['H00', 'H01', 'H02', 'H03'] } },
        plannedTurns: {
          T02: { state: 'Transitting', speed: 20, route: ['I04', 'I05', 'I06', 'I06'] },
          T03: { state: 'Transitting', speed: 20, route: ['I07', 'I08', 'I09', 'I10'] },
          T04: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
          T05: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
          T06: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
          T07: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
          T08: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
          T09: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
          T1O: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] }
        }
      },
      {
        name: 'Tanker-2',
        history: { T01: { state: 'Moored', speed: 0, route: ['C00'] } },
        plannedTurns: {
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
        history: { T01: { state: 'Transitting', speed: 10, route: ['L02', 'K03'] } },
        plannedTurns: {
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
        history: { T01: { state: 'Transitting', speed: 10, route: ['M09', 'L09'] } },
        plannedTurns: {
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
        history: { T01: { state: 'Transitting', speed: 10, route: ['M11', 'L10'] } },
        plannedTurns: {
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
    Red2: [
      {
        name: 'Dhow-A',
        history: { T01: { state: 'Transitting', speed: 10, route: ['M10', 'L10'] } },
        plannedTurns: {
          T02: { state: 'Transitting', speed: 10, route: ['K11', 'J11'] },
          T03: { state: 'Transitting', speed: 10, route: ['J12', 'K13'] }
        }
      },
      {
        name: 'Dhow-B',
        history: { T01: { state: 'Transitting', speed: 10, route: ['N13', 'N14'] } },
        plannedTurns: {
          T02: { state: 'Transitting', speed: 10, route: ['N15', 'N16'] },
          T03: { state: 'Transitting', speed: 10, route: ['N17', 'N18'] }
        }
      },
      {
        name: 'Dhow-C',
        history: { T01: { state: 'Transitting', speed: 10, route: ['N06', 'M06'] } },
        plannedTurns: {
          T02: { state: 'Transitting', speed: 10, route: ['L05', 'K05'] },
          T03: { state: 'Transitting', speed: 10, route: ['J05', 'IO5'] }
        }
      }
    ],
    Blue2: [
      {
        name: 'Frigate',
        history: { T01: { state: 'Transitting', speed: 20, route: ['P12', 'O21', 'O20', 'N19'] } },
        plannedTurns: {
          T02: { state: 'Transitting', speed: 20, route: ['019', '018', '017', 'N17'] },
          T03: { state: 'Transitting', speed: 20, route: ['M17', 'L16', 'L15', 'L14'] }
        }
      },
      {
        name: 'Tanker',
        history: { T01: { state: 'Transitting', speed: 10, route: ['S23', 'R22'] } },
        plannedTurns: {
          T02: { state: 'Transitting', speed: 10, route: ['Q22', 'P21'] },
          T03: { state: 'Transitting', speed: 10, route: ['O21', 'O20'] }
        }
      }
    ]
  }
}

/** and second of orders */
export const tmplOrdersBlue2 = {
  type: 'Orders',
  data: {
    name: 'Blue2',
    assets: [
      {
        name: 'Frigate',
        plannedTurns: {
          T04: { state: 'Transitting', speed: 20, route: ['K15', 'L14', 'L14', 'L12'] }
        }
      },
      {
        name: 'Tanker',
        plannedTurns: {
          T04: { state: 'Transitting', speed: 10, route: ['019', '018'] }
        }
      }
    ]
  }
}

export const tmplOrdersRed2 = {
  type: 'Orders',
  data: {
    name: 'Red2',
    assets: [
      {
        name: 'Dhow-A',
        plannedTurns: {
          T04: { state: 'Transitting', speed: 10, route: ['L13', 'L14'] }
        }
      },
      {
        name: 'Dhow-B',
        plannedTurns: {
          T04: { state: 'Transitting', speed: 10, route: ['N19', 'N20'] }
        }
      },
      {
        name: 'Dhow-C',
        plannedTurns: {
          T04: { state: 'Transitting', speed: 10, route: ['H04', 'G04'] }
        }
      }
    ]
  }
}

/** this is the SofW after a real move has happened */
export const tmplStateOfWorld3 = {
  type: 'StateOfWorld',
  data: {
    Green: [
      {
        name: 'Tanker-1',
        history: {
          T01: { state: 'Transitting', speed: 20, route: ['H00', 'H01', 'H02', 'H03'] },
          T02: { state: 'Transitting', speed: 20, route: ['I04', 'I05', 'I06', 'I06'] }
        },
        plannedTurns: {
          T03: { state: 'Transitting', speed: 20, route: ['I07', 'I08', 'I09', 'I10'] },
          T04: { state: 'Transitting', speed: 20, route: ['I11', 'J11', 'J12', 'J13'] },
          T05: { state: 'Transitting', speed: 20, route: ['K14', 'L14', 'M15', 'M16'] },
          T06: { state: 'Transitting', speed: 20, route: ['M17', 'M18', 'N18', 'N19'] },
          T07: { state: 'Transitting', speed: 20, route: ['020', '021', 'P21', 'Q22'] },
          T08: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
          T09: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] },
          T1O: { state: 'Moored', speed: 20, route: ['Q23', 'Q23', 'Q23', 'Q23'] }
        }
      },
      {
        name: 'Tanker-2',
        history: {
          T01: { state: 'Moored', speed: 0, route: ['C00'] },
          T02: { state: 'Transitting', speed: 20, route: ['C00', 'C01', 'C02', 'C03'] }
        },
        plannedTurns: {
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
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['L02', 'K03'] },
          T02: { state: 'Transitting', speed: 20, route: ['J03', 'I04'] }
        },
        plannedTurns: {
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
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['M09', 'L09'] },
          T02: { state: 'Fishing', speed: 0 }
        },
        plannedTurns: {
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
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['M11', 'L10'] },
          T02: { state: 'Transitting', speed: 20, route: ['K10', 'J09'] }
        },
        plannedTurns: {
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
    Red2: [
      {
        name: 'Dhow-A',
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['M10', 'L10'] },
          T02: { state: 'Transitting', speed: 10, route: ['K11', 'J11'] }
        },
        plannedTurns: {
          T03: { state: 'Transitting', speed: 10, route: ['J12', 'K13'] },
          T04: { state: 'Transitting', speed: 10, route: ['L13', 'L14'] }
        }
      },
      {
        name: 'Dhow-B',
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['N13', 'N14'] },
          T02: { state: 'Transitting', speed: 10, route: ['N15', 'N16'] }
        },
        plannedTurns: {
          T03: { state: 'Transitting', speed: 10, route: ['N17', 'N18'] },
          T04: { state: 'Transitting', speed: 10, route: ['N19', 'N20'] }
        }
      },
      {
        name: 'Dhow-C',
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['N06', 'M06'] },
          T02: { state: 'Transitting', speed: 10, route: ['L05', 'K05'] }
        },
        plannedTurns: {
          T03: { state: 'Transitting', speed: 10, route: ['J05', 'IO5'] },
          T04: { state: 'Transitting', speed: 10, route: ['H04', 'G04'] }
        }
      }
    ],
    Blue2: [
      {
        name: 'Frigate',
        history: {
          T01: { state: 'Transitting', speed: 20, route: ['P12', 'O21', 'O20', 'N19'] },
          T02: { state: 'Transitting', speed: 20, route: ['019', '018', '017', 'N17'] }
        },
        plannedTurns: {
          T03: { state: 'Transitting', speed: 20, route: ['M17', 'L16', 'L15', 'L14'] },
          T04: { state: 'Transitting', speed: 20, route: ['K15', 'L14', 'L14', 'L12'] }
        }
      },
      {
        name: 'Tanker',
        history: {
          T01: { state: 'Transitting', speed: 10, route: ['S23', 'R22'] },
          T02: { state: 'Transitting', speed: 10, route: ['Q22', 'P21'] }
        },
        plannedTurns: {
          T03: { state: 'Transitting', speed: 10, route: ['O21', 'O20'] },
          T04: { state: 'Transitting', speed: 10, route: ['019', '018'] }
        }
      }
    ]
  }
}
