import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'

/** composite return tuple */
export interface RouteData {
  /**
   *  line representing this route (may include multiple steps per turn)
   */
  polyline: LatLng[]
  /** 
   * series of end-of-turn locations, one per turn
   */ 
  turnEnds: LatLng[]
}

/** the number of legs to display if the user wants trimmed data */
export const LENGTH_OF_TRIMMED_LINE: number = 2

/**
 *  generate the planned routes for this asset
 * @param gridCells the grid system for this map
 * @param position {string} hex cell where the asset currently is
 * @param steps {any} series of planned steps for asset
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
const plannedRoutesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: [any], 
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
          const route = step.route
          if(route) {
            var thisRouteCtr: number = 0 // how many steps have been recorded for this route
            route.forEach((routeStep:any) => {
              const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
              if(thisCell && (!trimmed || stepCtr <= LENGTH_OF_TRIMMED_LINE)) {
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

export default plannedRoutesFor
