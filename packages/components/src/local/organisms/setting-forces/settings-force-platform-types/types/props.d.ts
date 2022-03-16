import { ForceData, Route, PlatformTypeData, Asset } from '@serge/custom-types'

export default interface PropTypes {
  selectedForce: ForceData
  platformTypes: PlatformTypeData[]
  onChangeHandler: (nextForce: ForceData) => void
  routes?: Route[]
  forcesData: ForceData[]
  onDeleteAsset?: () => void
  selectedAssetItem?: Asset
}
