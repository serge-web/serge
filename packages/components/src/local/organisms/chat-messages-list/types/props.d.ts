import ChatMessageProps from '../../../molecules/chat-message/types/props'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export default interface PropTypes extends ForcesInChannelProps {
  /**
   * The list of channel messages properties required
   * for ChatMessage components
   */
  messages: Array<ChatMessageProps>
}
