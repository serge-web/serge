import { ParticipantCustom, ParticipantCollab, ParticipantChat, ParticipantTemplate, ParticipantMapping } from './participant'
import { CHANNEL_CUSTOM, CHANNEL_COLLAB, CHANNEL_CHAT, CHANNEL_MAPPING, SpecialChannelColumns, InitialStates } from '@serge/config'
import MappingConstraints from './mapping-constraints'

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

/** description of mapping channel */
export interface ChannelMapping extends ChannelCore {
  channelType: typeof CHANNEL_MAPPING
  /** list of participants for this channel */
  participants: Array<ParticipantMapping>
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
  ChannelMapping
