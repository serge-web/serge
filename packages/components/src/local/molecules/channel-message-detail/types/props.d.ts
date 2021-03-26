import { CollaborationDetails } from '@serge/custom-types/message'

export default interface Props {
  /**
   * Message detail object
   * TODO: produce a TypeScript interface for the detail contents
   */
  detail: object
  /**
   * Message type
   */
  messageType?: string
  /**
   * Checks if user is an umpire. Assume not umpire if parameter missing
   */
  isUmpire?: boolean
  /**
   * Private message, visible only to umpire force
   */
  privateMessage?: string
  /**
   * If control should be rendered in collapsed state
   */
  collapsed?: boolean
  /**
   * RFI collaboration details
   */
  collaboration?: CollaborationDetails
}
