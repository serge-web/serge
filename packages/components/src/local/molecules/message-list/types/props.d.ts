import MessageListHeaderProps from '../../message-list-header/types/props'
import MessageListDetailProps from '../../message-list-detail/types/props'

export default interface Props extends MessageListHeaderProps, MessageListDetailProps{
  /**
   * Header border color
   */
  borderColor: string
  /**
   * Handle on reading detail
   */
  onRead?: Function
}
