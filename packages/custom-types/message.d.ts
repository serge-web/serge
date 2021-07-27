import {
  CUSTOM_MESSAGE,
  INFO_MESSAGE,
  CHAT_MESSAGE,
  FEEDBACK_MESSAGE,
  FORCE_LAYDOWN,
  VISIBILITY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD,
  INFO_MESSAGE_CLIPPED,
  CREATE_TASK_GROUP,
  LEAVE_TASK_GROUP,
  HOST_PLATFORM,
  DELETE_PLATFORM,
  CollaborativeMessageStates
} from '@serge/config'

import Perception from './perception'
import PlannedRoute from './planned-route'
import Visibility from './visibility'
import Asset from './asset'
import Role from './role'
import { StateOfWorld } from '.'
import Wargame from './wargame'


/** additional message detail used for management of RFIs */
export interface RFIData {
  // current state
  status: CollaborativeMessageStates,
  // id of current owner
  owner: string,
  // response to RFI
  answer: string
}

export interface MessageDetailsFrom {
  /** id of user force
   * TODO: check we're using id, not force name
   */
  force: string,
  /** CSS color shade for this force */
  forceColor: string,
  /** role of the individual that wrote message */
  role: string,
  /** URL of icon to display for this force
   * TODO: once all code under TypeScript try making it non-optional,
   * and fix cases where it's not assigned
   */
  /**
   * @deprecated use iconURL instead
   */
  icon?: string,
  iconURL: string,
  /** user-name, as typed into Feedback/insights form */
  name?: string
}

export interface MessageDetails {
  /** id of channel message sent from */
  channel: string,
  /** details of author */
  /** enumerated types for message (see typeof entries in child interfaces) */
  from: MessageDetailsFrom,
  /**
   * extra data for when message being edited collaboratively
   */
  collaboration?: CollaborationDetails
  messageType: string,
  /** time message sent */
  timestamp: string,
  /** private (umpire-only) component of message, potentially to
   * explain source for answer, or assumptions made
   */
  privateMessage?: string,
  /** data related to RFI (Request for Information) */
  rfi?: RFIData
}

export interface MessageStructure {
  /** TODO: Ian thinks could be a structure for formatted messages. This Message
   * type is initially just being used for Admin messages - which are pure chat.
   * Once we have in-game messages, we should encounter structured messages
   */
  [property: string]: any
  title?: string
  content?: string
}

export interface CoreMessage {
  /** unique id (PouchDB for this document) */
  readonly _id: string
  /** PouchDB revision for this document */
  _rev?: string
  /** admin detail for message */
  readonly details: MessageDetails,
}

/** data for a message that is being
 * collaboarively edited
 */
export interface CollaborationDetails {
  /**
   * Message status
   */
   status: CollaborativeMessageStates
   /**
    * Current message owner
    */
   owner?: Role['name']
   /**
    * response to message, only used in RFIs
    */
   response?: string
   /** 
    * feedback on last version
    */
   feedback?: string
}

export interface MessageCustom extends CoreMessage {
  messageType: typeof CUSTOM_MESSAGE,
  message: MessageStructure,
  isOpen: boolean
  hasBeenRead: boolean
  gameTurn?: number,
  feedback?: boolean,
  infoType?: boolean,
}

export interface ChatMessage extends CoreMessage {
  messageType: typeof CHAT_MESSAGE,
  message: MessageStructure
}

export interface MessageFeedback extends CoreMessage {
  messageType: typeof FEEDBACK_MESSAGE,
  message: MessageStructure
}

/** message containing updated game status, could be one of:
 * new turn
 * updated wargame
 */
export interface MessageInfoType extends Wargame {
  messageType: typeof INFO_MESSAGE,
  infoType: boolean,
  gameTurn: number
}

/**
  * Mapped/Clipped version of MessageInfoType for channel
  */
export interface MessageInfoTypeClipped {
  messageType: typeof INFO_MESSAGE_CLIPPED,
  details: {
    /** id of channel `infoTypeChannelMarker${uniqId.time()}` */
    channel: string
  },
  infoType: boolean,
  gameTurn: number,
  isOpen: boolean,
  hasBeenRead: boolean
  _id?: string
}

export interface MessageForceLaydown {
  messageType: typeof FORCE_LAYDOWN,
  readonly updates: Array<{uniqid: string, position: string}>
}
export interface MessagePerceptionOfContact {
  messageType: typeof PERCEPTION_OF_CONTACT,
  readonly assetId: string,
  readonly perception: Perception
}

/** two assets are going to join, to form a task group */
export interface MessageCreateTaskGroup {
  messageType: typeof CREATE_TASK_GROUP,
  /** id of the platform that was dragged onto another */
  readonly dragged: string,
  /** id of the target platform that other was dropped onto */
  readonly target: string
}

/** an asset is going to host another platform */
export interface MessageHostPlatform {
  messageType: typeof HOST_PLATFORM,
  /** id of the platform that was dragged onto another */
  readonly dragged: string,
  /** id of the target platform that other was dropped onto */
  readonly target: string
}

/** an asset is leaving a task group, navigating to top level */
export interface MessageLeaveTaskGroup {
  messageType: typeof LEAVE_TASK_GROUP,
  /** id of the platform that was dragged to the top level */
  readonly dragged: string,
}

export interface MessageVisibilityChanges {
  messageType: typeof VISIBILITY_CHANGES,
  readonly visibility: Visibility[],
  readonly assetId: string,
  condition?: string
}


export interface MessageDeletePlatform {
  messageType: typeof DELETE_PLATFORM,
  readonly assetId: string,
}

export interface MessageSubmitPlans {
  readonly messageType: typeof SUBMIT_PLANS,
  readonly plannedRoutes: PlannedRoute[]
}

export interface MessageStateOfWorld {
  messageType: typeof STATE_OF_WORLD,
  readonly state: StateOfWorld
}

export type MessageMap = MessageForceLaydown |
                         MessagePerceptionOfContact |
                         MessageVisibilityChanges |
                         MessageSubmitPlans |
                         MessageStateOfWorld |
                         MessageCreateTaskGroup |
                         MessageLeaveTaskGroup | 
                         MessageHostPlatform |
                         MessageDeletePlatform


export type MessageChannel = MessageInfoTypeClipped |
                             MessageCustom

type Message = MessageCustom |
               ChatMessage |
               MessageFeedback |
               MessageInfoTypeClipped |
               MessageMap |
               MessageInfoType

export default Message
