import { LatLng } from 'leaflet'

/* Impot types */
import { SergeHex, SergeGrid, RouteStep as RouteStepType } from '@serge/custom-types'
import RouteData, { RouteStep } from '../types/route-data'

import { hexNamed } from '@serge/helpers'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/**
 *  generate the planned routes for this asset
 * @param {SergeGrid<SergeHex<{}>>} gridCells the grid system for this map
 * @param {string} position hex cell where the asset currently is
 * @param {any} steps series of planned steps for asset
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const routesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: RouteStepType[],
  trimmed: boolean): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: LatLng[] = []
  const routeSteps: RouteStep[] = []

  let stepCtr = 0
  // start with current position
  const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
  if (startCell) {
    const startPos: LatLng = startCell.centreLatLng
    if (steps) {
      // store the line start
      polyline.push(startPos)
      steps.forEach((step: RouteStepType) => {
        stepCtr++
        // first, does it contain a plain position, and is it within
        // the required length?
        if (step.coords && (!trimmed || stepCtr < lengthOfTrimmedLine)) {
          let thisRouteCtr = 0 // how many steps have been recorded for this route
          step.coords.forEach((routeStep: any) => {
            const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
            if (thisCell) {
              // is this the first cell?
              if (thisRouteCtr === 0) {
                turnEnds.push(thisCell.centreLatLng)
              } else if (step.coords && thisRouteCtr === step.coords.length - 1) {
                let routeStep: RouteStep
                if(step.status.speedKts) {
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
                routeSteps.push(routeStep)
              }
              polyline.push(thisCell.centreLatLng)
              thisRouteCtr++
            }
          }
        })
        }
      })
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds, steps: routeSteps }
  return res
}
