export default interface Props {
  /**
   * Header border color
   */
  borderColor: string
  /**
   * Header collapsible open state
   */
  isOpen: boolean
  /**
   * Header item title
   */
  title: string
  /**
   * Message timestamp
   */
  timestamp: string
  /**
   * Message sender role
   */
  role: string
  /**
   * Message type
   */
  messageType: string
  /**
   * Message read state
   */
  hasBeenRead: boolean
}
