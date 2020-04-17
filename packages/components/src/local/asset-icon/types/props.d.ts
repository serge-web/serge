export default interface PropTypes {
  /**
   * The name of the icon to be used on the asset
   */
  type: string
  /**
   * The position to place the icon on the map
   */
  position: L.LatLng,
  /**
   * The force which the asset belongs to
   */
  force: string ,
  /**
   * The tooltip label for the marker
   */
  tooltip?: string 
}
