export default interface PropTypes {
  /**
   * Callback on icon change event
   */
  onChange?: (src: string) => void
  background?: string
  icon?: string
  limit: number
}
