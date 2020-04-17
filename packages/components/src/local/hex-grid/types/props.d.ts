import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'

export default interface PropTypes {
  /**
   * the grid of hex cells
   */
  gridCells: SergeGrid<SergeHex<{}>>,
}
