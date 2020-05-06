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
   * Displays an additional force colour box if requested
   */
  force?: boolean
}
