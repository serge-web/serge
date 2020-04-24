import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'
import { RouteData } from './planned-routes-for'
import { LENGTH_OF_TRIMMED_LINE } from './planned-routes-for'

/**
 *  generate the past routes for this asset
 * @param gridCells the grid system for this map
 * @param position {string} hex cell where the asset currently is
 * @param steps {any} series of past steps for asset
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
const historyRoutesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: [any], 
  trimmed: boolean): RouteData => {
    const polyline: LatLng[] = []
    const turnEnds: LatLng[] = []
    var stepCtr: number = 0 // keep track of how many steps/legs we've processed
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
