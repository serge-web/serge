import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
  forces: ForceData[]
  playerForce?: ForceData
  isUmpire: boolean
  render: (assets: string[][]) => void
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