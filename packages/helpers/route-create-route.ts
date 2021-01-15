import L from 'leaflet'
import { Route, RouteStatus, RouteStep, RouteChild, SergeGrid, SergeHex, Asset, PlannedTurnStatus, PlatformTypeData, PlannedTurn, PerceivedTypes, Perception} from '@serge/custom-types'
import { cloneDeep, kebabCase } from 'lodash'
import checkIfDestroyed from './check-if-destroyed'
import findPerceivedAsTypes from './find-perceived-as-types'
import { PlanningStates, UMPIRE_FORCE } from '@serge/config'
import hexNamed from './hex-named'

const processStep = (grid: SergeGrid<SergeHex<{}>> | undefined,
  step: PlannedTurn, res: Array<RouteStep>): Array<RouteStep> => {
  // dummy location, used if we don't have grid (such as in test)
  const dummyLocation: L.LatLng = L.latLng(12.2, 23.4)

  if (step.status) {
    const steps: string[] = []
    const locations: Array<L.LatLng> = []
    if (step.route) {
      // ok, this is modern way of planned or history steps
      step.route.forEach((coord: string) => {
        steps.push(coord)
        const hex: SergeHex<{}> | undefined = grid && hexNamed(coord, grid)
        locations.push(hex && hex.centreLatLng || dummyLocation)
      })
    }
    // only include the speed parameter if there's one present
    // in the incoming object
    const status: RouteStatus = step.status.speedKts
      ? { state: step.status.state, speedKts: step.status.speedKts }
      : { state: step.status.state }

    // sort the status
    if(steps.length) {
      res.push({
        turn: step.turn,
        coords: steps,
        locations: locations,
        status: status
      })  
    } else {
      res.push({
        turn: step.turn,
        status: status
      })
    }
  }
  return res
}

/** convert legacy array object to new TypeScript structure
 *
 */
const createStepArray = (turns: PlannedTurn[] | undefined, grid: SergeGrid<SergeHex<{}>> | undefined, planned: boolean,
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
      turns.forEach((step: PlannedTurn) => {
        res = processStep(grid, step, res)  
      })
    }
  }
  return res
}

