import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_PLANNING, InitialStates, SpecialChannelColumns } from 'src/config'
import MappingConstraints from './mapping-constraints'
import { ParticipantChat, ParticipantCollab, ParticipantCustom, ParticipantPlanning, ParticipantTemplate } from './participant'

/** description of channel, as stored in database */
export interface ChannelCore {
  /** unique id for this channel */
  readonly uniqid: string
  /** name of this channel */
  name: string
  /** type - extended by child implementations */
  channelType: any
}

/** description of chat channel */
export interface ChannelChat extends ChannelCore {
  channelType: typeof CHANNEL_CHAT
  /** list of participants for this channel */
  participants: Array<ParticipantChat>
  /** whether to hide the Force and Role of the message author */
  hideMessageAuthor?: boolean
}

/** description of planning channel */
export interface ChannelPlanning extends ChannelCore {
  channelType: typeof CHANNEL_PLANNING
  /** list of participants for this channel */
  participants: Array<ParticipantPlanning>
  /** the constraints (bounds) for the mapping */
  constraints: MappingConstraints
}

/** description of standard channel, sending custom messages */
export interface ChannelCustom extends ChannelCore {
  channelType: typeof CHANNEL_CUSTOM
  /** list of participants for this channel */
  participants: Array<ParticipantCustom>
}

/** description of collaborative editing channel */
export interface ChannelCollab extends ChannelCore {
  channelType: typeof CHANNEL_COLLAB
  /** list of participants for this channel */
  participants: Array<ParticipantCollab>
  /** verbs for returning for edit */
  requestChangesVerbs: Array<string>
  /** verbs for approving document */
  approveVerbs: Array<string>
  /** verbs for releasing document */
  releaseVerbs: Array<string>
  /** who original document goes to first */
  initialState: InitialStates
  /** extra columns to show in status view */
  extraColumns: Array<SpecialChannelColumns>
  /** type for new document */
  newMessageTemplate: ParticipantTemplate | undefined
  /** type for response document */
  responseTemplate?: ParticipantTemplate
  /** additional columns to display in table.  Currently takes some 'special values',
   * see AdditionalData in genMessageCollabEdit.tsx
   */
  additonalData?: string[]
}

/** union of the assorted channel types */
export type ChannelTypes = ChannelChat |
  ChannelCustom |
  ChannelCollab |
  ChannelMapping |
  ChannelPlanning
