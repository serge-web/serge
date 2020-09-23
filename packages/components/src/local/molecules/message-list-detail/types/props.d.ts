export default interface Props {
  /**
   * Message detail object
   */
  detail: object
  /**
   * Checks if user is an umpire
   */
  isUmpire?: boolean
  /**
   * Checks if contains a private message
   */
  privateMessage?: string
  /**
   * Collapsible state
   */
  collapsed?: boolean
}
