import { RouteStore, Route, RouteStep } from '@serge/custom-types'
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
  // find the matching route
  const route: Route | undefined = modified.routes.find((route: Route) => route.uniqid === selectedId)
  if (route) {
    // ok, sort out the planned steps
    const planned: RouteStep[] = route.planned
    const trimmed = planned.filter((step: RouteStep) => step.turn < stepNumber)
    route.planned = trimmed
  }
  
  return modified
}

export default routeClearFromStep
