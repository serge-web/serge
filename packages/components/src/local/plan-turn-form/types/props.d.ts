import { PlanTurnFormData, PlanTurnFormValues } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: PlanTurnFormData
  /** callback for hiding planning form (while planning)
   *
   */
  setHidePlanningForm?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * The channel idea from the client (optional)
   */
  channelID?: string | number
  /**
   * The method for posting messages out of the mapping component
   */
  turnPlanned?: {(turn: PlanTurnFormValues): void}
  /**
   * Data for icon generation
   */
  icon: {
    forceColor: string
    platformType: string
  }
}
