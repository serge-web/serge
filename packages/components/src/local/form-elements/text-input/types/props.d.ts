export default interface PropTypes {
  /**
   * The name of the input, usually matches the state to update. If not used then a kebab-case version of the label will be used.
   */
  name?: string
  /***
   * The label of the text input
   */
  label: string
  /**
   * The value of the input
   */
  value: number | string
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
}
