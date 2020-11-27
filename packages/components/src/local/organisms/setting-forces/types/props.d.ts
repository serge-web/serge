import { ForceData } from '@serge/custom-types'

type Forces = Array<ForceData>

export default interface PropTypes {
  forces: Forces
  onChange: (updates: { forces: Forces }) => void
  onRejectedIcon?: (rejected: any) => void
  onSave: (forces: Array<ForceData>) => void
}

export { ForceData, Role } from '@serge/custom-types'
