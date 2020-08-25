import { LatLng } from 'leaflet'

/* Impot types */
import { RouteTurn, RouteTurnDuo, RouteStep as RouteStepType } from '@serge/custom-types'
import RouteData, { RouteStep } from '../types/route-data'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/**
 *  generate the planned routes for this asset
 * @param {LatLng} startLocation location where the asset currently is
 * @param {any} steps series of planned steps for asset
 * @param {boolean} trimmed whether to only show trimmed portion of data
 * @param {boolean} history whether this is history or planned steps
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const routesFor = (startLocation: LatLng | undefined, steps: RouteStepType[],
  trimmed: boolean, history: boolean): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: Array<RouteTurn> = []
  const routeSteps: RouteStep[] = []
  let lastLocation: RouteTurnDuo | undefined
  let lastButOneLocation: RouteTurnDuo | undefined
  let stepCtr = 0
  // start with current position
  if (startLocation) {
    if (steps) {
      // store the line start if it's planned routes
      if (!history) {
        polyline.push(startLocation)
      }
      steps.forEach((step: RouteStepType) => {
        stepCtr++
        // first, does it contain a plain position, and is it within
        // the required length?
        if (step.locations && (!trimmed || stepCtr < lengthOfTrimmedLine)) {
          let thisRouteCtr = 0 // how many steps have been recorded for this route
          step.locations.forEach((stepLocation: L.LatLng) => {
            const currentLocation: RouteTurnDuo = { pos: stepLocation, name: 'step_' + thisRouteCtr }
            // is this the first cell?
            if (thisRouteCtr === 0) {
              // do we have two previous steps?
              if (lastButOneLocation && lastLocation) {
                // ok, we have enough for a turn
                const newTurn: RouteTurn = {
                  current: lastLocation,
                  previous: lastButOneLocation,
                  turn: stepCtr,
                  next: currentLocation
                }
                turnEnds.push(newTurn)
              }
            } else if (step.coords && thisRouteCtr === step.coords.length - 1) {
              let routeStep: RouteStep
              if (step.status.speedKts) {
                routeStep = {
                  position: stepLocation,
                  status: {
                    speedKts: step.status.speedKts,
                    state: step.status.state
                  }
                }
              } else {
                routeStep = {
                  position: stepLocation,
                  status: {
                    state: step.status.state
                  }
                }
              }
              routeSteps.push(routeStep)
            }
            lastButOneLocation = lastLocation
            lastLocation = currentLocation
            polyline.push(stepLocation)
            thisRouteCtr++
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
