export default interface PropTypes {
  /**
   * The type of component to show
   */
  type: 'checkbox' | 'radio'
  /**
   * The label to show on the form section
   */
  label: string
  /**
   * The list of options available to the form section
   */
  options: Array<string | number>
  /**
   * The value to set the 'checked' parameter to
   */
  value: string | number
  /**
   * Displays an additional force colour box if requested
   */
  force?: boolean
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
}
