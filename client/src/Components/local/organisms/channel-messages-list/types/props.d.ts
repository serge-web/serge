import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'
import { MessageChannel, MessageCustom } from 'src/custom-types'
import { TurnFormats } from 'src/config'

export default interface PropTypes extends ForcesInChannelProps {
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  messages: Array<MessageChannel>
  /**
   * Callback on expanding message item
   */
  onRead?: { (message: MessageCustom, count?: number): void }

  /**
   * handle unread message
   */
  onUnread?: (message: MessageCustom) => void

  /** force for player
   *
   */
  playerForceId: string

  /** how to render the game turn  */
  turnPresentation?: TurnFormats

  isUmpire: boolean
  role?: string
  /** whether to hide the forces in the channel
   */
  hideForcesInChannel: boolean
}
