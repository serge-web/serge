import React from 'react'
import * as ActionConstant from '@serge/config'
import { PlayerLogActionType, PlainInteraction, PlayerLogEntry } from '@serge/custom-types'

export const addPlayerLog = (data: PlayerLogEntry): PlayerLogActionType => ({
  type: ActionConstant.ADD_PLAYER_LOG,
  payload: data
})

export const saveNewActivityTimeMessage2 = (role: string, activity: PlainInteraction, dbName: string): Function => {
  const activitydata: PlayerLogEntry = {
    role: role,
    activityType: activity,
    activityTime: `${new Date().getTime()}`,
    wargame: dbName,
    _id: new Date().toISOString()
  }
  
  return async (dispatch: React.Dispatch<PlayerLogActionType>): Promise<void> => {
    return await dispatch(addPlayerLog(activitydata))
  }
}
