import { Route, RouteStatus, RouteStep, RouteChild} from '@serge/custom-types'
import { cloneDeep } from 'lodash'
import checkIfDestroyed from './check-if-destroyed'
import findPerceivedAsTypes from './find-perceived-as-types'
import { UMPIRE_FORCE } from '@serge/config'

/** convert legacy array object to new TypeScript structure
 *
 */
const createStepArray = (turns: any, adjudication: boolean): Array<RouteStep> => {
  const res: RouteStep[] = []
  if (turns) {
    turns.forEach((step: any) => {
      if(!adjudication || res.length == 0)
      {
        if (step.status) {
          const steps: string[] = []
          if (step.route) {
            // ok, this is modern way of planned or history steps
            step.route.forEach((coord: any) => {
              steps.push(coord)
            })
          } else if(step.coords) {
            // ok, this is legacy way of planned or history steps
            step.coords.forEach((coord: any) => {
              steps.push(coord)
            })
          } else if (step.position) {
            // ok, this is legacy way of recording stationary past steps
            steps.push(step.position)
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
            status: status
          })
        }  
      }
    })
  }
  return res
}

const childrenFor = (list: any, platformTypes: any, underControl: boolean, assetForce: string, playerForce: string):Array<RouteChild> => {
  const res: Array<RouteChild> = []
  if(list) {
    list.forEach((item: any) => {
      if(underControl || playerForce === UMPIRE_FORCE) {
        // use real values
        const newChild: RouteChild = {
          uniqid: item.uniqid,
          name: item.name,
          platformType: item.platformType,
          force: assetForce,
          destroyed: checkIfDestroyed(platformTypes, item.platformType, item.condition),
          condition: item.condition,
          asset: item
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
            asset: item
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
 * @param {boolean} adjudication whether this is umpire in adjudication
 * @param {string} color color for rendering this asset
 * @param {boolean} underControl
 * @param {string} actualForce
 * @param {string} perceivedForce
 * @param {string} perceivedName
 * @param {string} perceivedType
 * @param {any} platformTypes
 * @param {string} playerForce
 * @param {any} status
 * @param {string} currentPosition
 * @returns {Route} Routefor this asset
 */
const routeCreateRoute = (asset: any, adjudication: boolean, color: string,
  underControl: boolean, actualForce: string, perceivedForce: string, perceivedName: string, 
  perceivedType: string, platformTypes: any, playerForce: string, status: any, currentPosition: string): Route => {
  const currentStatus: RouteStatus = status.speedKts
    ? { state: status.state, speedKts: status.speedKts }
    : { state: status.state }

  // collate the planned turns, since we want to keep a
  // duplicate set (in case the user cancels changes)
  const futureSteps: Array<RouteStep> = createStepArray(asset.plannedTurns, adjudication)

  const destroyed: boolean = checkIfDestroyed(platformTypes, asset.platformType, asset.condition)

  const hosting: Array<RouteChild> = childrenFor(asset.hosting, platformTypes, underControl, actualForce, playerForce /*, forceColors, undefinedColor */)
  const comprising: Array<RouteChild> = childrenFor(asset.comprising, platformTypes, underControl, actualForce, playerForce /*, forceColors, undefinedColor */)

  return {
    uniqid: asset.uniqid,
    name: perceivedName,
    selected: false,
    platformType: perceivedType,
    underControl: underControl,
    perceivedForceName: perceivedForce,
    actualForceName: actualForce,
    color: color,
    hosting: hosting,
    comprising: comprising,
    destroyed: destroyed,
    history: createStepArray(asset.history, false), // we plot all history, so ignore whether
                                                    // in adjudication
    currentStatus: currentStatus,
    currentPosition: currentPosition,
    planned: futureSteps,
    original: cloneDeep(futureSteps),
    asset: asset
  }
}

export default routeCreateRoute
