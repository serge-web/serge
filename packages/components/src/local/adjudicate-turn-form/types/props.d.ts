import { AdjudicateTurnFormPopulate } from '@serge/custom-types'
import AdjudicationManager from '../helpers/adjudication-manager'

export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: AdjudicateTurnFormPopulate
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
}