const childrenFor = (list: Asset[] | undefined, platformTypes: PlatformTypeData[], underControl: boolean, assetForce: string, playerForce: string):Array<RouteChild> => {
  const res: Array<RouteChild> = []
  if(list) {
    list.forEach((item: Asset) => {
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
        const perceptions: PerceivedTypes | null = findPerceivedAsTypes(playerForce, item.name, item.contactId,
          assetForce, item.platformType, item.perceptions)
        if(perceptions) {
          const newChild: RouteChild = {
            uniqid: item.uniqid,
            name: perceptions.name,
            platformType: perceptions.type,
            force: perceptions.force,
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

/** determine which forces can see this asset
 * @param {Asset} asset the asset in question
 * @param {string} playerForce the force for this player, we only collate this data for the umpire force
 */
const determineVisibleTo = (asset: Asset, playerForce: string): Array<string> => {
  return playerForce != UMPIRE_FORCE ? [] : asset.perceptions ? asset.perceptions.map((perception: Perception) => {
    return perception.by
  }) : []
}

/** convert steps to turns, so they look like what comes from the Forces object
 * 
 */
const stepsToTurns = (planned: RouteStep[] | undefined): PlannedTurn[] | undefined => {
  if(planned && planned.length) {
    return planned.map((step: RouteStep): PlannedTurn => {
      return {
        turn: step.turn,
        status: step.status,
        route: step.coords
      }})
  }
  return undefined
}

const produceStatusFor = (status: PlannedTurnStatus | undefined, platformTypes: PlatformTypeData[], asset: Asset): RouteStatus => {

    // handle when missing current status
    let currentState: string = `undefined-tyoe`
    let currentSpeed: number = 0
    if(status && status.state) {
      currentState = status.state
      currentSpeed = status.speedKts !== undefined ? status.speedKts : 0
    } else {
      const platform: PlatformTypeData | undefined = platformTypes.find((platform: PlatformTypeData) => kebabCase(platform.name) === kebabCase(asset.platformType))
      if(platform) {
        const states = platform.states
        if(states && states.length) {
          currentState = states[0].name
        }
        const speeds = platform.speedKts
        if(speeds && speeds.length) {
          currentSpeed = speeds[0]
        }
      }
    }
  const currentStatus: RouteStatus =  currentSpeed
    ? { state: currentState, speedKts: currentSpeed }
    : { state: currentState }

  return currentStatus
}

/** create a route object for this asset
 * @param {Asset} asset single asset
 * @param {string} color color for rendering this asset
 * @param {boolean} underControl whether the player is controlling this asset
 * @param {string} actualForce the true force for the asset
 * @param {string} perceivedForce the perceived force of the asset
 * @param {string} perceivedName the perceived name of the asset
 * @param {string} perceivedType the perceived type of the asset
 * @param {any} platformTypes the list of platform types
 * @param {string} playerForce current player force
 * @param {PlannedTurnStatus | undefined} status the current status of this asset
 * @param {string} currentPosition the current cell containing this asset
 * @param {L.LatLng} currentLocation the current cell containing this asset
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid the grid object, used to find cell centres, used in declutter
 * @param {boolean} includePlanned whether to include planned turns for this platform
 * @param {boolean} filterHistorySteps whether to filter history steps to just the first one
 * @param {boolean} filterPlannedSteps whether to filter planned steps to just the first one
 * @param {boolean} isSelected whether is the route for the selected Asset
 * @returns {Route} Routefor this asset
 */
const routeCreateRoute = (asset: Asset, color: string,
  underControl: boolean, actualForce: string, perceivedForce: string, perceivedName: string, 
  perceivedType: string, platformTypes: PlatformTypeData[], playerForce: string, status: PlannedTurnStatus | undefined, currentPosition: string,
  currentLocation: L.LatLng,  grid: SergeGrid<SergeHex<{}>> | undefined, includePlanned: boolean,
  filterHistorySteps: boolean, filterPlannedSteps: boolean , isSelected: boolean, existingRoute: Route | undefined ): Route => {


  const currentStatus: RouteStatus =  produceStatusFor(status, platformTypes, asset)

  // provide the existing planned route as turns (which step array expects)
  const plannedTurns: PlannedTurn[] | undefined = stepsToTurns(existingRoute && existingRoute.planned)

  // collate the planned turns, since we want to keep a
  // duplicate set (in case the user cancels changes)
  const futureSteps_trimmed: Array<RouteStep> = includePlanned ? createStepArray(plannedTurns || asset.plannedTurns,  grid, true, filterPlannedSteps) : []
  const futureSteps: Array<RouteStep> = includePlanned ? createStepArray(plannedTurns || asset.plannedTurns,  grid, true, false) : []
  const numberOfPlannedTurns = plannedTurns ? plannedTurns.length : asset.plannedTurns ? asset.plannedTurns.length : 0

  const historySteps: Array<RouteStep> = createStepArray(asset.history, grid, 
      false, filterHistorySteps) // we plot all history, so ignore whether in adjudication

  const destroyed: boolean = checkIfDestroyed(platformTypes, asset.platformType, asset.condition)

  const hosting: Array<RouteChild> = childrenFor(asset.hosting, platformTypes, underControl, actualForce, playerForce /*, forceColors, undefinedColor */)
  const comprising: Array<RouteChild> = childrenFor(asset.comprising, platformTypes, underControl, actualForce, playerForce /*, forceColors, undefinedColor */)

  const adjudicationState: PlanningStates | undefined  = playerForce === UMPIRE_FORCE ? PlanningStates.Pending : undefined
  
  const visibleTo: Array<string> = determineVisibleTo(asset, playerForce)

  const condition: string | undefined = playerForce === UMPIRE_FORCE ? asset.condition : undefined

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
    planned_trimmed: futureSteps_trimmed,
    plannedTurnsCount: numberOfPlannedTurns,
    original: cloneDeep(futureSteps),
    asset: asset,
    visibleTo: visibleTo,
    condition: condition,
    adjudicationState: adjudicationState
  }
}

export default routeCreateRoute
