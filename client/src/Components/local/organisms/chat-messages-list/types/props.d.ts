import { ChatMessage, MessageInfoTypeClipped } from 'src/custom-types'
import { TurnFormats } from 'src/config'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export default interface PropTypes extends ForcesInChannelProps {
  /**
   * The list of channel messages properties required
   * for ChatMessage components. This will either
   * be chat messages or info messages (used for game turn marker)
   */
  messages: Array<ChatMessage | MessageInfoTypeClipped>
  isUmpire: boolean
  /** force this player belongs to */
  playerForce: string
  /** role this player belongs to */
  playerRole: string
  /**
   * Max height of chat container box
   */
  chatContainerHeight?: number

  turnPresentation?: TurnFormats

  observing?: boolean
  markUnread?: (message: ChatMessage) => void
  /** whether to hide the forces block for this channel */
  hideForcesInChannel: boolean
  /** whether to hide the author (force and role) of messages */
  hideAuthor?: boolean
}
