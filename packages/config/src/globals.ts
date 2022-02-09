import ExpiredStorage from 'expired-storage'
import { LaydownTypes } from './enums'

export const DEFAULT_SERVER = 'Nelson'
export const DEFAULT_PORT = '8080'

export const MSG_STORE = 'messages'
export const MSG_TYPE_STORE = 'message_types'
export const SERGE_INFO = 'serge_info'
export const CHAT_CHANNEL_ID = 'game-admin'

export const PLANNING_PHASE = 'planning'
export const ADJUDICATION_PHASE = 'adjudication'
export const LAYDOWN_TURN = 'laydown'

export const expiredStorage = new ExpiredStorage()
export const LOCAL_STORAGE_TIMEOUT = 2592000 // one month

export const MAX_LISTENERS = 82

export const UMPIRE_FORCE = 'umpire'
export const UMPIRE_FORCE_NAME = 'white'

export const LOCATION_PENDING = 'LocationPending' // special state where platforms can be moved at turn zero

//TODO: Some of the below would be better to either come from a database or be replaced with ENUMS

export const UMPIRE_LAYDOWN = LaydownTypes.UmpireLaydown

// special platform-type, used for task group. Must match `platform-types` definition
export const TASK_GROUP = 'task-group'

// series of constants used for `messageType` when sending map events
export const FORCE_LAYDOWN = 'ForceLaydown'
export const VISIBILITY_CHANGES = 'VisibilityChanges'
export const DELETE_PLATFORM = 'DeletePlatform'
export const PERCEPTION_OF_CONTACT = 'PerceptionOfContact'
export const SUBMIT_PLANS = 'SubmitPlans'
export const STATE_OF_WORLD = 'StateOfWorld'
export const CREATE_TASK_GROUP = 'CreateTaskGroup'
export const LEAVE_TASK_GROUP = 'LeaveTaskGroup'
export const HOST_PLATFORM = 'HostPlatform'

// series of constants used for `messageType` when sending custom messages
export const CUSTOM_MESSAGE = 'CustomMessage'

// series of constants used for `messageType` when sending chat messages
export const CHAT_MESSAGE = 'ChatMessage'

// series of constants used for `messageType` when sending feedback
export const FEEDBACK_MESSAGE = 'FeedbackMessage'

// series of constants used for `messageType` when using Counter message for COA and RFI messages
export const COUNTER_MESSAGE = 'CounterMessage'

// series of constants used for `messageType` when sending system messages
// an INFO_MESSAGE is an update to the wargame document
export const INFO_MESSAGE = 'InfoMessage'
export const INFO_MESSAGE_CLIPPED = 'InfoMessageClipped'

// return states of adjudication form
export const PLAN_ACCEPTED = 'accepted'
export const PLAN_REJECTED = 'rejected'

// export item types
export const EXPORT_ITEM_MESSAGES = 'messages'
export const EXPORT_ITEM_FORCES = 'forces'

// names of special channels
export const CHANNEL_RFI_STATUS = 'rfis'
export const CHANNEL_MAPPING = 'mapping'

// types of channel
export const CHANNEL_CHAT = 'ChannelChat'
export const CHANNEL_CUSTOM = 'ChannelCustom'
export const CHANNEL_COLLAB = 'ChannelCollab'

// types of participant
export const PARTICIPANT_CHAT = 'ParticipantChat'
export const PARTICIPANT_CUSTOM = 'ParticipantCustom'
export const PARTICIPANT_COLLAB = 'ParticipantCollab'
export const PARTICIPANT_MAPPING = 'ParticipantMapping'

// types of commodity
export const COMMODITY_TYPE_NUMBER = 'CommodityTypeNumber'
export const COMMODITY_VALUE_NUMBER = 'CommodityValueNumber'

// Chat template ID
export const CHAT_MESSAGE_TEMPLATE_ID = 'k16eedkl'

// value to use in DataTable filters for value not present
export const EMPTY_CELL = '[Empty]'

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
  const { hostname, protocol, href } = window.location
  const host = (new URL(href)).searchParams.get('host')

  // NOTE: for all non-heroku deployments, we need to append the port number
  const portDetails = hostname.toLowerCase().indexOf('herokuapp') !== -1 ? '' : ':' + DEFAULT_PORT

  const res = host || `${protocol}//${hostname}` + portDetails

  return res
}

export const serverPath = (
  // Removed G_CONFIG tempoararily.
  // window.G_CONFIG.REACT_APP_SERVER_PATH || process.env.REACT_APP_SERVER_PATH || baseUrl() + '/'
  process.env.REACT_APP_SERVER_PATH || baseUrl() + '/'
).replace(/\/?$/, '/')

export const databasePath = `${serverPath}db/`
export const iconUploaderPath = `${serverPath}saveIcon`
export const hiddenPrefix = '_#_'

// give database documents a suffix, so they're easier to open
// in database utility tools
export const dbSuffix = '.sqlite'
export const localSettings = '_local/settings'