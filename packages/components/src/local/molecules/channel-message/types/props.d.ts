import MessageListHeaderProps from '../../channel-message-header/types/props'
import MessageListDetailProps from '../../channel-message-detail/types/props'
import { MessageCustom, MessagePlanning } from '@serge/custom-types'

export default interface Props extends MessageListHeaderProps, MessageListDetailProps {
  /**
   * Handle on reading detail
   */
  onRead?: { (detail: MessageCustom | MessagePlanning): void }

  /**
   * handle unread message
   */
  onUnread?: { (detail: MessageCustom | MessagePlanning): void }
}
