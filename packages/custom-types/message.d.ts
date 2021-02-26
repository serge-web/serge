import {
  CUSTOM_MESSAGE,
  INFO_MESSAGE,
  FEEDBACK_MESSAGE,
  FORCE_LAYDOWN,
  VISIBILITY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD,
  RFI_States
} from '@serge/config'

import Perception from './perception'
import PlannedRoute from './planned-route'
import Visibility from './visibility'
import { StateOfWorld } from '.'


/** additional message detail used for management of RFIs */
export interface RFIData {
  // current state
  status: RFI_States,
  // id of current owner
  owner: string,
  // response to RFI
  answer: string
}

export interface MessageDetails {
  /** id of channel message sent from */
  channel: string,
  /** details of author */
  from: {
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
    icon: string
    /** user-name, as typed into Feedback/insights form */
    name?: string
  }
  /** enumerated types for message (see typeof entries in child interfaces) */
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

export interface MessageCustom extends CoreMessage {
  messageType: typeof CUSTOM_MESSAGE,
  message: MessageStructure,
  isOpen: boolean
  hasBeenRead: boolean
  gameTurn?: number,
  feedback?: boolean,
  infoType?: boolean
}

export interface MessageFeedback extends CoreMessage {
  messageType: typeof FEEDBACK_MESSAGE,
  message: MessageStructure
}

/** message containing updated game status, could be one of:
 * new turn
 * updated wargame
 */
export interface MessageInfoType {
  messageType: typeof INFO_MESSAGE,
  details: {
    /** id of channel `infoTypeChannelMarker${uniqId.time()}` */
    channel: string
  },
  infoType: boolean,
  gameTurn: number,
  isOpen?: boolean,
  hasBeenRead?: boolean
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

export interface MessageVisibilityChanges {
  messageType: typeof VISIBILITY_CHANGES,
  readonly visibility: Visibility[]
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
                         MessageStateOfWorld


export type MessageChannel = MessageInfoType |
                             MessageCustom

type Message = MessageCustom |
               MessageFeedback |
               MessageInfoType |
               MessageMap

export default Message
