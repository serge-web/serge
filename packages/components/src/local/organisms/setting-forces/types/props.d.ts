import { ForceData, PlatformTypeData, Route } from '@serge/custom-types'

type Forces = Array<ForceData>

export default interface PropTypes {
  forces: Forces
  onChange: (updates: { forces: Forces }) => void
  onSave: (forces: Array<ForceData>) => void
  onRejectedIcon?: (rejected: any) => void
  onSidebarClick?: (selectedForce: ForceData) => void
  onCreate?: () => void
  onDelete?: () => void
  selectedForce?: ForceData
  iconUploadUrl?: string
  platformTypes?: PlatformTypeData[]
  routes?: Route[]
  /** If this role is `Game Control` - a role which cannot be deleted */
  onRoleDelete?: (role: Role) => void
}

export { ForceData, Role } from '@serge/custom-types'
