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
  canReleaseMessages?: boolean
  channel: ChannelData
  templates: TemplateBodysByKey
  /** people that a document in this channel can be assigned to */
  assignees?: ForceRole[]
}

export interface DialogModalStatus {
  open: boolean
  title: string
  placeHolder: string
}
