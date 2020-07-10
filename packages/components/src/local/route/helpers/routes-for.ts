import { LatLng } from 'leaflet'

/* Impot types */
import { SergeHex, SergeGrid, RouteTurn, RouteTurnDuo, RouteStep as RouteStepType } from '@serge/custom-types'
import RouteData, { RouteStep } from '../types/route-data'

import { hexNamed } from '@serge/helpers'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/**
 *  generate the planned routes for this asset
 * @param {SergeGrid<SergeHex<{}>>} gridCells the grid system for this map
 * @param {string} position hex cell where the asset currently is
 * @param {any} steps series of planned steps for asset
 * @param {boolean} trimmed whether to only show trimmed portion of data
 * @param {boolean} history whether this is history or planned steps
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const routesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: RouteStepType[],
  trimmed: boolean, history: boolean): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: Array<RouteTurn> = []
  const routeSteps: RouteStep[] = []
  let lastLocation: RouteTurnDuo | undefined = undefined
  let lastButOneLocation: RouteTurnDuo | undefined = undefined
  let stepCtr = 0
  // start with current position
  const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
  if (startCell) {
    const startPos: LatLng = startCell.centreLatLng
    console.log('start:', position, ' history:', history)
    if (steps) {
      // store the line start if it's planned routes
      if (!history) {
        polyline.push(startPos)
      }
      steps.forEach((step: RouteStepType) => {
        stepCtr++
        // first, does it contain a plain position, and is it within
        // the required length?
        if (step.coords && (!trimmed || stepCtr < lengthOfTrimmedLine)) {
          let thisRouteCtr = 0 // how many steps have been recorded for this route
          console.log('step.coords', step.coords)
          step.coords.forEach((routeStep: any) => {
            const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
            if (thisCell) {
              const currentLocation: RouteTurnDuo = { pos: thisCell.centreLatLng, name: routeStep }
              // is this the first cell?
              if (thisRouteCtr === 0) {
                const newTurn: RouteTurn = {
                  current: currentLocation,
                  previous: lastLocation, 
                  turn: stepCtr
                }
                turnEnds.push(newTurn)
              } else if (step.coords && thisRouteCtr === step.coords.length - 1) {
                let routeStep: RouteStep
                if (step.status.speedKts) {
                  routeStep = {
                    position: thisCell.centreLatLng,
                    status: {
                      speedKts: step.status.speedKts,
                      state: step.status.state
                    }
                  }
                } else {
                  routeStep = {
                    position: thisCell.centreLatLng,
                    status: {
                      state: step.status.state
                    }
                  }
                }
                // handle the turn end
                if(turnEnds.length) {
                  const lastTurn: RouteTurn = turnEnds[turnEnds.length - 1]
                  if(!lastTurn.next) {
                    lastTurn.next = currentLocation
                  }
                }
                routeSteps.push(routeStep)
              }
              lastButOneLocation = lastLocation
              lastLocation = currentLocation
              polyline.push(thisCell.centreLatLng)
              thisRouteCtr++
            }
          })
        }
      })
      if (history) {
        polyline.push(startPos)
      }
    }


    // see if we need to put in a trailing step
    if(turnEnds.length) {
      if(lastButOneLocation && lastLocation) {
        const lastTurn: RouteTurn = {
          current: lastLocation,
          previous: lastButOneLocation,
          turn: turnEnds[turnEnds.length-1].turn + 1
        }
        turnEnds.push(lastTurn)
      }
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds, steps: routeSteps }
  return res
}
