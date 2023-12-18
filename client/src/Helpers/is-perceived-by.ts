import { ForceData } from 'src/custom-types'

/** set of descriptors for how a force is styled */
export interface ForceStyle {
  /** note: forceId can be undefined in the case when
   * we're providing the styling for the 'unknown' force
   */
  forceId?: ForceData['uniqid']
  /** name of this force */
  force: string
  color: string
 }
