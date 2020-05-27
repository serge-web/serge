import { RouteStore, RouteForce, Route } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

/** set the new selected route, clear others
 * @param {string} selectedId uniqid route to be selected
 * @param {RouteStore} store wargame data object
 * @returns {RouteStore} updated route store
 */
const routeSetCurrent = (selectedId: string, store: RouteStore): RouteStore => {
  // unset current selected
  const modified: RouteStore = cloneDeep(store)
  // loop through forces
  modified.forces.forEach((force: RouteForce) => {
    // loop through routes in this force (one per asset)
    force.routes.forEach((route: Route) => {
      route.selected = route.uniqid === selectedId
    })
  })
  return modified
}

export default routeSetCurrent
