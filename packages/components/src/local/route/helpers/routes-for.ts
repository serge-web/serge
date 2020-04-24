import { LatLng } from 'leaflet'

import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'
import hexNamed from '../../hex-grid/helpers/hex-named'

const routesFor = (gridCells: SergeGrid<SergeHex<{}>>, position: string, steps: [any], 
  trimmed: boolean): LatLng[] => {
    const res: LatLng[] = []
    // start with current position
    const startCell: SergeHex<{}> | undefined = hexNamed(position, gridCells)
    if(startCell) {
      const startPos: LatLng = startCell.centreLatLng
      if(steps) {
        res.push(startPos)
        steps.forEach((step:any) => {
          const route = step.route
          route.forEach((routeStep:any) => {
            const thisCell: SergeHex<{}> | undefined = hexNamed(routeStep, gridCells)
            if(thisCell) {
              res.push(thisCell.centreLatLng)
            }
            var waste: boolean = route
            waste = waste && trimmed
          })
        })
      }
    }
    return res
}

export default routesFor
