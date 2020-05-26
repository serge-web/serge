import RouteForce from './route-force'

export default interface RouteStore {
  /** list of routes for this wargame */
  data: Array<RouteForce>
}
