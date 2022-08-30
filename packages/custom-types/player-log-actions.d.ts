import { Dispatch } from 'react'
// import { ActivityLogsInterface } from './root-state'
import { PlayerLogEntry } from './player-log'
import { ADD_PLAYER_LOG } from '@serge/config'

export type PlayerLogUiDispatch = Dispatch<PlayerLogActionType>


export type PlayerLogAction = {
  type: typeof ADD_PLAYER_LOG,
  payload: PlayerLogEntry
}

export type PlayerLogActionType = PlayerLogAction 