export default interface PropTypes {
  /**
   * The Global max speed
   */
  colCount?: number
  /**
   * available max speed
   */
  value: number
  /**
   * steps size
   */
  options: Array<number>
  /**
   * on click on other speeds
   */
  onClick?: any
  /**
   * whether component is disabled
   */
  disabled?: boolean
}
