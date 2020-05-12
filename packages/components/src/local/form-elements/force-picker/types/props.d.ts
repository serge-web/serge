import Option from './option'

export default interface PropTypes {
  /**
   * The label to show on the form section
   */
  label: string
  /**
   * The name of the input (if left blank, label is used)
   * this should match the 'populate' value of the input in state
   */
  name?: string,
  /**
   * The list of options available to the form section
   */
  options: Array<Option>
  /**
   * The currently selected force
   */
  selected: string
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
}
