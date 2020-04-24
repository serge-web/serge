import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'

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

export const LENGTH_OF_TRIMMED_LINE: number = 2

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
