export default interface Props {
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * The method for posting messages out of the component
   */
   postBack?: {(value: string): void}
}
