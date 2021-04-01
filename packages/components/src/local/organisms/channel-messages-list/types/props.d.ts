import ChannelMessageProps from '../../../molecules/channel-message/types/props'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'
import { MessageChannel, MessageCustom } from '@serge/custom-types'

export interface MessagesTypes extends ChannelMessageProps {
  /**
   * whether this is an informational data object (such
   * as new wargame data object), or a message
   */
  infoType?: boolean
  /**
   * turn number that this message was sent in
   * */
  gameTurn?: number
}

export default interface PropTypes extends ForcesInChannelProps{
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  messages: Array<MessageChannel>
  /**
   * Callback on expanding message item
   */
  onRead?: { (message: MessageCustom): void }
  /** force for player
   *
   */
  playerForceId: string

  isUmpire: boolean
  isRFIManager: boolean
  role: Role['name']
  onChange?: (nextMessage: MessageCustom) => void

}
