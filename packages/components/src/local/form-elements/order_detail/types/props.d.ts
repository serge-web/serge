import { ForceData, PlanningActivity, PlanningMessage, PlatformTypeData } from '@serge/custom-types'

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
  activities: PlanningActivity[]

  /** current Force */
  force: ForceData['uniqid']

}
