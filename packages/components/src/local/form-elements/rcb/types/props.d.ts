export default interface PropTypes {
  /**
   * The type of component to show
   */
  type: 'checkbox' | 'radio' | 'force'
  /**
   * The label to show on the form section
   */
  label: string
  /**
   * The list of options available to the form section
   */
  options: Array<string | number>
  
}
