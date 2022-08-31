import * as ActionConstant from '@serge/config'
import { PlayerLogActionType, ActivityLogsInterface } from '@serge/custom-types'
import copyState from '../../Helpers/copyStateHelper'

const initialState: ActivityLogsInterface = {
  items: []
}

export const addPlayerLogReducer = (state: ActivityLogsInterface = initialState, action: PlayerLogActionType) => {
  const newState: ActivityLogsInterface = copyState(state)
  switch (action.type) {
    case ActionConstant.ADD_PLAYER_LOG:
      newState.items.push(action.payload)
      console.log('adding log', action, newState.items)
      break
    default:
      return state
  }
  
  return newState
}
