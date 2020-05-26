import Role from './role'
import RouteStatus from './route-status'
import RouteStep from './route-step'

export default interface Route {
  /** which asset this route is for */
  uniqid: string,
  /** if this is the selected asset */
  selected: boolean,
  /** paste route for this asset */
  history: Array<RouteStep>,
  /** current status of this asset */
  currentStatus: RouteStatus,
  /** current position of this asset */
  currentPosition: string,
  /** future planned steps for this asset */
  planned: Array<RouteStep>
}