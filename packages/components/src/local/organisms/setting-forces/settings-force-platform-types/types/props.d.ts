import { ForceData, Route, PlatformTypeData } from '@serge/custom-types'

export default interface PropTypes {
  selectedForce: ForceData
  platformTypes: PlatformTypeData[]
  onChangeHandler: (nextForce: ForceData) => void
  routes?: Route[]
}
