import { Asset, ForceData, PlatformTypeData, Route } from '@serge/custom-types'
import { Item } from '../../molecules/sortable-list'

type Forces = Array<ForceData>

export default interface PropTypes {
  forces: Forces
  onChange: (updates: { forces: Forces }) => void
  onSave: (forces: Array<ForceData>) => void
  onRejectedIcon?: (rejected: any) => void
  onSidebarClick?: (selectedForce: ForceData) => void
  onCreate?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
  selectedForce?: ForceData
  iconUploadUrl?: string
  platformTypes?: PlatformTypeData[]
  routes?: Route[]
  /** Handler for when user tries to delete role with Game Control privileges */
  customDeleteHandler?: (NewItems: Item[], key: number, handleChange: (changedItems: Item[]) => void) => void
  onDeleteAsset?: () => void
  selectedAssetItem?: Asset
}

export { ForceData, Role } from '@serge/custom-types'
