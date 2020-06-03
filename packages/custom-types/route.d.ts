import Role from './role'
import RouteStatus from './route-status'
import RouteStep from './route-step'

export default interface Route {
  /** which asset this route is for */
  uniqid: string,
  /** name (perceived or real) */
  name: string,
  /** platform-type (perceived or real) */
  platformType: string,
  /** whether this asset is under control of current player's force */
  underControl: boolean,
  /** name of force for this platform (perceived or real) */
  forceName: string,
  /** if this is the selected asset */
  selected: boolean,
  /** if this asset is destroyed */
  destroyed: boolean
  /** color to render this line */
  color: string,
  /** paste route for this asset */
  history: Array<RouteStep>,
  /** current status of this asset */
  currentStatus: RouteStatus,
  /** current position of this asset */
  currentPosition: string,
  /** current planned steps for this asset */
  planned: Array<RouteStep>
  /** original future planned steps for this asset */
  original: Array<RouteStep>
}