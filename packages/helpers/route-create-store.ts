import L from 'leaflet'
import { RouteStore, Route, SergeGrid, SergeHex } from '@serge/custom-types'
import routeCreateRoute from './route-create-route'
import { UMPIRE_FORCE } from '@serge/config'
import findPerceivedAsTypes from './find-perceived-as-types'
import isPerceivedBy from './is-perceived-by'
import hexNamed from './hex-named'
import forceColors from './force-colors'

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
 * @param {string | undefined} selectedId uniqid for selected asset
 * @param {any} forces array of forces
 * @param {string} playerForce uniqid for player force
 * @param {string} adjudication whether player is umpire in adjudication
 * @param {string[]} controls uniqid for forces controlled by this player. Optional remove for all
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid the grid object, used to find cell centres, used in declutter
 * @param {boolean} filterPlannedSteps whether to filter the planned steps to only one
 * @param {boolean} filterHistorySteps whether to filter the history steps to only one
 * @param {RouteStore} oldStore existing RouteStore, so we can persist player modifications
 * @returns {RouteStore} RouteStore representing current data
 */
const routeCreateStore = (selectedId: string | undefined, forces: any, playerForce: string, adjudication: boolean,
    platformTypes: any, grid: SergeGrid<SergeHex<{}>> | undefined, filterHistorySteps: boolean, 
    filterPlannedSteps: boolean, oldStore?: RouteStore): RouteStore => {
  const store: RouteStore = { routes: []}

  const controls: Array<string> = forcesControlledBy(forces, playerForce)
  const forceColorList: Array<{force: string, color: string}> = forceColors(forces)

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
          const dummyLocation: L.LatLng = L.latLng(12.2, 23.2)
          // sort out location
          const matchingHex: SergeHex<{}> | undefined = grid && hexNamed(asset.position, grid) || undefined
          const assetLocation: L.LatLng = matchingHex && matchingHex.centreLatLng || dummyLocation

          // is it the selected asset?
          const isSelectedAsset: boolean = selectedId ? asset.uniqid === selectedId : false

          if(controlled || playerForce === UMPIRE_FORCE) {
            // asset under player control or player is umpire, so use real attributes

            // if it's the selected asset, we plot all future steps
            const applyFilterPlannedSteps: boolean = filterPlannedSteps && !isSelectedAsset

            const newRoute: Route = routeCreateRoute(asset, force.color,
              controlled, force.uniqid, force.uniqid, asset.name, asset.platformType, 
              platformTypes, playerForce, asset.status, asset.position, assetLocation, 
              grid, true, filterHistorySteps, applyFilterPlannedSteps, isSelectedAsset)

            // see if there is an existing planned route for this asset
            if(oldStore) {
              const existing: Route | undefined = oldStore.routes.find((route: Route) => route.uniqid === asset.uniqid)
              if(existing) {
                // ok, copy the adjudication state
                newRoute.adjudicationState = existing.adjudicationState
                // and visible to
                newRoute.visibleTo = existing.visibleTo
                if(existing.condition) {
                  newRoute.condition = existing.condition
                }
              }
            }

            store.routes.push(newRoute)
          } else {

            // ok, special handling - if this is an organisation that comprises others
            if(asset.comprising && asset.comprising.length) {
              // process list of children
              asset.comprising.forEach((child:any) => {
                // can't see it directly. See if we can perceive it
                const perceivedColor: string | undefined = isPerceivedBy(child.perceptions, playerForce, forceColorList, undefinedColor)
                if(perceivedColor) {
                  const perceptions = findPerceivedAsTypes(playerForce, child.name, child.contactId,
                    thisForce, child.platformType, child.perceptions, false)
                  // create route for this asset
                  const newRoute: Route = routeCreateRoute(child, perceivedColor, false, force.uniqid, perceptions[1],
                    perceptions[0], perceptions[2], platformTypes, playerForce, asset.status, asset.position, assetLocation, 
                    grid, false, filterHistorySteps, filterPlannedSteps, isSelectedAsset)
                  store.routes.push(newRoute)
                }
              })
            } else {
              // can't see it directly. See if we can perceive it
              const perceivedColor: string | undefined = isPerceivedBy(asset.perceptions, playerForce, forceColorList, undefinedColor)
              if(perceivedColor) {
                const perceptions = findPerceivedAsTypes(playerForce, asset.name, asset.contactId,
                  thisForce, asset.platformType, asset.perceptions, false)
                // create route for this asset
                const newRoute: Route = routeCreateRoute(asset, perceivedColor, false, force.uniqid, perceptions[1],
                  perceptions[0], perceptions[2], platformTypes, playerForce, asset.status, asset.position, assetLocation, 
                  grid, false, filterHistorySteps, filterPlannedSteps, isSelectedAsset)
                store.routes.push(newRoute)
              }
            }
          }
        })
      }
    })

    // also store the selected track
    if(selectedId) {
      const selectedRoute: Route | undefined = store.routes.find(route => route.uniqid === selectedId)
      store.selected = selectedRoute  
    }

  // loop through forces
  return store
}

export default routeCreateStore
