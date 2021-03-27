export default interface Props {
  /**
   * The method for posting messages out of the component
   */
   postBack?: {(message: string, privateMessage: string): void}
}
