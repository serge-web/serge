import { Message } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The messages array
   */
  messages: Array<Message>
  /*
   *  The function to perform to mark all messages as read
   */
  markAllAsRead: any
  /**
   * Current force that is seeing the messages
   */
  force: {
    name: string
    color: string
    icon?: string
  }
}
