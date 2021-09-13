import { ChatMessage, MessageInfoTypeClipped } from '@serge/custom-types'
import { TurnFormats } from '@serge/config'
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
  /**
   * The user id
   */
  userId: string
  /**
   * Max height of chat container box
   */
  chatContainerHeight?: number

  turnPresentation?: TurnFormats

  observing?: boolean
}
