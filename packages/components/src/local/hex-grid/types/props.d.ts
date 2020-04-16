export default interface PropTypes {
  /**
   * Radius of tiles (Minutes)
   */
  tileRadiusMins: number,
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
