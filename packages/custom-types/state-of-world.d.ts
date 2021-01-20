import { Perception, RouteStatus, RouteStep } from ".";

/** state of world for an asset */
export interface AssetState {
  uniqid: string
  name: string
  condition: string
  position: string
  perceptions: Perception[]
  destroyed?: boolean
  history?: RouteStep[]
  plannedTurns?: RouteStep[]
  newState?: RouteStatus
}

/** state of world for a force */
export interface ForceState {
  name: string
  assets: Array<AssetState>
}

/** description of new state of world */
export interface StateOfWorld {
  turn: number
  name: string
  detail: Array<ForceState>
}