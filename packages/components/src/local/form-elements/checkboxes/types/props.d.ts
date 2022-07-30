export default interface PropTypes {
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
  options: (string | number)[]
  /**
   * The value to set the 'checked' parameter to
   */
  value: string | number | Array<string | number>
  /**
   * Sets the onChange state on a parent
   */
  onChange?: (data: any) => void
  /*
   * disable offset for input container
   */
  disableOffset?: boolean
  className?: string
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top'
}
