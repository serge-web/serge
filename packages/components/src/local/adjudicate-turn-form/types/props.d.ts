import { AdjudicateTurnForm, AdjudicateTurnFormValues } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: AdjudicateTurnForm
  /**
   * The method for posting data back to state
   */
  postBack?: {(payload: AdjudicateTurnFormValues): void}
}
