import {
  CUSTOM_MESSAGE,
  INFO_MESSAGE,
  FEEDBACK_MESSAGE,
  FORCE_LAYDOWN,
  VISIBILIY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD
} from '@serge/config'
// TODO: change it to @serge/config

import Perception from './perception'
import PlannedRoute from './planned-route'
import ForceData from './force-data'
import Vis from './vis'

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
  messageType: string,
  timestamp: string,
  privateMessage?: string
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
  _id: string
  /** PouchDB revision for this document */
  _rev?: string
  /** admin detail for message */
  details: MessageDetails,
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
  uniqid: string,
  position: string,
}
export interface MessagePerceptionOfContact {
  messageType: typeof PERCEPTION_OF_CONTACT,
  assetId: string,
  perception: Perception
}

export interface MessageVisibilityChanges {
  messageType: typeof VISIBILIY_CHANGES,
  payload: Vis[]
}
export interface MessageSubmitPlans {
  messageType: typeof SUBMIT_PLANS,
  name: string,
  comment: string,
  turn: number,
  force: string,
  plannedRoutes: PlannedRoute[]
}
export interface MessageStateOfWorld {
  messageType: typeof STATE_OF_WORLD,
  detail: {
    data: ForceData[]
  }
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
