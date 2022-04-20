import { MarkerFormData, MapPostBack } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The header text for the form (optional)
   */
  formHeader?: string
  /**
   * The type pf platform @deprecated
   */
  type?: string
  /**
   * The color of the force
   */
  force?: string
  /**
   * All types in this definition are options for a form input
   */
  formData: MarkerFormData
  /**
   * The method for posting messages out of the mapping component
   */
  mapPostBack?: MapPostBack
}
