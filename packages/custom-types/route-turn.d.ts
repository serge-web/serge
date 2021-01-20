import RouteStatus from './route-status'

export default interface RouteTurn {
  turn: number,
  route?: Array<string>,
  locations?: Array<L.LatLng>,
  status: RouteStatus
}