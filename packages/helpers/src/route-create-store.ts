import { RouteStore, RouteForce } from '@serge/custom-types'
import routeCreateRoute from './route-create-route'
import { UMPIRE_FORCE } from '@serge/config'

/** determine which forces this player can control
 * @param {any} forces array of forces
 * @param {string} playerForce uniqid for player force
 * @returns {string[]} list of forces this player can control
 */
export const forcesControlledBy = (forces: any, playerForce: string): Array<string> => {
  const res: Array<string> = []
  forces.forEach((force: any) => {
    if(force.controlledBy && force.controlledBy.includes(playerForce)) {
      res.push(force.uniqid)
    }
  })
  return res;
}

const isPerceivedBy = (perceptions: any, playerForce: string, forceColors: Array<{force: string, color: string}>,
  undefinedColor: string): string | undefined => {
  if(perceptions) {
    const p = perceptions.find((p:any) => p.by === playerForce)
    if(p) {
      // do we know force?
      if(p.force) {
        const color = forceColors.find((f:any) => f.force === p.force)
        if(color) {
          return color.color
        }
      } else {
        return undefinedColor
      }
    }
  }
  return undefined
}

/** process the forces, to create a route store - used to manage 
 * display and edits to planned routes
 * @param {any} forces array of forces
 * @param {string} playerForce uniqid for player force
 * @param {string} adjudication whether player is umpire in adjudication
 * @param {string[]} controls uniqid for forces controlled by this player. Optional remove for all
 * @returns {RouteStore} RouteStore representing current data
 */
const routeCreateStore = (forces: any, playerForce: string, adjudication: boolean): RouteStore => {
  const store: RouteStore = { forces: []}

  const controls: Array<string> = forcesControlledBy(forces, playerForce)
  const forceColors: Array<{force: string, color: string}> = forces.map((force: any) => {
    return {force: force.uniqid, color: force.color}
  })

  forces.forEach((force: any) => {
    // see if we control it
    const thisForce = force.uniqid
    if (force.assets) {
          const routeForce: RouteForce = { uniqid: thisForce, routes: [], color: force.color }
        // loop through assets
        force.assets.forEach((asset: any) => {
          if (playerForce === UMPIRE_FORCE || // umpire sees all
              thisForce === playerForce ||   // this is one of our assets
              controls.includes(thisForce))  // we can control this force
            {
            // create route for this asset
            routeForce.routes.push(routeCreateRoute(asset, adjudication, force.color))
          } else {
            // can't see it directly. See if we can perceive it
            const undefinedColor = '#999' // TODO: this color should not be hard-coded
            const perceivedAs: string | undefined = isPerceivedBy(asset.perceptions, playerForce, forceColors, undefinedColor)
            if(perceivedAs) {
                // create route for this asset
                routeForce.routes.push(routeCreateRoute(asset, adjudication, perceivedAs))
            }
          }
        })

        // did we create any?
        if (routeForce.routes.length > 0) {
          store.forces.push(routeForce)
        }
      }
    })

  // loop through forces
  return store
}

export default routeCreateStore
