import { RouteStore, Route } from '@serge/custom-types'
 import { cloneDeep } from 'lodash'

interface RouteLocation {

}

const findLocations = (store: RouteStore): Array<RouteLocation> => {
  const res: Array<RouteLocation> = []

  // loop through store
  store.routes.forEach((route: Route) => {
    console.log(route.planned)
  }) 
  return res
}

// const clusterLocations = (locations: Array<RouteLocation>): Array<RouteClusters> => {
//   const res: Array<Rout
// }

/** declutter assets & turn markers
 * @param {RouteStore} store wargame data object
 * @returns {RouteStore} decluttered route store
 */
const routeDeclutter = (store: RouteStore): RouteStore => {
  // take deep copy
  const modified: RouteStore = cloneDeep(store)  

  // find all locations
  const locations: Array<RouteLocation> = findLocations(modified)
  console.log(locations)

  // cluster the markers into cells
  // now spread out the clusters
  return modified
}

export default routeDeclutter
