import { MessageCustom, ForceRole, ChannelData } from '@serge/custom-types'
export default interface Props {
  /** messages in this channel */
  rfiMessages: MessageCustom[]
  /** roles that have messages in this channel (used for drop-downs) */
  roles: string[]
  /** the channel we're displaying */
  channel: ChannelData
  /** sending a new message */
  onChange?: (nextMessage: MessageCustom) => void
  /** role of logged in player
   */
  role: ForceRole
}
