
import ExpiredStorage from 'expired-storage'
// import { Wargame } from 'src/custom-types'

/** name of the document used to store the initial wargame definition */
export const DEFAULT_SERVER = 'Nelson'
export const DEFAULT_PORT = '8080'

export const MSG_STORE = 'messages'
export const SERGE_INFO = 'serge_info'
export const CHAT_CHANNEL_ID = 'game-admin'

export const PLANNING_PHASE = 'planning'
export const ADJUDICATION_PHASE = 'adjudication'

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
