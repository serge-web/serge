import { AdjudicateTurnFormData, AdjudicateTurnFormValues } from '@serge/custom-types'

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
   * The method for posting messages out of the mapping component
   */
  postBack?: {(messageType:string, payload: any): void}
}
