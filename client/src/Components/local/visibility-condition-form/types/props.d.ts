import { VisibilityFormData, MapPostBack, IconDefinition } from 'src/custom-types'

export default interface PropTypes {
  /**
   * The header text for the form (optional)
   */
  formHeader?: string
  /**
   * Data for icon generation
   */
  icon: IconDefinition
  /**
   * List of forces, plus who can see this asset
   */
  formData: VisibilityFormData
  /**
   * The channel idea from the client (optional)
   */
  channelID?: string | number
  /**
   * The method for posting messages out of the mapping component
   */
  mapPostBack?: MapPostBack
}
