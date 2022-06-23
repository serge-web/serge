import { DELETE_MARKER } from '@serge/config'
import { MarkerFormData, MessageUpdateMarker } from '@serge/custom-types'
import { MessageDeleteMarker } from '@serge/custom-types/message'

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
  updateMarker: (messageType: typeof UPDATE_MARKER | typeof DELETE_MARKER, marker: MapAnnotation) => void
  }
