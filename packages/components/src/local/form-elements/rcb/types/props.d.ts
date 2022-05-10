export default interface PropTypes {
  /**
   * The type of component to show
   */
  type: 'checkbox' | 'radio'
  /**
   * The label to show on the form section
   */
  label?: string
  /**
   * The name of the input, if no input is selected, label is used instead.
   * Should match the value of 'populate' that should be updated in state.
   */
  name?: string
  /**
   * The list of options available to the form section
   */
  options: Array<string | number | FormOption>
  /**
   * The value to set the 'checked' parameter to
   */
  value: string | number | Array<string | number>
  /**
   * An option to display the force colours in the label ('colour' must be present in options)
   */
  force?: boolean
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
  /**
   * Whether to use compact format (esp for list of color shades)
   */
  compact?: boolean
  /*
   * disable offset for input container
   */
  disableOffset?: boolean
  className?: string
}
