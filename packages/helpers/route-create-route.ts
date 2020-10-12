import L from 'leaflet'
import { Route, RouteStatus, RouteStep, RouteChild, SergeGrid, SergeHex} from '@serge/custom-types'
import { cloneDeep } from 'lodash'
import checkIfDestroyed from './check-if-destroyed'
import findPerceivedAsTypes from './find-perceived-as-types'
import { UMPIRE_FORCE } from '@serge/config'
import hexNamed from './hex-named'

const processStep = (grid: SergeGrid<SergeHex<{}>> | undefined,
  step: any, res: Array<RouteStep>): Array<RouteStep> => {
  // dummy location, used if we don't have grid (such as in test)
  const dummyLocation: L.LatLng = L.latLng(12.2, 23.4)

  if (step.status) {
    const steps: string[] = []
    const locations: Array<L.LatLng> = []
    if (step.route) {
      // ok, this is modern way of planned or history steps
      step.route.forEach((coord: any) => {
        steps.push(coord)
        const hex: SergeHex<{}> | undefined = grid && hexNamed(coord, grid)
        locations.push(hex && hex.centreLatLng || dummyLocation)
      })
    } else if(step.coords) {
      // ok, this is legacy way of planned or history steps
      step.coords.forEach((coord: any) => {
        steps.push(coord)
        const hex: SergeHex<{}> | undefined = grid && hexNamed(coord, grid)
        locations.push(hex && hex.centreLatLng || dummyLocation)
      })
    } else if (step.position) {
      // ok, this is legacy way of recording stationary past steps
      steps.push(step.position)
      const hex: SergeHex<{}> | undefined = grid && hexNamed(step.position, grid)
      locations.push(hex && hex.centreLatLng || dummyLocation)
    }

    // only include the speed parameter if there's one present
    // in the incoming object
    const status: RouteStatus = step.status.speedKts
      ? { state: step.status.state, speedKts: step.status.speedKts }
      : { state: step.status.state }

    // sort the status
    res.push({
      turn: step.turn,
      coords: steps,
      locations: locations,
      status: status
    })
  }
  return res
}

/** convert legacy array object to new TypeScript structure
 *
 */
const createStepArray = (turns: any, grid: SergeGrid<SergeHex<{}>> | undefined, planned: boolean,
    filterSteps: boolean): Array<RouteStep> => {
  let res: Array<RouteStep> = []
  if (turns) {
    if(filterSteps) {
      if(turns.length > 0) {
        if(planned) {
          // just the first one
          res = processStep(grid, turns[0], res)
        } else {
          // just the last one
          res = processStep(grid, turns[turns.length-1], res)
        }         
      }
    } else {
      turns.forEach((step: any) => {
        res = processStep(grid, step, res)  
      })
    }
  }
  return res
}

const childrenFor = (list: any, platformTypes: any, underControl: boolean, assetForce: string, playerForce: string):Array<RouteChild> => {
  const res: Array<RouteChild> = []
  if(list) {
    list.forEach((item: any) => {
      let hosting: Array<RouteChild> = item.hosting && item.hosting.length ? 
        childrenFor(item.hosting, platformTypes, underControl, assetForce, playerForce) :
        []
      if(underControl || playerForce === UMPIRE_FORCE) {

        // use real values
        const newChild: RouteChild = {
          uniqid: item.uniqid,
          name: item.name,
          platformType: item.platformType,
          force: assetForce,
          destroyed: checkIfDestroyed(platformTypes, item.platformType, item.condition),
          condition: item.condition,
          asset: item,
          hosting: hosting
        }
        res.push(newChild)    
      } else {
        // sort out if this player can see this assset
        const perceptions: [string, string, string] = findPerceivedAsTypes(playerForce, item.name, item.contactId,
          assetForce, item.platformType, item.perceptions, false)
        if(perceptions) {
          const newChild: RouteChild = {
            uniqid: item.uniqid,
            name: perceptions[0],
            platformType: perceptions[2],
            force: perceptions[1],
            destroyed: checkIfDestroyed(platformTypes, item.platformType, item.condition),
            condition: item.condition,
            asset: item,
            hosting:hosting
          }
          res.push(newChild)    
        }
      }
    })
  }
  return res
}

/** create a route object for this asset
 * @param {any} asset single asset
 * @param {string} color color for rendering this asset
 * @param {boolean} underControl whether the player is controlling this asset
 * @param {string} actualForce the true force for the asset
 * @param {string} perceivedForce the perceived force of the asset
 * @param {string} perceivedName the perceived name of the asset
 * @param {string} perceivedType the perceived type of the asset
 * @param {any} platformTypes the list of platform types
 * @param {string} playerForce current player force
 * @param {any} status the current status of this asset
 * @param {string} currentPosition the current cell containing this asset
 * @param {L.LatLng} currentLocation the current cell containing this asset
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid the grid object, used to find cell centres, used in declutter
 * @param {boolean} includePlanned whether to include planned turns for this platform
 * @param {boolean} filterHistorySteps whether to filter history steps to just the first one
 * @param {boolean} filterPlannedSteps whether to filter planned steps to just the first one
 * @param {boolean} isSelected whether is the route for the selected Asset
 * @returns {Route} Routefor this asset
 */
const routeCreateRoute = (asset: any, color: string,
  underControl: boolean, actualForce: string, perceivedForce: string, perceivedName: string, 
  perceivedType: string, platformTypes: any, playerForce: string, status: any, currentPosition: string,
  currentLocation: L.LatLng,  grid: SergeGrid<SergeHex<{}>> | undefined, includePlanned: boolean,
  filterHistorySteps: boolean, filterPlannedSteps: boolean, isSelected: boolean): Route => {
  const currentStatus: RouteStatus = status.speedKts
    ? { state: status.state, speedKts: status.speedKts }
    : { state: status.state }

  // collate the planned turns, since we want to keep a
  // duplicate set (in case the user cancels changes)
  const futureSteps: Array<RouteStep> = includePlanned ? createStepArray(asset.plannedTurns,  grid, true, filterPlannedSteps) : []

  const historySteps: Array<RouteStep> = createStepArray(asset.history, grid, 
      false, filterHistorySteps) // we plot all history, so ignore whether in adjudication

  const destroyed: boolean = checkIfDestroyed(platformTypes, asset.platformType, asset.condition)

  const hosting: Array<RouteChild> = childrenFor(asset.hosting, platformTypes, underControl, actualForce, playerForce /*, forceColors, undefinedColor */)
  const comprising: Array<RouteChild> = childrenFor(asset.comprising, platformTypes, underControl, actualForce, playerForce /*, forceColors, undefinedColor */)

  return {
    uniqid: asset.uniqid,
    name: perceivedName,
    selected: isSelected,
    platformType: perceivedType,
    underControl: underControl,
    perceivedForceName: perceivedForce,
    actualForceName: actualForce,
    color: color,
    hosting: hosting,
    comprising: comprising,
    destroyed: destroyed,
    history: historySteps,
    currentStatus: currentStatus,
    currentPosition: currentPosition,
    currentLocation: currentLocation,
    planned: futureSteps,
    original: cloneDeep(futureSteps),
    asset: asset
  }
}

export default routeCreateRoute
