import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'

export interface RouteData {
  polyline: LatLng[]
  turnEnds: LatLng[]
}

const routesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: [any], 
  trimmed: boolean): RouteData => {
    const polyline: LatLng[] = []
    const turnEnds: LatLng[] = []
    var stepCtr = 0
    // start with current position
    const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
    if(startCell) {
      const startPos: LatLng = startCell.centreLatLng
      if(steps) {
        polyline.push(startPos)
        steps.forEach((step:any) => {
          stepCtr ++
          const route = step.route
          if(route) {
            var thisRouteCtr = 0 // how many steps have been recorded for this route
            route.forEach((routeStep:any) => {
              const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
              if(thisCell && (!trimmed || stepCtr <= 2)) {
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

export default routesFor
