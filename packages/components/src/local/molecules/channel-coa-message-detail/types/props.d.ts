import { MessageCustom, ForceRole, ChannelData } from '@serge/custom-types'
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
  assignees?: ForceRole[]
}
