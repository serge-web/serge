import { LatLng } from 'leaflet'

/** composite return tuple */
export default interface RouteData {
  /**
   *  line representing this route (may include multiple steps per turn)
   */
  polyline: LatLng[]
  /**
   * series of end-of-turn locations, one per turn
   */
  turnEnds: LatLng[]
  /**
   * steps of the route
   */
  steps: RouteStep[]
}

export interface RouteStepStatus {
  speedKts?: number
  state: string
}

export interface RouteStep {
  position: LatLng
  status: RouteStepStatus
}
