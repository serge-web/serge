import { Message } from '@serge/custom-types'

export default interface PropTypes {
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
   /**
   * The currently active channel
   */
  currentChannel: string
}
