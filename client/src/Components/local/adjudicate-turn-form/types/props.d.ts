import { IconDefinition } from '@serge/custom-types'
import AdjudicationManager from '../helpers/adjudication-manager'

export default interface PropTypes {
  /**
   * flag for if SofW have already been submitted
   */
  plansSubmitted: boolean
  /**
   * whether this user can plan turns
   */
  canSubmitPlans: boolean
  /**
   * adjudication manager
   */
  manager?: AdjudicationManager
  /** icon
   *
   */
  icon: IconDefinition
}
