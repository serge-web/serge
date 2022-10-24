
export default interface PropTypes {
  /**
   * The object to render
   */
  plan: PlanningMessage

  /** assets in the wargame */
  forces: ForceData[]

  /** platform types in the wargame */
  platformTypes: PlatformTypeData[]

  /** activities for this force */
  activities: PerForcePlanningActivitySet | undefined 

  /** current Force */
  force: ForceData['uniqid']


}
