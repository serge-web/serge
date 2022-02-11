import * as ActionConstant from '@serge/config'
import { PlayerLogAction, PlayerActivity } from './PlayerLog_types'

const initialState: PlayerActivity = {
  wargame: '',
  role: '',
  activityTime: '',
  activityType: ''
}

export const addPlayerLogReducer = (state = initialState, action: PlayerLogAction) => {
  switch (action.type) {
    case ActionConstant.ADD_PLAYER_LOG:
      return action.payload
    default:
      return state
  }
}
