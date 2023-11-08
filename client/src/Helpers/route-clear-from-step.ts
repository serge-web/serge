import { RouteStore, Route, RouteTurn } from 'src/custom-types'
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
    const planned: RouteTurn[] = route.planned

    // note: in some test situations, the planned steps are so far in the future
    // that all get deleted. Explain that with a comment
    if (planned.length > 0) {
      const firstStep = planned[0].turn
      if (firstStep > stepNumber + 1) {
        console.warn('Planned steps in the future. All will be deleted.')
      }
    }

    const trimmed = planned.filter((step: RouteTurn) => step.turn < stepNumber)
    route.planned = trimmed
    route.plannedTrimmed = trimmed
  }
  return modified
}

export default routeClearFromStep
