import { Dispatch } from 'react'
// import { ActivityLogsInterface } from './root-state'
import { Playerlogs } from './player-log'
import { ADD_PLAYER_LOG } from '@serge/config'

export type PlayerLogUiDispatch = Dispatch<PlayerLogActionType>


export type PlayerLogAction = {
  type: typeof ADD_PLAYER_LOG,
  payload: Playerlogs
}

export type PlayerLogActionType = PlayerLogAction 