import { LaydownPhases } from '@serge/config'
import { RouteStore, Route, SergeGrid3 } from '@serge/custom-types'
import hexNamed from './hex-named'
import { cloneDeep } from 'lodash'

/** set the asset location
 * @param {RouteStore} store wargame data object
 * @param {string} location new initial location
 * @returns {RouteStore} updated route store
 */
const routeSetLaydown = (store: RouteStore, location: string, grid: SergeGrid3 | undefined): RouteStore => {
  // take deep copy
  const modified: RouteStore = cloneDeep(store)
  // find the matching route
  const route: Route | undefined = modified.selected
  if (route) {
    // ok, set the new location
    route.currentPosition = location
    const cell = grid && hexNamed(location, grid)
    if (cell) {
      route.currentLocation2 = cell.centreLatLng
    }

    // update the phase
    route.laydownPhase = LaydownPhases.Moved

    // clear any planned steps, since they apply to a different origin
    if (route.planned) {
      route.planned = []
      route.plannedTrimmed = []
      route.plannedTurnsCount = 0
    }

    // we also need to clear history, since it's to a different origin
    if (route.history) {
      route.history = []
    }
  } else {
    console.warn('no selected asset')
  }
  return modified
}

export default routeSetLaydown
