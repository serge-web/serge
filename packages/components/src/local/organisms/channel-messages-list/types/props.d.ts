import ChannelMessageProps from '../../../molecules/channel-message/types/props'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

interface MessagesTypes extends ChannelMessageProps {
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
  messages: Array<MessagesTypes>
  /**
   * Callback on expanding message item
   */
  onRead?: { (detail: object): void }
}
