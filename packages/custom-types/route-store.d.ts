import RouteForce from './route-force'
import Route from './route'

export default interface RouteStore {
  /** list of routes for this wargame */
  forces: Array<RouteForce>,

  /** quick access to selected item */
  selected?: Route
}
