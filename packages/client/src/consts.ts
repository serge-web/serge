import uniqId from 'uniqid'
import moment from 'moment'
import ExpiredStorage from 'expired-storage'
import * as Globals from '@serge/config'
import { Wargame } from '@serge/custom-types'

/** name of the document used to store the initial wargame definition */
export const DEFAULT_SERVER = 'Nelson'
export const DEFAULT_PORT = '8080'

export const MSG_STORE = 'messages'
export const SERGE_INFO = 'serge_info'
export const CHAT_CHANNEL_ID = 'game-admin'

export const PLANNING_PHASE = 'planning'
export const ADJUDICATION_PHASE = 'adjudication'

export const ADMIN_ROUTE = '/serge/admin'
export const MESSAGE_TEMPLATE_ROUTE = '/serge/messageTemplates'
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
export const STORYBOOK_ROUTE = './storybook'

export const expiredStorage = new ExpiredStorage()
export const LOCAL_STORAGE_TIMEOUT = 2592000 // one month

export const MAX_LISTENERS = 82

export const UMPIRE_FORCE = 'umpire'

export const LOCATION_PENDING = 'LocationPending' // special state where platforms can be moved at turn zero

// return states of adjudication form
export const PLAN_ACCEPTED = 'accepted'
export const PLAN_REJECTED = 'rejected'

// names of special channels
export const CHANNEL_RFI_STATUS = 'rfis'
export const CHANNEL_MAPPING = 'mapping'

// NOTE: time period to wait if server returns an error. One frequent cause of error
// during development is that the server is stopped.  We're introducing a
// throttle value to prevent the browser going into a race condition
// as it sends 1000s of requests to the server
export const ERROR_THROTTLE = 3000

// Interval for check server heartbeats
export const SERVER_PING_INTERVAL = 20000

// Nov 2019. Ian modified the server path to use the
// current URL, so we can use Heroku to provide
// review instances of the app.  In these
// review instances, we can't predict the URL, so
// were failing CORS test
export const baseUrl = () => {
  const { hostname, protocol } = window.location
  // @ts-ignore
  const host = (new URL(window.location)).searchParams.get('host')

  // NOTE: for all non-heroku deployments, we need to append the port number
  const portDetails = hostname.toLowerCase().indexOf('herokuapp') !== -1 ? '' : ':' + DEFAULT_PORT

  const res = host || `${protocol}//${hostname}` + portDetails

  return res
}

export const serverPath = (
  // @ts-ignore
  window.G_CONFIG.REACT_APP_SERVER_PATH || process.env.REACT_APP_SERVER_PATH || baseUrl() + '/'
).replace(/\/?$/, '/')

export const databasePath = `${serverPath}db/`

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
  description: `You have arrived at the Development Centre Gaming Facility.\n
  You will use this web-based application to interact with players from other forces, together with the umpires in the White Cell.\n
  At any point during your time here you can submit insights via the Insights button at the top-right of the gaming page.\n
  These insights could relate to the current doctrine being explored, the performance of your force, or how the game is being organised / facilitated.\n
  Thanks in advance for your participation.\n
  Maj Duncan Dare, PO1 Gaming`,
  showAccessCodes: true
}

export const forceTemplate = {
  name: '',
  uniqid: '',
  overview: 'An overview written here..',
  roles: [
    {
      name: 'CO',
      roleId: `p${uniqId.time()}`,
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false
    }
  ],
  iconURL: serverPath + 'default_img/forceDefault.png',
  color: '#3dd0ff',
  umpire: false,
  dirty: false
}

export const umpireForceTemplate = {
  name: 'White',
  uniqid: 'umpire',
  overview: 'Umpire force.',
  roles: [
    {
      name: 'Game Control',
      roleId: `p${uniqId.time()}`,
      isGameControl: true,
      isObserver: true,
      isInsightViewer: true
    }
  ],
  iconURL: serverPath + 'default_img/umpireDefault.png',
  color: '#FCFBEE',
  umpire: true,
  dirty: false
}

export const channelTemplate = {
  name: '',
  uniqid: '',
  participants: []
}

export const dbDefaultPlaylogSettings = {
  wargame: 'missing',
  role: 'missing',
  activityType: {
    aType: 'pending'
  },
  activityTime: '',
  _id: new Date().toISOString(), 
  isOpen: false
}

export const dbDefaultSettings: Wargame = {
  _id: Globals.wargameSettings,
  wargameTitle: '',
  name: '',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: '',
      // spatialRepresentation: '',
      gameTurnTime: {
        unit: 'millis',
        millis: 43200000
      },
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      // turnStrategy: '',
      gameDate: moment(new Date(), moment.ISO_8601).format(),
      showAccessCodes: true,
      logPlayerActivity: true,
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [umpireForceTemplate],
      selectedForce: umpireForceTemplate,
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [],
      selectedChannel: '',
      dirty: false
    }
  },
  wargameList: [],
  wargameInitiated: false,
  gameTurn: 0,
  phase: ADJUDICATION_PHASE,
  adjudicationStartTime: moment(new Date(), moment.ISO_8601).format()
}

export const FLEX_LAYOUT_MODEL_DEFAULT: any = {
  global: {
    tabSetTabStripHeight: 45,
    tabEnableClose: false,
    tabEnableRenderOnDemand: false
  },
  borders: [],
  layout: {
    type: 'row' as string,
    weight: 100,
    children: [
    ]
  }
}
