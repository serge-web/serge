import ForceData from "./force-data"
import FormOption from "./form-option"

/** presenting forces as a series of drop-down options */
export default interface ForceOption extends FormOption {
  name: ForceData['name']
  colour: ForceData['color']
  id: ForceData['uniqid'] | null
}