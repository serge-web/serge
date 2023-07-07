import MapAnnotation, { AnnotationIcons } from 'src/custom-types'
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
   * hex coord for location, used for ploting ring
   */
  locationHex: string
  /**
   * drag handler. Undefined if not draggabpe
   */
  dragged?: { (location: L.LatLng): void }
  /**
   * list of icons
   */
  icons: AnnotationIcons
}
