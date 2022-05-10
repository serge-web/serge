import MapAnnotation from '@serge/custom-types'
import L from 'leaflet'

export default interface PropTypes {
  /**
   * marker
   */
  marker: MapAnnotation
  /**
   * location of marker
   */
  location: L.LatLng
  /**
   * drag handler. Undefined if not draggabpe
   */
  dragged?: {(location: L.LatLng): void}
}
