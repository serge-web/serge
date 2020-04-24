import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'
import { RouteData } from './planned-routes-for'
import { LENGTH_OF_TRIMMED_LINE } from './planned-routes-for'

const historyRoutesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: [any], 
  trimmed: boolean): RouteData => {
    const polyline: LatLng[] = []
    const turnEnds: LatLng[] = []
    var stepCtr = 0
    // start with current position
    const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
    if(startCell) {
      const startPos: LatLng = startCell.centreLatLng
      if(steps) {
        // store the line start
        polyline.push(startPos)
        steps.forEach((step:any) => {
          stepCtr ++
          const location = step.position
          if(location) {
            const thisCell: SergeHex<{}> | undefined = hexNamed(location, gridCells)
            if(thisCell && (!trimmed || stepCtr <= LENGTH_OF_TRIMMED_LINE)) {
              turnEnds.push(thisCell.centreLatLng)
              polyline.push(thisCell.centreLatLng)
            }
          }
        })
      }
    }
    const res: RouteData = {polyline: polyline , turnEnds: turnEnds}
    return res
}

export default historyRoutesFor
