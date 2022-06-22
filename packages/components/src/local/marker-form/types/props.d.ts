import { MarkerFormData, MessageUpdateMarker } from '@serge/custom-types'

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
   * Handler to update a marker
   */
  updateMarker: (messageType: string, payload: MessageUpdateMarker) => void
  /**
   * Handler to delete a marker
   */
  deleteMarker: (messageType: string, payload: MessageUpdateMarker) => void
  }
