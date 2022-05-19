import FormOption from "./form-option"

/** presenting icons in drop-down menu */
export default interface IconOption extends FormOption {
  /**
   * human readable icon name
   */
  name: string
  /** 
   * url for SVG icon
   */
  icon: string
  /**
   * id for icon (having icon allows name to be changed)
   */
  uniqid?: string
}