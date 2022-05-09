import { MarkerFormData, MapPostBack } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * All types in this definition are options for a form input
   */
  formData: MarkerFormData
  /**
   * The method for posting messages out of the mapping component
   */
  mapPostBack?: MapPostBack
}
