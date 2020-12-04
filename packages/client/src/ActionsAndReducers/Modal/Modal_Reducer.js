import * as ActionConstant from '../ActionConstants'
import copyState from '../../Helpers/copyStateHelper'

const initialState = {
  open: false,
  modal: '',
  data: null
}

export const currentModal = (state = initialState, action) => {
  let newState = copyState(state)

  switch (action.type) {
    case ActionConstant.OPEN_MODAL:
      newState = action.payload
      return newState
    case ActionConstant.CLOSE_MODAL:
      newState = action.payload
      return newState
    default:
      return newState
  }
}
