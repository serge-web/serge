import ForceData from './force-data'

export default interface Visibility {
  /** force that is observing asset */
  by: ForceData['uniqid']
  /** whether the asset is now visible/not visible */
  newVis: boolean
}
