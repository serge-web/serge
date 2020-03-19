import ForceData from './force-data'
export default interface Force {
  name: string,
  forces: Array<ForceData>,
  selectedForce: string,
  complete: boolean,
  dirty: boolean,
  assets?: Array<any>
}