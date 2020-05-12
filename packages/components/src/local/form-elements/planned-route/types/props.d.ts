export default interface PropTypes {
  /**
   * The name of the state to be updated
   */
  name: string
  /**
   * The current status of plannedTurns
   */
  status: string
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
}
