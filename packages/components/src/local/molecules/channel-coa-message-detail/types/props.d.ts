import {
  MessageCustom,
  ForceRole,
  ChannelData,
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
  templates: TemplateBodysByKey
  /** people that a document in this channel can be assigned to */
  assignees?: ForceRole[]
  /** callback to collapse this item */
  collapseMe?: () => void
}

export interface DialogModalStatus {
  open: boolean
  title?: string
  placeHolder?: string
  content?: string
}
