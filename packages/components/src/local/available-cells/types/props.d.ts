export default interface PropTypes {
  /** 
   * hex coords of current location
   */
  location: string
  /** 
   * travel mode for this platform
   */
  travelMode?: string
  /** 
   * number of cells that can be travelled
   */
  range: number
}
