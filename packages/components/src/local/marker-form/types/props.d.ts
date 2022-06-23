import { DELETE_MARKER, UPDATE_MARKER } from '@serge/config'
import { MarkerFormData } from '@serge/custom-types'


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
