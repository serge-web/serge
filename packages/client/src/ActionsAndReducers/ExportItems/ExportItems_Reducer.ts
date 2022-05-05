import { CREATE_EXPORT_ITEM, LOADER } from '@serge/config'
import copyState from '../../Helpers/copyStateHelper'
import { ExportItemsUiActionTypes } from '@serge/custom-types' 

const initialState = {
  data: [],
  loader: false
}

export const exportItems = (state = initialState, action: ExportItemsUiActionTypes) => {
  const newState = copyState(state)

  switch (action.type) {
    case CREATE_EXPORT_ITEM:
      newState.data.push(action.payload)
      return { ...newState, data: newState.data, loader: false }
    case LOADER:
      return { ...newState, loader: true }
    default:
      return newState
  }
}
