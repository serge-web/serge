import * as ActionConstant from 'src/config'
import copyState from '../../Helpers/copyStateHelper'

const initialState = {
  open: false,
  modal: '',
  data: {}
}

interface ModalOpenInterface {
  type: typeof ActionConstant.OPEN_MODAL,
  payload: {
    open: boolean,
    modal: string,
    data: {}
  }
}

interface ModalCloseInterface {
  type: typeof ActionConstant.CLOSE_MODAL,
  payload: {
    open: boolean,
    modal: string
  }
}

type ModalActionType = ModalOpenInterface | ModalCloseInterface

export const currentModal = (state = initialState, action: ModalActionType) => {
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
