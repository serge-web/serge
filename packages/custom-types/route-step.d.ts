import Role from './role'
import RouteStatus from './route-status'

export default interface RouteStep {
  turn: string,
  coords?: Array<string>,
  status: RouteStatus
}