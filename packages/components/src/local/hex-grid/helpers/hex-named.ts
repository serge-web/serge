import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'

/** convert this point in cell coordinates to lat/long
 * @param {string} name location in 2d Hex coordinate system
 * @param {SergeGrid<SergeHex<{}>>} grid grid of cells
 * @returns {SergeHex} centre represented by coords
 */
const hexNamed = (name: string, grid: SergeGrid<SergeHex<{}>>): SergeHex<{}> | undefined => {
  return grid.find(cell => cell.name === name)
}

export default hexNamed
