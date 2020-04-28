import SergeHex from '../types/serge-hex'
import SergeGrid from '../types/serge-grid'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>>} grid grid of hex cells
 * @param {PlanMobileAsset} constraints Description of what this platform can do
 * @returns {string[]} List of cell names
 */
const plannedRouteFor = (grid: SergeGrid<SergeHex<{}>>, allowableCells:string[] | undefined, origin:string, destination: string): string[] | undefined => {
  const originHex: SergeHex<{}> | undefined = grid.find(cell => cell.name === origin)
  const destinationHex: SergeHex<{}> | undefined = grid.find(cell => cell.name === destination)
  if(originHex && destinationHex) {
    var route = grid.hexesBetween(originHex, destinationHex)
    if(allowableCells) {
      // sort out overlap with allowable cells
      route = route.filter(cell => allowableCells.includes(cell.name))
    }
    // convert to string array
    const res: string[] = route.map(cell => cell.name)
    return res
  } else {
    return undefined
  }
}

export default plannedRouteFor
