export default interface Role {
  name: string,
  password: string,
  /**
   * TODO - I suspect the `control` attribute doesn't get used.  Needs further investigation
   */
  control: boolean,
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
  canSubmitPlans: boolean
}
