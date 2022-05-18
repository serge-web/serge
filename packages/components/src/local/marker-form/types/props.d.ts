import { MarkerFormData, MapPostBack, MessageUpdateMarker } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * All types in this definition are options for a form input
   */
  formData: MarkerFormData
  /**
   * close form
   */
  closeForm: () => void
  /**
   * The method for posting messages out of the mapping component
   */
  mapPostBack: (messageType: string, payload: MessageUpdateMarker) => void
}
