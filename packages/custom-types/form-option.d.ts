import ForceData from "./force-data"

/** options provided for drop-down menus,
 * attempts to display the name label
 * with a marker in the provided css color
 */
export default interface FormOption {
  name: string
  /**
   * color to use for this option.  
   * NOTE: we should delete it, since colors aren't essential for these forms
   */
  colour?: string
}