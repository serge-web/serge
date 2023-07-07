import { IconOption } from 'src/custom-types'

export default interface PropTypes {
  /**
   * The label to show on the form section
   */
  label: string
  /**
   * The name of the input, if no input is selected, label is used instead.
   * Should match the value of 'populate' that should be updated in state.
   */
  name?: string
  /**
   * The list of options available to the form section
   */
  options: Array<string | number | IconOption>
  /**
   * The value to set the 'selected' parameter to
   */
  selected: string | number
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
  /**
   *  The style of the global selector component
   */
  className?: string
  /**
   *  The style of each select object
   */
  selectClassName?: string
}
