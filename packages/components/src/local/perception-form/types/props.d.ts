import { PerceptionFormData, Postback } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The header text for the form (optional)
   */
  formHeader?: string
  /**
   * All types in this definition are options for a form input
   */
  formData: PerceptionFormData
  /**
   * The channel idea from the client (optional)
   */
  channelID?: string | number
  /**
   * The method for posting messages out of the mapping component
   */
  postBack?: Postback
  /**
   * Data for icon generation
   */
  icon: {
    forceColor: string
    platformType: string
  }
}
