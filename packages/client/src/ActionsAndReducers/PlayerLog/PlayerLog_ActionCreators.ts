import React from 'react'
import * as ActionConstant from '@serge/config'
import { PlayerLogActionType, Playerlogs } from '@serge/custom-types'

export const addPlayerLog = (data: Playerlogs): PlayerLogActionType => ({
  type: ActionConstant.ADD_PLAYER_LOG,
  payload: data
})

export const saveNewActivityTimeMessage = (role: string, activity: string, dbName: string): Function => {
  const activitydata: Playerlogs = {
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
