import { LatLng } from 'leaflet'

/* Impot types */
import { SergeHex, SergeGrid } from '@serge/custom-types'
import RouteData, { RouteStep } from '../types/route-data'

import { hexNamed } from '@serge/helpers'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/**
 *  generate the planned routes for this asset
 * @param gridCells the grid system for this map
 * @param position {string} hex cell where the asset currently is
 * @param steps {any} series of planned steps for asset
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const routesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: [any],
  trimmed: boolean): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: LatLng[] = []
  const routeSteps: RouteStep[] = [];

  let stepCtr = 0
  // start with current position
  const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
  if (startCell) {
    const startPos: LatLng = startCell.centreLatLng
    if (steps) {
      // store the line start
      polyline.push(startPos)
      steps.forEach((step: any) => {
        stepCtr++
        // first, does it contain a plain position?
        if (step.position) {
          // TODO: this block should be removed once we
          // remove the old way of structuring historic data
          // https://github.com/serge-web/serge/issues/395
          const thisCell: SergeHex<{}> | undefined = hexNamed(step.position, gridCells)
          if (thisCell && (!trimmed || stepCtr <= lengthOfTrimmedLine)) {
            turnEnds.push(thisCell.centreLatLng)
            polyline.push(thisCell.centreLatLng)
          }
        } else if (step.route) {
          let thisRouteCtr = 0 // how many steps have been recorded for this route
          step.route.forEach((routeStep: any) => {
            const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
            if (thisCell && (!trimmed || stepCtr <= lengthOfTrimmedLine)) {
              // is this the first cell?
              if (thisRouteCtr === 0) {
                turnEnds.push(thisCell.centreLatLng)
              }
              else if (thisRouteCtr === step.route.length - 1) {
                const routeStep: RouteStep = {
                  position: thisCell.centreLatLng,
                  status: {
                    speedKts: step.status.speedKts,
                    state: step.status.state
                  }
                };
                routeSteps.push(routeStep);
              }
              polyline.push(thisCell.centreLatLng)
              thisRouteCtr++
            }
          })
        }
      })
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds, steps: routeSteps }
  return res
}
