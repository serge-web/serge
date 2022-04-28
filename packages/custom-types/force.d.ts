import ForceData from './force-data'

export default interface Force {
  name: string,
  forces: Array<ForceData>,
  // TODO: selectedForce is only used client-side. So it's ok
  // to store the whole object. So, we should have
  // selectedForce?: ForceData
  selectedForce: string | ForceData,
  dirty: boolean
}