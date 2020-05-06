import { SergeHex } from '@serge/custom-types'

/** uility function, to style a style name for a cell, according to if it's in
 * either array
 * @param {cell: SergeHex<{}>} cell the cell in question
 * @param {Array<SergeHex<{}>>} plannedCells the cell in question
 * @param {Array<SergeHex<{}>>} achievableCells the cell in question
 * @returns string to be used in polygon cell style
 */
const getCellStyle = (cell: SergeHex<{}>, plannedCells: Array<SergeHex<{}>>, achievableCells: Array<SergeHex<{}>>): string => {
  return `${plannedCells && plannedCells.includes(cell) ? 'planned' : achievableCells && achievableCells.includes(cell) ? 'allowable' : 'default'}-hex`
}

export default getCellStyle
