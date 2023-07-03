import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
  // current set of forces
  forces: ForceData[]
  /** callback for umpire clicking on view-as button */
  viewAsCallback: { (force: ForceData['uniqid']): void }
  /** current value of `view as` */
  viewAsForce: string
  /** whether current player is from umpire force */
  isUmpire: boolean
}
