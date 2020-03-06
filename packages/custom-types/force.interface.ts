import ForceData from './force-data.interface'

export default interface Force {
  name: string,
  forces: Array<ForceData>,
  selectedForce: string,
  complete: boolean,
  dirty: boolean
}