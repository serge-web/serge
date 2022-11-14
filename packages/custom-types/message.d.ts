import {
  CHAT_MESSAGE, CLONE_MARKER, CollaborativeMessageStates,
  COUNTER_MESSAGE, CREATE_TASK_GROUP, CUSTOM_MESSAGE, DELETE_MARKER, DELETE_PLATFORM, FEEDBACK_MESSAGE, FORCE_LAYDOWN, HOST_PLATFORM, INFO_MESSAGE, INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, LEAVE_TASK_GROUP, PERCEPTION_OF_CONTACT, PLANNING_MESSAGE, STATE_OF_WORLD, SUBMIT_PLANS, UPDATE_MARKER, VISIBILITY_CHANGES
} from '@serge/config'

import { Geometry } from 'geojson'
import { Asset, ChannelCore, ForceData, ForceRole, HealthOutcome, HealthOutcomes, LocationOutcome, LocationOutcomes, MessageAdjudicationOutcomes, PerceptionOutcome, PerceptionOutcomes, PlannedActivityGeometry, PlanningActivity, StateOfWorld, TemplateBody } from '.'
import { MapAnnotation } from './map-annotation'
import Perception from './perception'
import PlannedRoute from './planned-route'
import Role from './role'
import Visibility from './visibility'
import Wargame from './wargame'

