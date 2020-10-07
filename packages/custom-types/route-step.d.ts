import Role from './role'
import RouteStatus from './route-status'

export default interface RouteStep {
  turn: number,
  coords?: Array<string>,
  locations?: Array<L.LatLng>,
  status: RouteStatus
}