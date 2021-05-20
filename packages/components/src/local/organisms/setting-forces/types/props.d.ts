import { ForceData, Role } from '@serge/custom-types'

type Forces = Array<ForceData>

export default interface PropTypes {
  forces: Forces
  onChange: (updates: { forces: Forces }) => void
  onSave: (forces: Array<ForceData>) => void
  onRejectedIcon?: (rejected: any) => void
  onSidebarClick?: (selectedForce: ForceData) => void
  onCreate?: () => void
  onDelete?: () => void
  onDeleteRole?: (role: Role, selectedForce: ForceData) => void
  selectedForce?: ForceData
}

export { ForceData, Role } from '@serge/custom-types'
