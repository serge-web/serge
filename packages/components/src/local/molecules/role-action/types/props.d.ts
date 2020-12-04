export default interface Props {
  /**
   * Is current role an observer?
   */
  isObserver?: boolean
  /**
   * Can current role submit plans?
   */
  canSubmitPlans?: boolean
  /**
   * Is current role an insight viewer?
   */
  isInsightViewer?: boolean
  /**
   * Is current role a game control
   */
  isGameControl?: boolean
  /**
   * Current role
   */
  role: string
  /**
   * Callback on edit role click event
   */
  onEditRole: () => void
  /**
   * Callback on delete role click event
   */
  onRemoveRole: () => void
}