export interface MessageDetailsFrom {
  /** name of force - to be @deprecated
   */
  readonly force: ForceData['name'],
  /** id of sending force */
  readonly forceId?: ForceData['uniqid'],
  /** CSS color shade for this force */
  readonly forceColor: ForceData['color'],
  /** role of the individual that wrote message */
  readonly roleId: Role['roleId'],
  /** name of the role that send messsage */
  readonly roleName: Role['name'],
  /** URL of icon to display for this force
   * TODO: once all code under TypeScript try making it non-optional,
   * and fix cases where it's not assigned
   */
  /**
   * @deprecated use iconURL instead
   */
  icon?: string,
  iconURL: ForceData['iconURL'],
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
  /** 
   * extra detail for managing an interaction
   */
  interaction?: InteractionDetails
  /** ID of template for this message */
  messageType: TemplateBody['_id'],
  /** time message sent */
  timestamp: string,
  /** turn when this message was sent */
  turnNumber: number
  /** private (umpire-only) component of message, potentially to
   * explain source for answer, or assumptions made
   */
  privateMessage?: string,
  /** 
   * Incremental counter for messages from this force, in this game.
   * Used server-side to generate `message.message.Reference`.
   * Only present for messages with `message.message.Reference`
   */
  counter?: number
  /** if this message has been archived */
  archived?: boolean
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

/** Core elements of planning messages. These are the fields
 * we directly manipulate, or expect to be present. It is
 * defined as a `core` type to avoid the [property: string]
 * undefined elements that allow mis-named objects to fall
 * through TypeScript checking.
 */
export interface PlanningMessageStructureCore {
  /** unique id for this message thread 
   * Note: we use upper case Reference since the send-message logic expects that 
   * Note: in order to auto gen instances
  */
  Reference: string
  /** title for this plan */
  title: string
  /** start-time of this plan */
  startDate?: string
  /** end-time of this plan */
  endDate?: string
  /** any location-related data */
  location?: PlannedActivityGeometry[]
  /** own assets involved in plan */
  ownAssets?: Array<{ asset: Asset['uniqid'], number: number}>
  /** other assets involved in plan */
  otherAssets?: Array<Asset['uniqid']>
  /** id of the activity being conducted */
  activity: PlanningActivity['uniqid']
}

/** extend planning message to allow template entries
 */
export interface PlanningMessageStructure extends PlanningMessageStructureCore {
  /** allow template properties */
  [property: string]: any
}



/** Content of an interaction. Note: the fixed 
 * metadata is in the details.  It's the new (Editable)
 * content that is in here
 */
export interface InteractionMessageStructure {
  /** unique id for this message thread */
  Reference: string
  /** textual description of interaction */
  narrative?: string
  /** perception outcomes */
  perceptionOutcomes: PerceptionOutcome[]
  /** location outcomes */
  locationOutcomes: LocationOutcome[]
  /** condition outcomes */
  healthOutcomes: HealthOutcome[]
}

export interface CoreMessage {
  readonly messageType: string,
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

/** extra details regarding details of interactions 
 * NOTE: we use `From` details to denote who is adjudicating the interactions
*/
export interface InteractionDetails {
  /** unique id for this interaction (includes orders and geometries) */
  readonly id: string
  /** whether adjudication of this interaction is complete */
  complete?: boolean
  /** first set of orders this relates to */
  readonly orders1: string
  /** second (optional) set of orders this relates to */
  readonly orders2?: string
  /** interaction start time */
  readonly startTime: string
  /** interaction end time */
  readonly endTime: string
  /** geometry describing area of interaction */
  readonly geometry?: Geometry
}

export interface MessageCustom extends CoreMessage {
  readonly messageType: typeof CUSTOM_MESSAGE,
  /** the strutured message */
  message: MessageStructure,
  /** whether this message is open/expanded on the current client */
  isOpen: boolean
  /** the game turn when this was sent */
  gameTurn?: number,
  /** whether this represents an item of insight/feedback */
  feedback?: boolean,
  /** whether this is a change in game state (rather than a new message),
   * normally `false` for messages like this
   */
  infoType?: boolean,
}

/** 
 * instance of CounterMEssage for COA and RFI
 */
export interface MessageCounter {
  readonly messageType: typeof COUNTER_MESSAGE,
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
  readonly messageType: typeof CHAT_MESSAGE,
  message: MessageStructure
}

/** messages being used in support of planning */
export interface MessagePlanning extends CoreMessage {
  readonly messageType: typeof PLANNING_MESSAGE,
  message: PlanningMessageStructure
}

/** messages being used in support of adjudicating an interaction */
export interface MessageInteraction extends CoreMessage {
  readonly messageType: typeof INTERACTION_MESSAGE,
  message: InteractionMessageStructure
}

export interface MessageFeedback extends CoreMessage {
  readonly messageType: typeof FEEDBACK_MESSAGE,
  message: MessageStructure
}

/** message containing updated game status, could be one of:
 * new turn
 * updated wargame
 */
export interface MessageInfoType extends Wargame {
  readonly messageType: typeof INFO_MESSAGE,
  infoType: boolean,
  gameTurn: number
}

/**
  * Mapped/Clipped version of MessageInfoType for channel
  */
export interface MessageInfoTypeClipped {
  readonly messageType: typeof INFO_MESSAGE_CLIPPED,
  details: {
    /** id of channel `infoTypeChannelMarker${uniqId.time()}` */
    channel: ChannelCore['uniqid']
  },
  infoType: boolean,
  gameTurn: number,
  isOpen: boolean,
  hasBeenRead: boolean
  _id?: string
}

export interface MessageForceLaydown {
  readonly messageType: typeof FORCE_LAYDOWN,
  readonly updates: Array<{ uniqid: string, position: string }>
}
export interface MessagePerceptionOfContact {
  readonly messageType: typeof PERCEPTION_OF_CONTACT,
  readonly assetId: string,
  readonly perception: Perception
}

/** two assets are going to join, to form a task group */
export interface MessageCreateTaskGroup {
  readonly messageType: typeof CREATE_TASK_GROUP,
  /** id of the platform that was dragged onto another */
  readonly dragged: string,
  /** id of the target platform that other was dropped onto */
  readonly target: string
}

/** an asset is going to host another platform */
export interface MessageHostPlatform {
  readonly messageType: typeof HOST_PLATFORM,
  /** id of the platform that was dragged onto another */
  readonly dragged: string,
  /** id of the target platform that other was dropped onto */
  readonly target: string
}

/** an asset is leaving a task group, navigating to top level */
export interface MessageLeaveTaskGroup {
  readonly messageType: typeof LEAVE_TASK_GROUP,
  /** id of the platform that was dragged to the top level */
  readonly dragged: string,
}

export interface MessageVisibilityChanges {
  readonly messageType: typeof VISIBILITY_CHANGES,
  readonly visibility: Visibility[],
  readonly assetId: string,
  condition?: string
}

export interface MessageDeletePlatform {
  readonly messageType: typeof DELETE_PLATFORM,
  readonly assetId: string,
}

export interface MessageSubmitPlans {
  readonly messageType: typeof SUBMIT_PLANS,
  readonly plannedRoutes: PlannedRoute[]
}

export interface MessageStateOfWorld {
  readonly messageType: typeof STATE_OF_WORLD,
  readonly state: StateOfWorld
}

export interface MessageUpdateMarker {
  readonly messageType: typeof UPDATE_MARKER,
  readonly marker: MapAnnotation
}

export interface MessageDeleteMarker {
  readonly messageType: typeof DELETE_MARKER,
  readonly marker: MapAnnotation['uniqid']
}

export interface MessageCloneMarker {
  readonly messageType: typeof CLONE_MARKER,
  readonly marker: MapAnnotation
}


/** the outcome-related content of an adjudication */
export interface MessageAdjudicationOutcomes {
  readonly messageType: typeof ADJUDICATION_OUTCOMES,
  /** ref of the adjudication this refers to */
  readonly reference: InteractionMessageStructure['Reference']
  readonly health: HealthOutcomes
  readonly movement: LocationOutcomes
  readonly perception: PerceptionOutcomes
}


export type MessageMap = MessageForceLaydown |
  MessagePerceptionOfContact |
  MessageVisibilityChanges |
  MessageSubmitPlans |
  MessageStateOfWorld |
  MessageCreateTaskGroup |
  MessageLeaveTaskGroup |
  MessageHostPlatform |
  MessageDeletePlatform |
  MessageUpdateMarker |
  MessageDeleteMarker |
  MessageCloneMarker |
  MessageAdjudicationOutcomes

export type MessageChannel = MessageInfoTypeClipped |
  MessageCustom

type Message = MessageCustom |
  ChatMessage |
  MessageFeedback |
  MessageInfoTypeClipped |
  MessageMap |
  MessageInfoType |
  MessageCounter

export default Message
