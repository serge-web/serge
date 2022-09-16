import { ForceData } from '@serge/custom-types'
import { ForceStyle } from '@serge/helpers'

export default interface PropTypes {
  /** data for this game */
  forces: ForceData[]
  /** the force to display for (omit to show for all forces) */
  playerForce?: ForceData['uniqid']
  /** if player is umpire - so can see all */
  isUmpire: boolean
  /** now sure what this one is for */
  render: (assets: string[][]) => void
  /** whether to show player perspective of other forces */
  opFor: boolean
  /** list of force color codes */
  forceColors: ForceStyle[]
  /** list of platforms & styles */
  platformStyles: PlatformStyle[]
  /** selection rows callback */
  onSelectionChange?: (rows: Row[]) => void
  /** visible rows change callback */
  onVisibleRowsChange?: (row: Row[]) => void
}

export type Row = {
  id: string
  icon: string
  name: string
  condition: string
  status: string
  platformType: string
  parentId?: string
  force?: string
}
