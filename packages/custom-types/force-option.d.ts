import ForceData from "./force-data"
import { UNKNOWN_TYPE } from "@serge/config"
/** presenting forces as a series of drop-down options */
export default interface ForceOption {
  name: ForceData['name']
  colour: ForceData['color']
  /** note: we support undefined in form-id in case the force is unknown */
  id: ForceData['uniqid'] | typeof UNKNOWN_TYPE
}