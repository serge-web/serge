import { LatLng } from 'leaflet'

/* Impot types */
import { RouteTurn, RouteTurnDuo, RouteStep as RouteStepType } from '@serge/custom-types'
import RouteData, { RouteStep } from '../types/route-data'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/**
 *  generate the planned routes for this asset
 * @param {LatLng} startLocation location where the asset currently is
 * @param {any} turns series of planned steps for asset
 * @param {boolean} trimmed whether to only show trimmed portion of data
 * @param {boolean} history whether this is history or planned steps
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const routesFor = (name: string, startLocation: LatLng | undefined, turns: RouteStepType[],
  history: boolean): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: Array<RouteTurn> = []
  const routeSteps: RouteStep[] = []
  let lastLocation: RouteTurnDuo | undefined
  let lastButOneLocation: RouteTurnDuo | undefined
  let turnCtr = 0
  // start with current position
  if (startLocation) {
    if (turns) {
      // store the line start if it's planned routes
      if (!history) {
        polyline.push(startLocation)
      }
      turns.forEach((turn: RouteStepType) => {
        turnCtr++
        // first, does it contain a plain position, and is it within
        // the required length?
        if (turn.locations) {
          let stepsThisTurn = 0 // how many steps have been recorded for this route
          turn.locations.forEach((step: L.LatLng) => {
            if(name === 'Dhow-A') {
              console.log(name, step)
            }
            const currentLocation: RouteTurnDuo = { pos: step, name: 'step_' + stepsThisTurn }
            // is this the first cell?
            if (stepsThisTurn === 0) {
              // do we have two previous steps?
              if (lastButOneLocation && lastLocation) {
                // ok, we have enough for a turn
                const newTurn: RouteTurn = {
                  current: lastLocation,
                  previous: lastButOneLocation,
                  turn: turnCtr,
                  next: currentLocation
                }
                turnEnds.push(newTurn)
              }
            } else if (turn.coords && stepsThisTurn === turn.coords.length - 1) {
              let routeStep: RouteStep
              if (turn.status.speedKts) {
                routeStep = {
                  position: step,
                  status: {
                    speedKts: turn.status.speedKts,
                    state: turn.status.state
                  }
                }
              } else {
                routeStep = {
                  position: step,
                  status: {
                    state: turn.status.state
                  }
                }
              }
              routeSteps.push(routeStep)
            }
            lastButOneLocation = lastLocation
            lastLocation = currentLocation
            polyline.push(step)
            stepsThisTurn++
          })
        }
      })
      // store the line end if it's history
      if (history) {
        polyline.push(startLocation)
      }
    }

    // see if we need to put in a trailing step
    if (turnEnds.length) {
      if (lastButOneLocation && lastLocation) {
        const lastTurn: RouteTurn = {
          current: lastLocation,
          previous: lastButOneLocation,
          turn: turnEnds[turnEnds.length - 1].turn + 1
        }
        turnEnds.push(lastTurn)
      }
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds, steps: routeSteps }
  return res
}
