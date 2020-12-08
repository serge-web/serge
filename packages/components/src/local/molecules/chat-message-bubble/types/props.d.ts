export default interface Props {
  /**
   * Header item title
   */
  title?: string
  /**
   * Message timestamp
   */
  timestamp?: string
  /**
   * Message sender role
   */
  role?: string
  /**
   * Message read state
   */
  hasBeenRead?: boolean
  /**
   * force that sent message
   */
  authorForceId: string
  /**
   * force of logged in player
   */
  playerForceId: string
  /**
   * list of force colors
   */
  forceColors?: Array<{force: string, color: string}>
  /**
   * Private message
   */
  privateMessage?: string
  /**
   * Show Private message
   */
  isUmpire?: boolean
  /**
   * Chat Message Position
   */
  messagePosition? : boolean
  /**
   * color for message border
   */
  borderColor?: string

}
