import { SergeHex, SergeGrid } from '@serge/custom-types'

/** convert this point in cell coordinates to lat/long
 * @param {string} name location in 2d Hex coordinate system
 * @param {SergeGrid<SergeHex<{}>>} grid grid of cells
 * @returns {SergeHex} centre represented by coords
 */
const hexNamed = (name: string, grid: SergeGrid<SergeHex<unknown>>): SergeHex<unknown> | undefined =>
  grid.find(cell => cell.name === name)

export default hexNamed
