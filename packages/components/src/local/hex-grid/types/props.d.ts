import { Grid } from 'honeycomb-grid'
import SergeHex from '../../mapping/types/serge-hex'

export default interface PropTypes {
  /**
   * the grid of hex cells
   */
  gridCells: Grid<SergeHex<{}>>,
  /**
   * Diameter of tiles (Minutes)
   */
  tileDiameterMins: number,
  /**
   * bounds for hex grid
   */
  bounds: {
    imageTop: number
    imageLeft: number
    imageRight: number
    imageBottom: number
  }
}
