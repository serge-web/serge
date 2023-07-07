import { LatLng } from 'leaflet'
import { RouteMarker } from 'src/custom-types'

/** composite return tuple */
export default interface RouteData {
  /**
   *  line representing this route (may include multiple steps per turn)
   */
  polyline: LatLng[]
  /**
   * series of end-of-turn locations, one per turn
   */
  turnEnds: Array<RouteMarker>
}
