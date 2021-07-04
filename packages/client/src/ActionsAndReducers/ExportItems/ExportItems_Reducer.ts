import { CREATE_EXPORT_ITEM } from '@serge/config'
import copyState from '../../Helpers/copyStateHelper'
import { ExportItemsUiActionTypes, ExportItem } from '@serge/custom-types' 

export const exportItems = (state: ExportItem[] = [], action: ExportItemsUiActionTypes) => {
  const newState = copyState(state)

  switch (action.type) {
    case CREATE_EXPORT_ITEM:
      newState.push(action.payload)
      return newState
    default:
      return newState
  }
}
