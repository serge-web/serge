export default interface PropTypes {
  /**
   * Radius of tiles (Degrees)
   */
  tileSize: number
  /**
   * Width of grid (number of cells)
   */
  width: number
  /**
   * Height of grid (number of cells)
   */
  height: number
  /**
   * Coordinates (degs) for centre of top-left icon
   */
  origin: [number, number]
}
