import { Grid, Hex } from 'honeycomb-grid'

export default interface PropTypes {
  /**
   * the grid of hex cells
   */
  gridCells: Grid<Hex<{}>>,
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
