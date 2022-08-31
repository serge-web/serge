import { ForceData } from '@serge/custom-types'

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
}

export type Row = {
  id: string
  name: string
  condition: string
  status: string
  platformType: string
  parentId?: string
  force?: string
}