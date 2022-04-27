import ForceData from './force-data'

export default interface Force {
  name: string,
  forces: Array<ForceData>,
  // TODO: we need to constrain what we store below.
  // I _think_ we're storing a whole force. I'm sure it should be
  // a force-id
  selectedForce: string | { uniqid : string },
  complete: boolean,
  dirty: boolean
}