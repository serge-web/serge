export default interface PropTypes {
  /**
   * Radius of tiles (Minutes)
   */
  tileSizeMins: number,
  /**
   * Width of grid (number of cells)
   */
  width: number,
  /**
   * Height of grid (number of cells)
   */
  height: number,
  /**
   * Coordinates (degs) for centre of top-left icon
   */
  origin: L.LatLng,
  /**
   * Coordinates (degs) for centre of top-left icon
   */
  topLeft: L.LatLng,
  /**
   * Coordinates (degs) for centre of bottom-right icon
   */
  bottomRight: L.LatLng
}
