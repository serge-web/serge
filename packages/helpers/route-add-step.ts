import { RouteStore, Route, RouteStep } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

/** add the step to this route
 * @param {RouteStore} store wargame data object
 * @param {string} selectedId uniqid route to be extended
 * @param {RouteStep} step new step to store
 * @returns {RouteStore} updated route store
 */
const routeAddStep = (store: RouteStore, selectedId: string, step: RouteStep): RouteStore => {
  // take deep copy
  const modified: RouteStore = cloneDeep(store)
  // find the matching route
  const route: Route | undefined = modified.routes.find((route: Route) => route.uniqid === selectedId)
  if (route) {
    // ok, add the planned step
    route.planned.push(step)
  }
  return modified
}

export default routeAddStep
