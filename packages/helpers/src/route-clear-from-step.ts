import { RouteStore, RouteForce, Route, RouteStep } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

/** clear planned steps, from the indicated turn
 * @param {RouteStore} store wargame data object
 * @param {string} selectedId uniqid route to be selected
 * @param {number} stepNumber step to clear from
 * @returns {RouteStore} updated route store
 */
const routeClearFromStep = (store: RouteStore, selectedId: string, stepNumber: number): RouteStore => {
  // take deep copy
  const modified: RouteStore = cloneDeep(store)
  // loop through forces
  modified.forces.forEach((force: RouteForce) => {
    // loop through routes in this force (one per asset)
    const route: undefined | Route = force.routes.find((route: Route) => route.uniqid === selectedId)
    if (route) {
      // ok, sort out the planned steps
      const planned: RouteStep[] = route.planned
      const trimmed = planned.filter((step: RouteStep) => step.turn < stepNumber)
      route.planned = trimmed
    }
  })
  return modified
}

export default routeClearFromStep
