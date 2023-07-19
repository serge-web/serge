import Route from './route'

export default interface RouteStore {
  /** list of routes for this wargame */
  routes: Array<Route>

  /** quick access to selected item */
  selected?: Route
}
