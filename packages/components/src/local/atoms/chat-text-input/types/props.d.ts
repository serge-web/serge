export default interface PropTypes {
  /**
   * Text field variants
   */
  variant?: 'standard' | 'filled' | 'outlined'
  /**
   * The default value of the input,
   * can be derived from component state or store
   */
  value?: number | string
  /**
   * Whether to use multiline display
   */
  multiline?: boolean
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
  /**
   * The style assign to the input
   */
  className?: string
  /**
   * The placeholder of the input
   */
  placeholder?: string
  /**
   * Text input full width
   */
  fullWidth?: boolean
  /**
   * Multiline initial rows length
   */
  rows?: number
  /**
   * Multiline maximum rows length
   */
  rowsMax?: number

  content?:String
}
