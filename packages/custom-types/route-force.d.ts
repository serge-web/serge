import Route from './route'

/** routes for a force */
export default interface RouteForce {
  /** force we're referring to */
  uniqid: string
  /** list of routes for this force */
  routes: Array<Route>
  /** color for platforms of this force */
  color: string
}
