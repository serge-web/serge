export default interface Props {
  /**
   * Message timestamp
   */
  timestamp: string
  /**
   * Message sender role
   */
  role: string
  /**
   * Message text
   */
  message: string
  /**
  * Header border color
  */
  borderColor: string
  /**
   * Checks if user is an umpire. Assume not umpire if parameter missing
   */
   isUmpire: boolean
   /**
    * Private message, visible only to umpire force
    */
   privateMessage?: string
   /**
    * Message owner, either is self message or other user message
    */
   isOwner: boolean
}
