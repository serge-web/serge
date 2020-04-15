export default interface PropTypes {
  /**
   * Radius of tiles (Minutes)
   */
  tileRadiusMins: number,
  /**
   * Coordinates (degs) for centre of top-left icon
   */
  topLeft: L.LatLng,
  /**
   * Coordinates (degs) for centre of bottom-right icon
   */
  bottomRight: L.LatLng
}
