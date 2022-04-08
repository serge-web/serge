export default interface PropTypes {
  /**
   * The the force color to get the background
   */
  forceColor: string
  /**
   * The platform type to get the svg.  We can drop this
   * prop once we're using the icon directly
   * @deprecated
   */
  platformType: string
  /**
   * the icon file to use (cow.svg)
   */
  icon: string
  /**
   * The title text or node
   */
  children: any
}
