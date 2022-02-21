import { PlanningStates, LaydownPhases } from '@serge/config'
import { Asset, CommodityValues } from '.'
import RouteStatus from './route-status'
import RouteTurn from './route-turn'

export interface RouteChild {
  /** which asset this is */
  readonly uniqid: string,
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
  /** player's perceived color for this asset */
  perceivedForceColor: string,
}

export default interface Route {
  /** which asset this route is for */
  readonly uniqid: string,
  /** name (perceived or real) */
  name: string,
  /** platform-type (perceived or real) */
  platformType: string,
  /** whether this asset is under control of current player's force */
  underControl: boolean,
  /** whether this asset is visible to current player's force */
  visibleToThisForce: boolean;
  /** name of force for this platform (perceived or real) */
  perceivedForceName: string,
  /** player's perceived color for this asset */
  perceivedForceColor: string,
  /** player's perceived color for this asset */
  perceivedForceClass?: string,
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
  history: Array<RouteTurn>,
  /** current status of this asset */
  currentStatus: RouteStatus,
  /** current position of this asset */
  currentPosition: string,
  /** current position of this asset */
  currentLocation: L.LatLng | undefined,
  /** original position, used to determine if moved in force laydown */
  originalPosition?: string,
  /** status of laydown */
  laydownPhase?: LaydownPhases
  /** current planned steps for this asset */
  planned: Array<RouteTurn>
  /** trimmed/filtered version of current planned steps for this asset */
  plannedTrimmed: Array<RouteTurn>
  /** number of planned steps for this asset (does not get clipped) */
  plannedTurnsCount: number,
  /** original future planned steps for this asset */
  original: Array<RouteTurn>
  /** store the actual asset (so we have all details for State of World) */
  asset: Asset
  /** which forces can see this platform (force uniqids) */
  visibleTo: Array<string>
  /** condition of this asset (only for umpire in adjudication) */
  condition?: string
  /** how far this route has progressed through the adjudication process */
  adjudicationState?: PlanningStates
  /** the attributes for this asset */
  attributes: CommodityValues
}