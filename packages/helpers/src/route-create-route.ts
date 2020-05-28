import { Route, RouteStatus, RouteStep } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

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
          } else if (step.position) {
            // ok, this is legacy way of recording past steps
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

/** create a route object for this asset
 * @param {any} asset single asset
 * @param {boolean} adjudication whether this is umpire in adjudication
 * @returns {Route} Routefor this asset
 */
const routeCreateRoute = (asset: any, adjudication: boolean): Route => {
  const stat = asset.status
  const currentStatus: RouteStatus = stat.speedKts
    ? { state: stat.status, speedKts: stat.speedKts }
    : { state: stat.status }

  // collate the planned turns, since we want to keep a
  // duplicate set (in case the user cancels changes)
  const futureSteps: Array<RouteStep> = createStepArray(asset.plannedTurns, adjudication)

  return {
    uniqid: asset.uniqid,
    selected: false,
    history: createStepArray(asset.history),
    currentStatus: currentStatus,
    currentPosition: asset.position,
    planned: futureSteps,
    original: cloneDeep(futureSteps)
  }
}

export default routeCreateRoute
