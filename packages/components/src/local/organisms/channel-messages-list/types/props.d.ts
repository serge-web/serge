import ChannelMessageProps from '../../../molecules/channel-message/types/props'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export default interface PropTypes extends ForcesInChannelProps{
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  messages: Array<ChannelMessageProps>
}
