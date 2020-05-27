import { RouteStore, RouteForce, Route, RouteStep } from '@serge/custom-types'
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
  // loop through forces
  modified.forces.forEach((force: RouteForce) => {
    // loop through routes in this force (one per asset)
    const route: undefined | Route = force.routes.find((route: Route) => route.uniqid === selectedId)
    if (route) {
      // ok, add the planned step
      route.planned.push(step)
    }
  })
  return modified
}

export default routeAddStep
