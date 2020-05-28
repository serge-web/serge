import { Message } from '@serge/custom-types'

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
  messages: Array<Message>
  /**
   * The user id
   */
  userId: string
  /**
   * The messages have all been marked as read
   */
  allMarkedRead: boolean
  /* 
   *  The function to perform to mark all messages as read 
   */
  markAllAsRead?: any
}
