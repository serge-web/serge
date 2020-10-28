import { PlanningStates } from '@serge/config';
import { AdjudicateTurnFormData, AdjudicateTurnFormValues, PlanTurnFormValues } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: AdjudicateTurnFormData
  /**
   * status of current planned route 
   */
  plannedRouteStatus: PlanningStates
  /**
   * Data for icon generation
   */
  icon: {
    forceColor: string
    platformType: string
  }
  /**
   * handler for umpire accepting aroute
   */
  routeAccepted?: {(route: AdjudicateTurnFormValues): void}
  /**
   * flag for if SofW have already been submitted
   */
  plansSubmitted: boolean
  /**
   * whether this user can plan turns
   */
  canSubmitPlans: boolean
  /**
   * The method for posting messages out of the mapping component
   */
  turnPlanned?: {(turn: PlanTurnFormValues): void}
}
