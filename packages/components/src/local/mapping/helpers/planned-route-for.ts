import SergeHex from '../types/serge-hex'
import SergeGrid from '../types/serge-grid'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid grid of hex cells
 * @param {SergeHex<{}>[] | undefined} allowableCells list of cells where platform could travel to
 * @param {PlanMobileAsset} constraints Description of what this platform can do
 * @returns {SergeHex<{}>[] | undefined} List of allowable cells between origin and destination
 */
const plannedRouteFor = (grid: SergeGrid<SergeHex<{}>> | undefined, allowableCells:SergeHex<{}>[] | undefined, origin:string, destination: string): SergeHex<{}>[] | undefined => {
  if(grid) {
    const originHex: SergeHex<{}> | undefined = grid.find(cell => cell.name === origin)
    const destinationHex: SergeHex<{}> | undefined = grid.find(cell => cell.name === destination)
    if(originHex && destinationHex) {
      var route = grid.hexesBetween(originHex, destinationHex)
      if(allowableCells) {
        // sort out overlap with allowable cells
        route = route.filter(cell => allowableCells.includes(cell))
      }
      return route
    } else {
      return undefined
    }  
  } else {
    return undefined
  }
}

export default plannedRouteFor
