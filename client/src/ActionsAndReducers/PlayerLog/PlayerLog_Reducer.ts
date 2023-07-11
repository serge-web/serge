import * as ActionConstant from 'src/config'
import { PlayerLogActionType, ActivityLogsInterface } from 'src/custom-types'
import copyState from '../../Helpers/copyStateHelper'

const initialState: ActivityLogsInterface = {
  items: [],
  currentDbname: 'wargame-playerlogs'
}

export const addPlayerLogReducer = (state: ActivityLogsInterface = initialState, action: PlayerLogActionType) => {
  if (action.type === ActionConstant.ADD_PLAYER_LOG) {
    const newState: ActivityLogsInterface = copyState(state)
    newState.items.push(action.payload)
    return newState
  } else {
    return state
  }
}
