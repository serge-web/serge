import * as ActionConstant from '@serge/config'
import { PlayerLogActionType, ActivityLogsInterface } from '@serge/custom-types'
import copyState from '../../Helpers/copyStateHelper'

const initialState: ActivityLogsInterface = {
  wargame: '',
  role: '',
  activityTime: '',
  activityType: '',
  currentdbName: 'wargame-playerlogs'
}

export const addPlayerLogReducer = (state: ActivityLogsInterface = initialState, action: PlayerLogActionType) => {
  const newState: ActivityLogsInterface = copyState(state)
  switch (action.type) {
    case ActionConstant.ADD_PLAYER_LOG:
      newState.wargame = action.payload.wargame
      newState.role = action.payload.role
      newState.activityTime = action.payload.activityTime
      newState.activityType = action.payload.activityType.aType
      break
    default:
      return state
  }
  
  return newState
}
