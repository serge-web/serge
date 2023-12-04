import {
  CHAT_MESSAGE, CollaborativeMessageStates,
  COUNTER_MESSAGE, CUSTOM_MESSAGE, FEEDBACK_MESSAGE, INFO_MESSAGE, INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE
} from 'src/config'

import { ChannelCore, ForceData, ForceRole, TemplateBody, MessagePlanning, InteractionDetails, MessageAdjudicationOutcomes } from '.'
import Role from './role'
import Wargame from './wargame'

export interface MessageDetailsFrom {
  /** name of force - to be @deprecated
   */
  readonly force: ForceData['name']
  /** id of sending force */
  readonly forceId?: ForceData['uniqid']
  /** CSS color shade for this force */
  readonly forceColor: ForceData['color']
  /** role of the individual that wrote message */
  readonly roleId: Role['roleId']
  /** name of the role that send messsage */
  readonly roleName: Role['name']
  /** URL of icon to display for this force
   * TODO: once all code under TypeScript try making it non-optional,
   * and fix cases where it's not assigned
   */
  /**
   * @deprecated use iconURL instead
   */
  icon?: string
  iconURL: ForceData['iconURL']
  /** user-name, as typed into Feedback/insights form */
  name?: string
}

export interface MessageDetails {
  /** id of channel message sent from */
  channel: string
  /** details of author */
  /** enumerated types for message (see typeof entries in child interfaces) */
  from: MessageDetailsFrom
  /**
   * extra data for when message being edited collaboratively
   */
  collaboration?: CollaborationDetails
  /** 
   * extra detail for managing an interaction
   */
  interaction?: InteractionDetails
  /** ID of template for this message */
  messageType: TemplateBody['_id']
  /** time message sent */
  timestamp: string
  /** turn when this message was sent */
  turnNumber: number
  /** private (umpire-only) component of message, potentially to
   * explain source for answer, or assumptions made
   */
  privateMessage?: string
  /** 
   * Incremental counter for messages from this force, in this game.
   * Used server-side to generate `message.message.Reference`.
   * Only present for messages with `message.message.Reference`
   */
  counter?: number
  /** if this message has been archived */
  archived?: boolean
  /** if this message is to be excluded from adjudication */
  excluded?: boolean
}

export interface MessageStructure {
  /** TODO: Ian thinks could be a structure for formatted messages. This Message
   * type is initially just being used for Admin messages - which are pure chat.
   * Once we have in-game messages, we should encounter structured messages
   */
  [property: string]: any
  title?: string
  /** the reference number for this force in this game */
  Reference?: string
}

export interface CoreMessage {
  readonly messageType: string
  /** unique id (PouchDB for this document) */
  readonly _id: string
  /** PouchDB revision for this document */
  _rev?: string
  /** admin detail for message */
  readonly details: MessageDetails
  /** whether this message has been read on the current client */
  hasBeenRead?: boolean
}

/** 
 * instance of feedback on a collaborative document 
 */
export interface FeedbackItem {
  /** who the feedback is from */
  readonly fromId: Role['roleId']
  readonly fromName: Role['name']
  readonly fromForce: ForceData['name']
  /** when the feedback was provided */
  readonly date: string
  /** the feedback */
  readonly feedback: string
}

/** data for a message that is being
 * collaboarively edited
 */
export interface CollaborationDetails {
  /**
   * Message status
   */
  status: CollaborativeMessageStates
  /** date-time when the last change 
  * was made to this message
  */
  lastUpdated: string
  /**
   * Current message owner
   */
  owner?: ForceRole
  /**
   * structured response to message
   */
  response?: MessageStructure
  /** 
  * feedback on last version
  */
  feedback?: Array<FeedbackItem>
}

export interface MessageCustom extends CoreMessage {
  readonly messageType: typeof CUSTOM_MESSAGE
  /** the strutured message */
  message: MessageStructure
  /** whether this message is open/expanded on the current client */
  isOpen: boolean
  /** the game turn when this was sent */
  gameTurn?: number
  /** whether this represents an item of insight/feedback */
  feedback?: boolean
  /** whether this is a change in game state (rather than a new message),
   * normally `false` for messages like this
   */
  infoType?: boolean
}

/** 
 * instance of CounterMEssage for COA and RFI
 */
export interface MessageCounter {
  readonly messageType: typeof COUNTER_MESSAGE
  /** unique id (PouchDB for this document) */
  readonly _id: string
  /** PouchDB revision for this document */
  _rev?: string
  /** Force name used for Reference counter prefix **/
  readonly force: string
  /** Reference Counter **/
  counter: number
}

export interface ChatMessage extends CoreMessage {
  readonly messageType: typeof CHAT_MESSAGE
  message: MessageStructure
}

/** messages being used in support of adjudicating an interaction */
export interface MessageInteraction extends CoreMessage {
  readonly messageType: typeof INTERACTION_MESSAGE
  message: MessageAdjudicationOutcomes
}

export interface MessageFeedback extends CoreMessage {
  readonly messageType: typeof FEEDBACK_MESSAGE
  message: MessageStructure
}

/** message containing updated game status, could be one of:
 * new turn
 * updated wargame
 */
export interface MessageInfoType extends Wargame {
  readonly messageType: typeof INFO_MESSAGE
  infoType?: boolean
  gameTurn: number
}

/**
  * Mapped/Clipped version of MessageInfoType for channel
  */
export interface MessageInfoTypeClipped {
  readonly messageType: typeof INFO_MESSAGE_CLIPPED
  details: {
    /** id of channel `infoTypeChannelMarker${uniqId.time()}` */
    channel: ChannelCore['uniqid']
  }
  infoType: boolean
  gameTurn: number
  isOpen: boolean
  hasBeenRead: boolean
  _id?: string
}

export type MessageChannel = MessageInfoTypeClipped | MessagePlanning |
  MessageCustom

type Message = MessageCustom |
  MessagePlanning |
  ChatMessage |
  MessageFeedback |
  MessageInfoTypeClipped |
  MessageInfoType |
  MessageCounter

export default Message
