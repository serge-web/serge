export default interface Role {
  name: string,
  password: string,
  /**
   * If this role is `Game Control` - a role which cannot be deleted
   */
  isGameControl: boolean,
  /**
   * whether this role can monitor all channels (umpire force only)
   */
  isObserver: boolean,
  /**
   * whether this role can view user insights/feedback (umpire force only)
   */
  isInsightViewer: boolean,
  /**
   * whether this role can submit plans from the Mapping component
   */
  canSubmitPlans?: boolean
  /** 
   * whether this role can manage (release) RFIs 
   */
  isRFIManager?: boolean
}
