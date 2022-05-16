
import L from 'leaflet'
import { RouteStore, Route, ForceData, Asset, PlatformTypeData, ChannelMapping } from '@serge/custom-types'
import routeCreateRoute from './route-create-route'
import { ADJUDICATION_PHASE, Phase, UMPIRE_FORCE } from '@serge/config'
import findPerceivedAsTypes from './find-perceived-as-types'
import isPerceivedBy, { ForceStyle } from './is-perceived-by'
import forceColors from './force-colors'
import { h3ToGeo } from 'h3-js'

/** determine which forces this player can control
 * @param {ForceData[]} forces array of forces
 * @param {string} playerForce uniqid for player force
 * @returns {string[]} list of forces this player can control
 */
export const forcesControlledBy = (forces: ForceData[], playerForce: ForceData['uniqid']): Array<ForceData['uniqid']> => {
  const res: Array<ForceData['uniqid']> = []
  forces.forEach((force: ForceData) => {
    if (force.controlledBy && force.controlledBy.includes(playerForce)) {
      res.push(force.uniqid)
    }
  })
  return res
}

/** process the forces, to create a route store - used to manage
 * display and edits to planned routes
 * @param {string | undefined} selectedId uniqid for selected asset
 * @param {Phase} phase current game phase
 * @param {ForceData[]} forces array of forces
 * @param {string} playerForceId uniqid for player force
 * @param {PlatformTypeData[]} platformTypes descriptions for all types of platform
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid the grid object, used to find cell centres, used in declutter
 * @param {boolean} filterPlannedSteps whether to filter the planned steps to only one
 * @param {boolean} filterHistorySteps whether to filter the history steps to only one
 * @param {boolean} wargameInitiated whether this wargame has been initated yet
 * @param {RouteStore} oldStore existing RouteStore, so we can persist player modifications
 * @returns {RouteStore} RouteStore representing current data
 */
