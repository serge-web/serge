export default interface Props {
  /**
   * Whether the game has been initiated or not
   */
  initiated: boolean
  /**
   * The game name in URL format, that is used as
   * parameter for various actions such as duplicate, clean copy,
   * export, or delete
   */
  name: string
  /**
   * The game title, derived from the game name
   */
  title: string
  /**
   * Callback on clicking the game title
   */
  onClick?: (title: string) => void
}
