import {
  MessageCustom,
  ForceRole,
  ChannelData,
  ChannelCollab,
  TemplateBodysByKey
} from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  message: MessageCustom
  /** role of logged in player */
  role: ForceRole
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** if this player has "RFI Manager" attribute in their role */
  // isRFIManager: boolean
  canCollaborate?: boolean
  /** if this player can release messages */
  canReleaseMessages?: boolean
  /** if this player can retrieve claimed messages */
  canUnClaimMessages: boolean
  channel: ChannelData
  channelColb: ChannelCollab
  templates: TemplateBodysByKey
  /** people that a document in this channel can be assigned to */
  assignees?: ForceRole[]
  /** callback to collapse this item */
  collapseMe?: () => void
  /** current game time, used for initialising date-time controls */
  gameDate: string
  /** trigger on collapse */
  onRead?: () => void
  /** if message status readed */
  isReaded?: boolean
}

export interface DialogModalStatus {
  open: boolean
  title?: string
  placeHolder?: string
  content?: string
}
