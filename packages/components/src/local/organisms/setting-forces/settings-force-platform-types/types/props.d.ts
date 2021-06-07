import { PlatformItemTypeData } from '../../types/sortableItems'
import { ForceData, Route } from '@serge/custom-types'

export default interface PropTypes {
  selectedForce: ForceData
  platformTypes: PlatformItemTypeData[]
  onChangeHandler: (nextForce: ForceData) => void
  routes?: Route[]
}
