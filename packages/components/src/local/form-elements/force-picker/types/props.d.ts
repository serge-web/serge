import Option from './option'

export default interface PropTypes {
  /**
   * The label to show on the form section
   */
  label: string
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
