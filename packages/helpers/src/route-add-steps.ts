import { RouteStore, Route, RouteTurn } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

/** add the step to this route
 * @param {RouteStore} store wargame data object
 * @param {string} selectedId uniqid route to be extended
 * @param {Array<RouteTurn>} steps new step to store
 * @returns {RouteStore} updated route store
 */
const routeAddSteps = (store: RouteStore, selectedId: string, steps: Array<RouteTurn>): RouteStore => {
  // take deep copy
  const modified: RouteStore = cloneDeep(store)
  // find the matching route
  const route: Route | undefined = modified.routes.find((route: Route) => route.uniqid === selectedId)
  if (route) {
    // ok, add the planned step
    route.planned = route.planned.concat(steps)

    route.plannedTrimmed = route.plannedTrimmed.concat(steps)

    // update number of planned steps
    route.plannedTurnsCount = route.planned.length
  }
  return modified
}

export default routeAddSteps
