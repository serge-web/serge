import { MessageCustom, ForceRole } from '@serge/custom-types'
export default interface Props {
  rfiMessages: MessageCustom[]
  roles: string[]
  channels: Array<ChannelData>
  onChange?: (nextMessage: MessageCustom) => void
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** if this player has "RFI Manager" attribute in their role */
  isRFIManager: boolean
  /** role of logged in player
   */
  role: ForceRole
}
