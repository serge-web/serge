import { Asset, ForceData, PlatformTypeData, Route } from '@serge/custom-types'

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
  /** Handler for when user tries to delete role with Game Control privileges */
  onDeleteGameControl?: (role: Role) => void
  onDeleteAsset?: () => void
  selectedAssetItem?: Asset
}

export { ForceData, Role } from '@serge/custom-types'
