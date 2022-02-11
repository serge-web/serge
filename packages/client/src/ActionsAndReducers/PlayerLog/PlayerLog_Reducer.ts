import * as ActionConstant from '@serge/config'
import { ActivityLogsInterface } from '../../api/wargames_api/types'
import { PlayerLogAction } from './PlayerLog_types'

const initialState: ActivityLogsInterface = {
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
