/** details necessary to determine the orientation of a turn marker */
interface RouteTurnDuo {
  pos: L.LatLng,
  name: string
}

export interface RouteTurnStatus {
  speedKts?: number
  state: string
}

/** data-type that collates the data necessary to
 * generate the rotated turn marker lines
 */
export default interface RouteTurn {
  turn: number,
  previous?: RouteTurnDuo,
  current: RouteTurnDuo,
  next?: RouteTurnDuo
  status: RouteTurnStatus
}