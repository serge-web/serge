import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'

import RouteData from '../types/route-data'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine: number = 2

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
    var stepCtr: number = 0
    // start with current position
    const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
    if(startCell) {
      const startPos: LatLng = startCell.centreLatLng
      if(steps) {
        // store the line start
        polyline.push(startPos)
        steps.forEach((step:any) => {
          stepCtr ++
          // first, does it contain a plain position?
          if(step.position) {
            // TODO: this block should be removed once we
            // remove the old way of structuring historic data
            // https://github.com/serge-web/serge/issues/395            
            const thisCell: SergeHex<{}> | undefined = hexNamed(step.position, gridCells)
            if(thisCell && (!trimmed || stepCtr <= lengthOfTrimmedLine)) {
              turnEnds.push(thisCell.centreLatLng)
              polyline.push(thisCell.centreLatLng)
            }
          } else if (step.route) {
            var thisRouteCtr: number = 0 // how many steps have been recorded for this route
            step.route.forEach((routeStep:any) => {
              const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
              if(thisCell && (!trimmed || stepCtr <= lengthOfTrimmedLine)) {
                // is this the first cell?
                if(thisRouteCtr == 0) {
                  turnEnds.push(thisCell.centreLatLng)
                }
                polyline.push(thisCell.centreLatLng)
                thisRouteCtr ++
              }
            })
          }
        })
      }
    }
    const res: RouteData = {polyline: polyline , turnEnds: turnEnds}
    return res
}

