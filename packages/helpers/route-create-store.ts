import { RouteStore } from '@serge/custom-types'
import routeCreateRoute from './route-create-route'
import { UMPIRE_FORCE } from '@serge/config'
import findPerceivedAsTypes from './find-perceived-as-types'

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
  const store: RouteStore = { routes: []}

  const controls: Array<string> = forcesControlledBy(forces, playerForce)
  const forceColors: Array<{force: string, color: string}> = forces.map((force: any) => {
    return {force: force.uniqid, color: force.color}
  })

  forces.forEach((force: any) => {
    // see if we control it
    const thisForce = force.uniqid
    if (force.assets) {
        // loop through assets
        force.assets.forEach((asset: any) => {
          // different handling for planning vs adjudication
          let controlled = false
          if(playerForce == UMPIRE_FORCE) {
            if(adjudication) {
              // if we're white in adjudication mode, we control all
              controlled = true
            } else {
              // do I actually control this platform type
              controlled = thisForce === playerForce || controls.includes(thisForce)
            }
          } else {
            // do I actually control this platform type
            controlled = thisForce === playerForce || controls.includes(thisForce)
          }
        
          if(controlled || playerForce === UMPIRE_FORCE) {
            // asset under player control or player is umpire, so use real attributes
            store.routes.push(routeCreateRoute(asset, adjudication, force.color, 
              controlled, force.uniqid, asset.name, asset.platformType))
          } else {
            // can't see it directly. See if we can perceive it
            const undefinedColor = '#999' // TODO: this color should not be hard-coded
            const perceivedAs: string | undefined = isPerceivedBy(asset.perceptions, playerForce, forceColors, undefinedColor)
            if(perceivedAs) {
              const perceptions = findPerceivedAsTypes(playerForce, asset.name, asset.contactId, thisForce, asset.platformType, asset.perceptions, false)
                // create route for this asset
                store.routes.push(routeCreateRoute(asset, false, perceivedAs, false, perceptions[1], perceptions[0], perceptions[2]))
            }
          }
        })
      }
    })

  // loop through forces
  return store
}

export default routeCreateStore
