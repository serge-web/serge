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

export const expiredStorage = new ExpiredStorage()
export const LOCAL_STORAGE_TIMEOUT = 2592000 // one month

export const UMPIRE_FORCE = 'umpire'
export const UMPIRE_FORCE_NAME = 'white'

export const LOCATION_PENDING = 'LocationPending' // special state where platforms can be moved at turn zero

export const UNKNOWN_TYPE = 'Unknown' // type use when force or platform-type not known for mapping asset

//TODO: Some of the below would be better to either come from a database or be replaced with ENUMS

export const UMPIRE_LAYDOWN = LaydownTypes.UmpireLaydown

// special platform-type name, used for task group. Must match `platform-types` definition
export const TASK_GROUP = 'task-group'

/*
 * type for DATUM. @deprecated - since replaced with information-markers
 */
export const DATUM = 'datum'

// series of constants used for `messageType` when sending map events
export const FORCE_LAYDOWN = 'ForceLaydown'
export const VISIBILITY_CHANGES = 'VisibilityChanges'
export const DELETE_PLATFORM = 'DeletePlatform'
export const PERCEPTION_OF_CONTACT = 'PerceptionOfContact'
export const SUBMIT_PLANS = 'SubmitPlans'
export const STATE_OF_WORLD = 'StateOfWorld'
export const UPDATE_MARKER = 'UpdateMarker'
export const DELETE_MARKER = 'DeleteMarker'
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

// types of attribute
export const ATTRIBUTE_TYPE_NUMBER = 'AttributeTypeNumber'
export const ATTRIBUTE_VALUE_NUMBER = 'AttributeValueNumber'
export const ATTRIBUTE_TYPE_ENUM = 'AttributeTypeEnum'
export const ATTRIBUTE_VALUE_ENUM = 'AttributeValueEnum'

// Chat template ID
export const CHAT_MESSAGE_TEMPLATE_ID = 'k16eedkl'

// value to use in DataTable filters for value not present
export const EMPTY_CELL = '[Empty]'

// name of property used for storing time/type of last activity
export const ACTIVITY_TIME = 'activityTime'
export const ACTIVITY_TYPE = 'activityType'

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

const { hostname, protocol, href, origin } = window.location

export const baseUrl = () => {
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

export const clearAll = 'clearAll'
export const allDbs = 'allDbs'
// Note: On heroku we don't use the additional port for the socket, we use the plain origin
export const socketPath = origin.toLowerCase().indexOf('herokuapp') !== -1 ? origin : origin.replace(/3000|8080/g, '4000')
export const replicate = 'replicate/'
export const deletePath = 'delete/'
/** name of the document used to store the initial wargame definition */
export const wargameSettings = 'initial_wargame'
export const settings = 'settings'
// default name for role name
export const NEW_ROLE = 'New Role'

/** flag to indicate a role can control all assets */
export const CONTROL_ALL = 'control-all:'

// 
/** there has been some user interaction, so log the current time
 * The storage we're using is shared across browser tabs, so previously
 * one session would overwrite the history for another. So, we prepend the
 * activity type with the role name - to let one player use multiple tabs.
 * @param role - current role id
 * @param event - name of event that just happened
 */
export const setActivityTime = (role: string, event: string): void  => {
  expiredStorage.setItem(`${role}_${ACTIVITY_TYPE}`, event) 
  expiredStorage.setItem(`${role}_${ACTIVITY_TIME}`, `${new Date().getTime()}`) 
}
