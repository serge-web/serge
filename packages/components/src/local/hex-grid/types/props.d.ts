export default interface PropTypes {
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
