import { MessageChannel } from 'src/custom-types'

export default interface PropTypes {
  /**
   * The messages array
   */
  messages: Array<MessageChannel>
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
