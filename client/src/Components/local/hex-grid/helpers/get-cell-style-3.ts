import { SergeHex3 } from 'src/custom-types'

/** uility function, to provide a style name for a cell, according to if it's in
 * either array
 * @param {cell: SergeHex<{}>} cell the cell in question
 * @param {Array<SergeHex<{}>>} plannedCells planned route
 * @param {Array<SergeHex<{}>>} achievableCells cells where the asste could move to
 * @param {string} selected cell for the selected asset
 * @returns string to be used in polygon cell style
 */
const getCellStyle3 = (cell: SergeHex3, plannedCells: Array<SergeHex3>, achievableCells: Array<SergeHex3>, selected: string | undefined): string => {
  if (selected && selected === cell.index) {
    return 'selected-hex'
  } else if (plannedCells && plannedCells.includes(cell)) {
    return 'planned-hex'
  } else if (achievableCells && achievableCells.includes(cell)) {
    return 'allowable-hex'
  } else {
    return 'default-hex'
  }
}

export default getCellStyle3
