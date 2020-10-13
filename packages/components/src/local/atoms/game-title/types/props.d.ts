export default interface Props {
  /**
   * Whether the game has been initiated or not
   */
  initiated: boolean
  /**
   * The game title, derived from the game name
   */
  title: string
  /**
   * Callback on clicking the game title
   */
  onClick?: (title: string) => void
}
