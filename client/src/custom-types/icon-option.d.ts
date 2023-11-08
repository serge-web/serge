/** presenting icons in drop-down menu */
export default interface IconOption {
  /**
   * human readable icon name
   */
  name: string
  /** 
   * url for SVG icon
   */
  icon: string
  /**
   * id for the icon (to allow renaming)
   */
  uniqid: string
  /** color for the icon. Note: color is optional, since
   * it is not provided in list of Marker Icon definitions
   * 
   */
  colour?: string
}