const routeCreateStore = (selectedId: string | undefined, phase: Phase, forces: ForceData[], playerForceId: ForceData['uniqid'],
  platformTypes: PlatformTypeData[], filterHistorySteps: boolean,
  filterPlannedSteps: boolean, wargameInitiated?: boolean, oldStore?: RouteStore, channel?: ChannelMapping): RouteStore => {
  const store: RouteStore = { routes: [] }

  const controls: Array<string> = forcesControlledBy(forces, playerForceId)
  const forceColorList: Array<ForceStyle> = forceColors(forces)

  const undefinedColor: ForceStyle = {
    force: 'undefined',
    forceId: undefined,
    color: '#999'
  }

  const localWargameInitiated: boolean = (wargameInitiated === undefined) ? true : wargameInitiated

  forces.forEach((force: ForceData) => {
    // see if we control it
    const thisForce = force.uniqid

    // are all asset of this force visible to me?
    const visibleToThisPlayer: boolean = force.visibleTo != null && force.visibleTo.includes(playerForceId)

    // do I actually control this platform type?
    const controlled = thisForce === playerForceId || controls.includes(thisForce)

    if (force.assets) {
      // loop through assets
      force.assets.forEach((asset: Asset) => {
        // we can only do this for assets with a position
        if (asset.position) {
          // see if there is an existing planned route for this asset
          const existingRouteBase: Route | undefined = oldStore && oldStore.routes.find((route: Route) => route.uniqid === asset.uniqid)

          // or are we admin in adjudication?
          const adminInAdj = playerForceId === UMPIRE_FORCE && phase === ADJUDICATION_PHASE

          // keep existing route if this is for one of our assets, otherwise use the incoming one
          const existingRoute: Route | undefined = controlled || adminInAdj ? existingRouteBase : undefined

          // dummy location, used if we don't have grid (such as in test)
          const dummyLocation: L.LatLng = L.latLng(12.2, 23.2)
          // sort out location.
          const assetPosition: string = (existingRoute && existingRoute.currentPosition) || asset.position
          const h3loc: number[] | undefined = (asset.position && h3ToGeo(asset.position)) || undefined
          const h3locLatlng: L.LatLng | undefined = (h3loc && L.latLng(h3loc[0], h3loc[1])) || undefined
          const assetLocation: L.LatLng = (h3locLatlng) || dummyLocation

          // is it the selected asset?
          const isSelectedAsset: boolean = selectedId ? asset.uniqid === selectedId : false

          // sort out if this role can control this asset
          const controlledByThisRole = !!(channel && false)

          if (controlled || visibleToThisPlayer || playerForceId === UMPIRE_FORCE) {
            // asset under player control or player is umpire, so use real attributes
            // if it's the selected asset, we plot all future steps
            const applyFilterPlannedSteps: boolean = filterPlannedSteps && !isSelectedAsset

            const newRoute: Route = routeCreateRoute(asset, phase, force.color,
              controlled, controlledByThisRole, visibleToThisPlayer, force.uniqid, force.uniqid, asset.name, asset.platformTypeId,
              platformTypes, playerForceId, asset.status, assetPosition, assetLocation,
              true, filterHistorySteps, applyFilterPlannedSteps, isSelectedAsset, existingRoute, localWargameInitiated)

            if (existingRoute) {
              // ok, copy the adjudication state
              newRoute.adjudicationState = existingRoute.adjudicationState
              // and visible to
              newRoute.visibleTo = existingRoute.visibleTo
              if (existingRoute.condition) {
                newRoute.condition = existingRoute.condition
              }
            }
            store.routes.push(newRoute)
          } else {
            // ok, special handling - if this is an organisation that comprises others. We return the tangible assets,
            // not the organisational unit
            if (asset.comprising && asset.comprising.length) {
              // process list of children
              asset.comprising.forEach((child: Asset) => {
                // can't see it directly. See if we can perceive it
                const perceivedColor: ForceStyle | undefined = isPerceivedBy(child.perceptions, playerForceId, forceColorList, undefinedColor)
                if (perceivedColor) {
                  const perceptions = findPerceivedAsTypes(playerForceId, child.name, false, child.contactId,
                    thisForce, child.platformTypeId, child.perceptions)

                  // note: compiler/linter forcing us to re-check asset.position
                  if (asset.position && perceptions) {
                    // create route for this asset
                    const newRoute: Route = routeCreateRoute(child, phase, perceivedColor.color, false, false, false, force.uniqid, perceptions.forceId,
                      perceptions.name, perceptions.typeId, platformTypes, playerForceId, asset.status, assetPosition, assetLocation,
                      false, filterHistorySteps, filterPlannedSteps, isSelectedAsset, existingRoute, localWargameInitiated)
                    store.routes.push(newRoute)
                  }
                }
              })
            } else {
              // it's not a composite unit, just process it
              const perceivedColor: ForceStyle | undefined = isPerceivedBy(asset.perceptions, playerForceId, forceColorList, undefinedColor)
              if (perceivedColor) {
                const perceptions = findPerceivedAsTypes(playerForceId, asset.name, false, asset.contactId,
                  thisForce, asset.platformTypeId, asset.perceptions)
                if (perceptions) {
                  // create route for this asset
                  const newRoute: Route = routeCreateRoute(asset, phase, perceivedColor.color, false, false, false, force.uniqid, perceptions.forceId,
                    perceptions.name, perceptions.typeId, platformTypes, playerForceId, asset.status, assetPosition, assetLocation,
                    false, filterHistorySteps, filterPlannedSteps, isSelectedAsset, existingRoute, localWargameInitiated)
                  store.routes.push(newRoute)
                }
              }
            }
          }
        }
      })
    }
  })

  // also store the selected track
  if (selectedId) {
    const selectedRoute: Route | undefined = store.routes.find(route => route.uniqid === selectedId)
    store.selected = selectedRoute
  }

  // loop through forces
  return store
}

export default routeCreateStore
