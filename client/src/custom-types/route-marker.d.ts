/** details necessary to determine the orientation of a turn marker */
interface RouteMarkerDuo {
  pos: L.LatLng
  name: string
}

export interface RouteMarkerStatus {
  speedKts?: number
  state: string
}

/** data-type that collates the data necessary to
 * generate the rotated turn marker lines
 */
export default interface RouteMarker {
  turn: number
  previous?: RouteMarkerDuo
  current: RouteMarkerDuo
  next?: RouteMarkerDuo
  status: RouteMarkerStatus
}
