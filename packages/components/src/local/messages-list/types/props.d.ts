import { MessageChannel } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The current channel
   */
   currentChannel?: string
  /**
   * The type of message
   */
  messageType?: string
  /**
   * The messages array
   */
  messages: Array<MessageChannel>
  /**
   * The user id
   */
  userId: string
  /*
   *  The function to perform to mark all messages as read
   */
  markAllAsRead?: any
}
