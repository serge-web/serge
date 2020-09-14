import { Message } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The message content
   */
  message: Message
  /**
   * Current force
   */
  force: {
    name: string
    color: string
    icon?: string
  }
}
