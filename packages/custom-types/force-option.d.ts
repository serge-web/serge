import ForceData from "./force-data"

/** presenting forces as a series of drop-down options */
export default interface ForceOption {
  name: ForceData['name']
  colour: ForceData['color']
  /** note: we support undefiend in form-id in case the force is unknown */
  id: ForceData['uniqid'] | undefined
}