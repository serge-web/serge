import { MessageChannel } from 'src/custom-types'

export default interface PropTypes {
  /**
   * The message content
   */
  message: MessageChannel
  /**
   * Current roleId
   */
  roleId?: string
  /**
   * Current forceId
   */
  force?: string
}
