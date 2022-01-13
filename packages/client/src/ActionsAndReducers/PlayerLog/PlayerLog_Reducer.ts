import * as ActionConstant from '@serge/config'
import { PLayerLogAction, PlayerLogPayload } from './PlayerLog_types'

const initialState: PlayerLogPayload = {
  wargame: '',
  role: '',
  sendAt: 0
}

export const addPlayerLogReducer = (state = initialState, action: PLayerLogAction) => {

  switch (action.type) {
    case ActionConstant.ADD_PLAYER_LOG:
      return action.payload

    default:
      return state
  }
}
