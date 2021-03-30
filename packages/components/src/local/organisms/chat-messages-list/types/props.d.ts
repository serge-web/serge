import { ChatMessage } from '@serge/custom-types'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export default interface PropTypes extends ForcesInChannelProps {
  /**
   * The list of channel messages properties required
   * for ChatMessage components
   */
  messages: Array<ChatMessage>
  isUmpire: boolean
  /** force this player belongs to */
  playerForce: string
  /**
   * The user id
   */
  userId: string
}
