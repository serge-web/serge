import MessageListHeaderProps from '../../channel-message-header/types/props'
import MessageListDetailProps from '../../channel-message-detail/types/props'

export default interface Props extends MessageListHeaderProps, MessageListDetailProps{
  /**
   * Header border color
   */
  borderColor?: string
  /**
   * Handle on reading detail
   */
  onRead?: { (detail: object): void }

  plainChat?: boolean
}
