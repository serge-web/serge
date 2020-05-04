import SergeHex from '../types/serge-hex'
import SergeGrid from '../types/serge-grid'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid grid of hex cells
 * @param {SergeHex<{}>} origin start for this planning turn
 * @param {number} range allowed distance of travel in this turn
 * @returns {SergeHex<{}>[]} List of cells for where this asset could travel to
 */
const allowableCells = (grid: SergeGrid<SergeHex<{}>> | undefined, originHex: SergeHex<{}>, range: number): SergeHex<{}>[] => {
  if(grid) {
    if(originHex) {
      return grid.hexesInRange(originHex, range, true)
    } else {
      console.log('AllowableCells function couldnt find cell for', origin)
      return []
    }  
  } else {
    return []
  }

}

export default allowableCells
