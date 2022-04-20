import { ForceData, Perception, RouteStatus, RouteTurn } from ".";
import { MapAnnotations } from "./map-annotation";

/** state of world for an asset */
export interface AssetState {
  readonly uniqid: string
  name: string
  // TOOD: switch to asset id
  condition: string
  position: string
  perceptions: Perception[]
  destroyed?: boolean
  history?: RouteTurn[]
  plannedTurns?: RouteTurn[]
  newState?: RouteStatus
}

/** state of world for a force */
export interface ForceState {
  /** 
   * which force this state is for
   */
  uniqid: ForceData['uniqid']
  // TODO: switch to force id
  assets: Array<AssetState>
}

/** description of new state of world */
export interface StateOfWorld {
  /** 
   * turn this state relates to 
   */
  turn: number
  /**
   * name of this message
   */
  name: string
  /**
   * state of forces
   */
  forces: Array<ForceState>
  /**
   * current annotations
   */
  mapAnnotations: MapAnnotations
}