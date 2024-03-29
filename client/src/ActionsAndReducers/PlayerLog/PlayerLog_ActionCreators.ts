import React from 'react'
import * as ActionConstant from 'src/config'
import { PlayerLogActionType, PlainInteraction, PlayerLogEntry } from 'src/custom-types'

export const addPlayerLog = (data: PlayerLogEntry): PlayerLogActionType => ({
  type: ActionConstant.ADD_PLAYER_LOG,
  payload: data
})

/**
 * 
 * @param role the id of the person doing the interaction
 * @param activity a description of what is happening
 * @param dbName the name of the wargame
 * @returns a promist to perform the action
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const saveNewActivityTimeMessage = (role: string, activity: PlainInteraction, dbName: string): Function => {
  const activitydata: PlayerLogEntry = {
    role,
    activityType: activity,
    activityTime: `${new Date().toISOString()}`,
    wargame: dbName,
    _id: new Date().toISOString()
  }
  
  return async (dispatch: React.Dispatch<PlayerLogActionType>): Promise<void> => {
    return await dispatch(addPlayerLog(activitydata))
  }
}
