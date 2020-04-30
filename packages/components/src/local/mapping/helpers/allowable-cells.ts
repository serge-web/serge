import { HexFactory } from 'honeycomb-grid'
import SergeHex from '../types/serge-hex'
import SergeGrid from '../types/serge-grid'
import PlanMobileAsset from '../types/plan-mobile-asset'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>>} grid grid of hex cells
 * @param {PlanMobileAsset} constraints Description of what this platform can do
 * @returns {string[]} List of cell names
 */
const allowableCells = (grid: SergeGrid<SergeHex<{}>>, constraints: PlanMobileAsset): string[] | undefined => {
  const originHex = grid.find(cell => cell.name === constraints.origin)
  if (originHex) {
    const allowable: SergeHex<HexFactory<SergeHex<{}>>>[] = grid.hexesInRange(originHex, constraints.range, true)
    // just use the list of cell names
    return allowable.map(hex => hex.name)
  } else {
    console.log('AllowableCells function couldnt find cell for', constraints.origin)
    return undefined
  }
}

export default allowableCells
