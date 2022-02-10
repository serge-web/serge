import * as ActionConstant from '@serge/config'
import { PlayerLogAction, PlayerActivity } from './PlayerLog_types'

const initialState: PlayerActivity = {
  wargame: '',
  role: '',
  updatedAt: 0,
  event: ''
}

export const addPlayerLogReducer = (state = initialState, action: PlayerLogAction) => {
  switch (action.type) {
    case ActionConstant.ADD_PLAYER_LOG:
      return action.payload

    default:
      return state
  }
}
