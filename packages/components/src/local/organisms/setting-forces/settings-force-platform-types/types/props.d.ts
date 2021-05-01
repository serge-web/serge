import React, { ChangeEvent } from "react"
import { ListItemType, ForceItemType, PlatformItemTypeData } from "../../types/sortableItems";
import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
  selectedForce: ForceData,
  platformTypes: PlatformItemTypeData[],
  onChangeHandler: (nextForce: ForceData) => void;
}
