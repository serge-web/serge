import { RouteStore, RouteForce } from '@serge/custom-types'
import routeCreateRoute from './route-create-route'

/** process the forces, to create a route store - used to manage 
 * display and edits to planned routes
 * @param {data} any wargame data object
 * @param {string} playerForce uniqid for player force
 * @param {string} allForces whether to return all forces (umpire adjudication)
 * @param {string[]} controls uniqid for forces controlled by this player. Optional remove for all
 * @returns {RouteStore} RouteStore representing current data
 */
const createRouteStore = (data: any, playerForce: string, allForces: boolean, controls: Array<string>): RouteStore => {
  const store: RouteStore = { forces: []}

  data.forEach((force: any) => {
    // see if we control it
    const thisForce = force.uniqid
    if (allForces || thisForce === playerForce || controls.includes(thisForce)) {
      if (force.assets) {
        const routeForce: RouteForce = { uniqid: thisForce, routes: [] }
        // loop through assets
        force.assets.forEach((asset: any) => {
          // create route for this asset
          routeForce.routes.push(routeCreateRoute(asset))
        })

        // did we create any?
        if (routeForce.routes.length > 0) {
          store.forces.push(routeForce)
        }
      }
    }
  })

  // loop through forces
  return store
}

export default createRouteStore
