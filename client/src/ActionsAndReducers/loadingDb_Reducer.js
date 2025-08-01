import * as ActionConstant from 'src/config'
import copyState from '../Helpers/copyStateHelper'

const initialState = {
  loadingWargames: true
}

export const loadingDbReducer = (state = initialState, action) => {
  const newState = copyState(state)
  
  switch (action.type) {
    case ActionConstant.POPULATE_WARGAMES_DB:
      newState.loadingWargames = action.isLoading
      return newState
      
    default:
      return newState
  }
}
