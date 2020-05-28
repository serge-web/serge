import { RouteStore, Route } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

/** set the new selected route, clear others
 * @param {string} selectedId uniqid route to be selected (use '' empty string to clear selection)
 * @param {RouteStore} store wargame data object
 * @returns {RouteStore} updated route store
 */
const routeSetCurrent = (selectedId: string, store: RouteStore): RouteStore => {
  // unset current selected
  const modified: RouteStore = cloneDeep(store)

  // clear the cached selected route
  delete modified.selected

  // loop through routes in this force (one per asset)
  modified.routes.forEach((route: Route) => {
    // set selected flag
    route.selected = route.uniqid === selectedId

    if (route.selected) {
      // and cache the selected route
      modified.selected = route
    }
  })
  return modified
}

export default routeSetCurrent
