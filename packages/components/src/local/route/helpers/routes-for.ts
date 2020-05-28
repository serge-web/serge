import { LatLng } from 'leaflet'

/* Impot types */
import { SergeHex, SergeGrid, RouteStep } from '@serge/custom-types'
import RouteData from '../types/route-data'

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
export const routesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: RouteStep[],
  trimmed: boolean): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: LatLng[] = []
  let stepCtr = 0
  // start with current position
  const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
  if (startCell) {
    const startPos: LatLng = startCell.centreLatLng
    if (steps) {
      // store the line start
      polyline.push(startPos)
      steps.forEach((step: RouteStep) => {
        stepCtr++
        // first, does it contain a plain position?
        if (step.coords && (!trimmed || stepCtr < lengthOfTrimmedLine)) {
          let thisRouteCtr = 0 // how many steps have been recorded for this route
          step.coords.forEach((routeStep: any) => {
            const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
            if (thisCell) {
              // is this the first cell?
              if (thisRouteCtr === 0) {
                turnEnds.push(thisCell.centreLatLng)
              }
              polyline.push(thisCell.centreLatLng)
              thisRouteCtr++
            }
          })
        }
      })
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds }
  return res
}
