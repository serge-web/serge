import { MessageCustom } from 'src/custom-types'

export default interface Props {
  /**
   * Message detail object
   * TODO: produce a TypeScript interface for the detail contents
   */
  message: MessageCustom 
  /**
   * Checks if user is an umpire. Assume not umpire if parameter missing
   */
  isUmpire: boolean
  /**
   * If control should be rendered in collapsed state
   */
  collapsed?: boolean
}
