import { DELETE_MARKER, UPDATE_MARKER, CLONE_MARKER } from '@serge/config'
import { MapAnnotation, MarkerFormData } from 'src/custom-types'

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
  updateMarker: (messageType: typeof UPDATE_MARKER | typeof DELETE_MARKER | typeof CLONE_MARKER, marker: MapAnnotation) => void
}
