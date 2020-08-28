import Role from './role'
import RouteStatus from './route-status'
import RouteStep from './route-step'

export interface RouteChild {
  /** which asset this is */
  uniqid: string,
  /** name (perceived or real) */
  name: string,
  /** platform-type (perceived or real) */
  platformType: string,
  /** force (perceived or real) */
  force: string
  /** if this asset is destroyed */
  destroyed: boolean,
  /** condition of this asset */
  condition: string,
  /** the original asset (for planning) */
  asset: any,
  /** platforms carried on this one */
  hosting: Array<RouteChild>
}

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
  perceivedForceName: string,
  /** real force for this platform */
  actualForceName: string,
  /** if this is the selected asset */
  selected: boolean,
  /** if this asset is destroyed */
  destroyed: boolean,
  /** color to render this line */
  color: string,
  /** platforms carried on this one */
  hosting: Array<RouteChild>,
  /** platform that comprise this unit */
  comprising: Array<RouteChild>,
  /** paste route for this asset */
  history: Array<RouteStep>,
  /** current status of this asset */
  currentStatus: RouteStatus,
  /** current position of this asset */
  currentPosition: string,
  /** current position of this asset */
  currentLocation: L.LatLng | undefined,
  /** current planned steps for this asset */
  planned: Array<RouteStep>
  /** original future planned steps for this asset */
  original: Array<RouteStep>
  /* store the actual asset (so we have all details for State of World) */
  asset: any
}