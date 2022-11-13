import { DATUM, LaydownPhases, LaydownTypes, Phase, PlanningStates, UMPIRE_FORCE, UMPIRE_FORCE_NAME, UNKNOWN_TYPE } from '@serge/config'
import { Asset, ForceData, PerceivedTypes, Perception, PlatformTypeData, Route, RouteChild, RouteStatus, RouteTurn } from '@serge/custom-types'
import { h3ToGeo } from 'h3-js'
import L from 'leaflet'
import { cloneDeep } from 'lodash'
import checkIfDestroyed from './check-if-destroyed'
import findPerceivedAsTypes from './find-perceived-as-types'
import findPlatformTypeFor from './find-platform-type-for'

const processStep = (step: RouteTurn): Array<RouteTurn> => {
  // dummy location, used if we don't have grid (such as in test)
  const dummyLocation: L.LatLng = L.latLng(12.2, 23.4)
  const res: Array<RouteTurn> = []
  if (step.status) {
    const steps: string[] = []
    const locations: Array<L.LatLng> = []
    if (step.route) {
      // ok, this is modern way of planned or history steps
      step.route.forEach((coord: string) => {
        steps.push(coord)
        const hex3: number[] = h3ToGeo(coord)
        const hex3Loc: L.LatLng = L.latLng(hex3[0], hex3[1])
        locations.push(hex3Loc || dummyLocation)
      })
    }
    // only include the speed parameter if there's one present
    // in the incoming object
    const status: RouteStatus = step.status.speedKts
      ? { state: step.status.state, speedKts: step.status.speedKts }
      : { state: step.status.state }

    // sort the status
    if (steps.length) {
      res.push({
        turn: step.turn,
        route: steps,
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
const createStepArray = (turns: RouteTurn[] | undefined, planned: boolean,
  filterSteps: boolean): Array<RouteTurn> => {
  let res: Array<RouteTurn> = []
  if (turns) {
    if (filterSteps) {
      if (turns.length > 0) {
        if (planned) {
          // just the first one
          res = processStep(turns[0])
        } else {
          // just the last one
          res = processStep(turns[turns.length - 1])
        }
      }
    } else {
      turns.forEach((step: RouteTurn) => {
        res = res.concat(processStep(step))
      })
    }
  }
  return res
}

const childrenFor = (list: Asset[] | undefined, platformTypes: PlatformTypeData[], underControl: boolean, assetForce: string, playerForce: string, color: string): Array<RouteChild> => {
  const res: Array<RouteChild> = []
  if (list) {
    list.forEach((item: Asset) => {
      const hosting: Array<RouteChild> = item.hosting && item.hosting.length
        ? childrenFor(item.hosting, platformTypes, underControl, assetForce, playerForce, color)
        : []
      if (underControl || playerForce === UMPIRE_FORCE || playerForce === UMPIRE_FORCE_NAME) {
        // use real values
        const newChild: RouteChild = {
          uniqid: item.uniqid,
          name: item.name,
          platformTypeId: item.platformTypeId,
          force: assetForce,
          destroyed: checkIfDestroyed(platformTypes, item.platformTypeId, item.condition),
          condition: item.condition,
          asset: item,
          hosting: hosting,
          perceivedForceColor: color
        }
        res.push(newChild)
      } else {
        // sort out if this player can see this assset
        const perceptions: PerceivedTypes | null = findPerceivedAsTypes(playerForce, item.name, false, item.contactId,
          assetForce, item.platformTypeId, item.perceptions)
        if (perceptions) {
          const newChild: RouteChild = {
            uniqid: item.uniqid,
            name: perceptions.name,
            platformTypeId: perceptions.typeId || UNKNOWN_TYPE,
            force: perceptions.forceId || UNKNOWN_TYPE,
            destroyed: checkIfDestroyed(platformTypes, item.platformTypeId, item.condition || ''),
            condition: item.condition || '',
            asset: item,
            hosting: hosting,
            perceivedForceColor: color
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
  return playerForce !== UMPIRE_FORCE ? [] : asset.perceptions ? asset.perceptions.map((perception: Perception) => {
    return perception.by
  }) : []
}

const produceStatusFor = (status: RouteStatus | undefined, platformTypes: PlatformTypeData[], asset: Asset): RouteStatus => {
  // handle when missing current status
  let currentState = 'undefined-type'
  let currentSpeed = 0
  if (status && status.state) {
    currentState = status.state
    currentSpeed = status.speedKts !== undefined ? status.speedKts : 0
  } else {
    const platform: PlatformTypeData | undefined = findPlatformTypeFor(platformTypes, '', asset.platformTypeId)
    if (platform) {
      const states = platform.states
      if (states && states.length) {
        currentState = states[0].name
      }
      const speeds = platform.speedKts
      if (speeds && speeds.length) {
        currentSpeed = speeds[0]
      }
    }
  }
  const currentStatus: RouteStatus = currentSpeed
    ? { state: currentState, speedKts: currentSpeed }
    : { state: currentState }

  return currentStatus
}

/** determine laydown phase for this asset
 * @param {Phase} phase current game phase
 * @param {boolean} wargameInitiated whether wargame has been initiated
 * @param {string} currentPosition the current asset position, from route or asset
 * @param {laydownTypes | string} locationPending the flag for laydown pending (or marker for Umpire/Force laydown)
 * @param {string} original position the original position for the asset
 * @param {Route} route current route description, potentially including location of laid-down asset
 */
export const laydownPhaseFor = (phase: Phase, wargameInitated: boolean, currentPosition?: string, locationPending?: LaydownTypes | string,
  originalPosition?: string, route?: Route): LaydownPhases => {
  if (phase !== Phase.Adjudication) {
    // ok, we only do laydown in adjudication phase
    return LaydownPhases.NotInLaydown
  } else if (locationPending === undefined) {
    if (currentPosition === undefined) {
      if (wargameInitated) {
        // assume player laydown, if wargame initiated
        return LaydownPhases.NotInLaydown
      } else {
        // assume umpire laydown
        return LaydownPhases.Immobile
      }
    } else {
      return LaydownPhases.Immobile
    }
  } else {
    if (wargameInitated) {
      if (phase === Phase.Adjudication) {
        // ok, adjudication phase
        switch (locationPending) {
          case LaydownTypes.UmpireLaydown:
            // if we're initiated then the player/umpire can't move it
            return LaydownPhases.Immobile
          case LaydownTypes.ForceLaydown: {
            const routePos = route && route.currentPosition
            const currentPos = routePos || currentPosition
            if (currentPos !== originalPosition) {
              // on map, but still can be moved
              return LaydownPhases.Moved
            } else {
              // not on map yet
              return LaydownPhases.Unmoved
            }
          }
        }
        // TODO: Check to return correct LaydownPhases type
        return LaydownPhases.Immobile
      } else {
        // in planning phase
        return LaydownPhases.Immobile
      }
    } else {
      // wargame not initiated - we're in umpire laydown phase
      switch (locationPending) {
        case LaydownTypes.ForceLaydown:
          // if we're not initiated then the umpire can't move it
          return LaydownPhases.Immobile
        case LaydownTypes.UmpireLaydown: {
          if (!currentPosition) {
            console.log('pos missing, returning unmoved')
            // umpire doing laydown, but existing position not known
            return LaydownPhases.Unmoved
          }
          const routePos = route && route.currentPosition
          const currentPos = routePos || currentPosition
          if (currentPos !== originalPosition) {
            // on map, but still can be moved
            return LaydownPhases.Moved
          } else {
            // not on map yet
            return LaydownPhases.Unmoved
          }
        }
      }
      // TODO Check to return correct LaydownPhases type
      return LaydownPhases.Immobile
    }
  }
}

/** create a route object for this asset
 * @param {Asset} asset single asset
 * @param {Phase} phase current game phase
 * @param {string} color color for rendering this asset
 * @param {boolean} underControlForce whether the player is controlling this asset
 * @param {boolean} visibleToThisForce whether this force can see this asset
 * @param {string} actualForceId the true force for the asset
 * @param {string} perceivedForce the perceived force of the asset
 * @param {string} perceivedName the perceived name of the asset
 * @param {string} perceivedType the perceived type of the asset
 * @param {any} platformTypes the list of platform types
 * @param {string} playerForce current player force
 * @param {RouteStatus | undefined} status the current status of this asset
 * @param {string} currentPosition the current cell containing this asset
 * @param {L.LatLng} currentLocation the current cell containing this asset
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid the grid object, used to find cell centres, used in declutter
 * @param {boolean} includePlanned whether to include planned turns for this platform
 * @param {boolean} filterHistorySteps whether to filter history steps to just the first one
 * @param {boolean} filterPlannedSteps whether to filter planned steps to just the first one
 * @param {boolean} isSelected whether is the route for the selected Asset
 * @param {Route} existingRoute an existing route for this asset
 * @param {boolean} wargameInitiated whether this wargame has been initiated
 * @returns {Route} Route for this asset
 */
const routeCreateRoute = (asset: Asset, phase: Phase, color: string,
  underControlForce: boolean, underControlRole: boolean, visibleToThisForce: boolean, actualForceId: ForceData['uniqid'], perceivedForce: ForceData['uniqid'] | undefined, perceivedName: string,
  perceivedTypeId: PlatformTypeData['uniqid'] | undefined, platformTypes: PlatformTypeData[], playerForce: string, status: RouteStatus | undefined, currentPosition: string,
  currentLocation: L.LatLng | undefined, includePlanned: boolean,
  filterHistorySteps: boolean, filterPlannedSteps: boolean, isSelected: boolean, existingRoute: Route | undefined,
  wargameInitiated: boolean): Route => {
  const currentStatus: RouteStatus = produceStatusFor(status, platformTypes, asset)

  const showHistory = asset.platformTypeId !== DATUM

  // store the potentially modified route data
  const plannedTurns: RouteTurn[] | undefined = existingRoute && existingRoute.planned

  // collate the planned turns, since we want to keep a
  // duplicate set (in case the user cancels changes)
  const futureStepsTrimmed: Array<RouteTurn> = includePlanned ? createStepArray(plannedTurns || asset.plannedTurns, true, filterPlannedSteps) : []
  const futureSteps: Array<RouteTurn> = includePlanned ? createStepArray(plannedTurns || asset.plannedTurns, true, false) : []
  const numberOfPlannedTurns = plannedTurns ? plannedTurns.length : asset.plannedTurns ? asset.plannedTurns.length : 0

  const onlyOneStep = !underControlForce // if we can't control force, only ever allow one step of history.
  // this is to prevent a player recognising a contact is the same as an earlier one.
  const historySteps: Array<RouteTurn> = createStepArray(asset.history, false, filterHistorySteps || onlyOneStep) // we plot all history, so ignore whether in adjudication

  const destroyed: boolean = checkIfDestroyed(platformTypes, asset.platformTypeId, asset.condition)

  const hosting: Array<RouteChild> = childrenFor(asset.hosting, platformTypes, underControlForce, actualForceId, playerForce, color /*, forceColors, undefinedColor */)
  const comprising: Array<RouteChild> = childrenFor(asset.comprising, platformTypes, underControlForce, actualForceId, playerForce, color /*, forceColors, undefinedColor */)

  const adjudicationState: PlanningStates | undefined = playerForce === UMPIRE_FORCE ? PlanningStates.Pending : undefined

  const visibleTo: Array<string> = determineVisibleTo(asset, playerForce)

  const laydownPhase = underControlRole
    ? laydownPhaseFor(phase, wargameInitiated, currentPosition, asset.locationPending, asset.position, existingRoute)
    : LaydownPhases.Immobile

  return {
    uniqid: asset.uniqid,
    name: perceivedName,
    selected: isSelected,
    platformTypeId: perceivedTypeId,
    underControlByThisForce: underControlForce,
    underControlByThisRole: underControlRole,
    visibleToThisForce: visibleToThisForce,
    perceivedForceId: perceivedForce,
    perceivedForceColor: color,
    actualForceId: actualForceId,
    color: color,
    hosting: hosting,
    comprising: comprising,
    destroyed: destroyed,
    history: showHistory ? historySteps : [],
    currentStatus: currentStatus,
    currentPosition: currentPosition,
    currentLocation2: currentLocation,
    originalPosition: asset.position,
    laydownPhase: laydownPhase,
    planned: futureSteps,
    plannedTrimmed: futureStepsTrimmed,
    plannedTurnsCount: numberOfPlannedTurns,
    original: cloneDeep(futureSteps),
    asset: asset,
    visibleTo: visibleTo,
    condition: asset.condition,
    adjudicationState: adjudicationState,
    attributes: asset.attributeValues || []
  }
}

export default routeCreateRoute
