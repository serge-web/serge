import SergeHex from '../types/serge-hex'
import SergeGrid from '../types/serge-grid'
import PlanMobileAsset from '../types/plan-mobile-asset'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid grid of hex cells
 * @param {PlanMobileAsset} constraints Description of what this platform can do
 * @returns {SergeHex<{}>[]} List of cells for where this asset could travel to
 */
const allowableCells = (grid: SergeGrid<SergeHex<{}>> | undefined, constraints: PlanMobileAsset): SergeHex<{}>[] => {
  if(grid) {
    const originHex = grid.find(cell => cell.name === constraints.origin)
    if(originHex) {
      return grid.hexesInRange(originHex, constraints.range, true)
    } else {
      console.log('AllowableCells function couldnt find cell for', constraints.origin)
      return []
    }  
  } else {
    return []
  }

}

export default allowableCells
