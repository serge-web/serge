import L from 'leaflet'
import { RouteStore, Route, SergeGrid, SergeHex } from '@serge/custom-types'
import routeCreateRoute from './route-create-route'
import { UMPIRE_FORCE } from '@serge/config'
import findPerceivedAsTypes from './find-perceived-as-types'
import isPerceivedBy from './is-perceived-by'
import hexNamed from './hex-named'

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

/** process the forces, to create a route store - used to manage
 * display and edits to planned routes
 * @param {any} forces array of forces
 * @param {string} playerForce uniqid for player force
 * @param {string} adjudication whether player is umpire in adjudication
 * @param {string[]} controls uniqid for forces controlled by this player. Optional remove for all
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid the grid object, used to find cell centres, used in declutter
 * @param {boolean} filterPlannedSteps whether to filter the planned steps to only one
 * @param {boolean} filterHistorySteps whether to filter the history steps to only one
 * @returns {RouteStore} RouteStore representing current data
 */
const routeCreateStore = (forces: any, playerForce: string, adjudication: boolean, 
    platformTypes: any, grid: SergeGrid<SergeHex<{}>> | undefined, filterHistorySteps: boolean, filterPlannedSteps: boolean): RouteStore => {
  const store: RouteStore = { routes: []}

  const controls: Array<string> = forcesControlledBy(forces, playerForce)
  const forceColors: Array<{force: string, color: string}> = forces.map((force: any) => {
    return {force: force.uniqid, color: force.color}
  })

  const undefinedColor = '#999' // TODO: this color should not be hard-coded

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

          // dummy location, used if we don't have grid (such as in test)
          const dummyLocation: L.LatLng = L.latLng(12.2, 23.3)
          // sort out location
          const matchingHex: SergeHex<{}> | undefined = grid && hexNamed(asset.position, grid) || undefined
          const assetLocation: L.LatLng = matchingHex && matchingHex.centreLatLng || dummyLocation

          if(controlled || playerForce === UMPIRE_FORCE) {
            // asset under player control or player is umpire, so use real attributes
            const newRoute: Route = routeCreateRoute(asset, adjudication, force.color,
              controlled, force.uniqid, force.uniqid, asset.name, asset.platformType, 
              platformTypes, playerForce, asset.status, asset.position, assetLocation, grid, true, filterHistorySteps, filterPlannedSteps)
            store.routes.push(newRoute)
          } else {

            // ok, special handling - if this is an organisation that comprises others
            if(asset.comprising && asset.comprising.length) {
              // process list of children
              asset.comprising.forEach((child:any) => {
                // can't see it directly. See if we can perceive it
                const perceivedAs: string | undefined = isPerceivedBy(child.perceptions, playerForce, forceColors, undefinedColor)
                if(perceivedAs) {
                  const perceptions = findPerceivedAsTypes(playerForce, child.name, child.contactId,
                    thisForce, child.platformType, child.perceptions, false)
                  // create route for this asset
                  const newRoute: Route = routeCreateRoute(child, false, perceivedAs, false, force.uniqid, perceptions[1],
                    perceptions[0], perceptions[2], platformTypes, playerForce, asset.status, asset.position, assetLocation, 
                    grid, false, filterHistorySteps, filterPlannedSteps)
                  store.routes.push(newRoute)
                }
              })
            } else {
              // can't see it directly. See if we can perceive it
              const perceivedAs: string | undefined = isPerceivedBy(asset.perceptions, playerForce, forceColors, undefinedColor)
              if(perceivedAs) {
                const perceptions = findPerceivedAsTypes(playerForce, asset.name, asset.contactId,
                  thisForce, asset.platformType, asset.perceptions, false)
                // create route for this asset
                const newRoute: Route = routeCreateRoute(asset, false, perceivedAs, false, force.uniqid, perceptions[1],
                  perceptions[0], perceptions[2], platformTypes, playerForce, asset.status, asset.position, assetLocation, 
                  grid, false, filterHistorySteps, filterPlannedSteps)
                store.routes.push(newRoute)
              }
            }
          }
        })
      }
    })

  // loop through forces
  return store
}

export default routeCreateStore
