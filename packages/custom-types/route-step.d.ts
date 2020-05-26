import Role from './role'
import RouteStatus from './route-status'

export default interface RouteStep {
  name: string,
  coords?: Array<string>,
  status: RouteStatus
}