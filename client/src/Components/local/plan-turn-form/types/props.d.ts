import React from 'react'
import { IconDefinition, PlanTurnFormData, PlanTurnFormValues } from 'src/custom-types'

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
  turnPlanned?: { (turn: PlanTurnFormValues): void }
  /**
   * whether this user can plan turns
   */
  canSubmitPlans: boolean
  /**
   * Data for icon generation
   */
  icon: IconDefinition
  /**
   * flag for if turns have been planned
   */
  plansSubmitted: boolean
  /**
   * handle for if an empty task group can be deleted
   */
  deleteEmptyTaskGroup?: { (): void }
}
