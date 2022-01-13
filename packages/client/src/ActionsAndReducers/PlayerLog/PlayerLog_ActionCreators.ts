import * as ActionConstant from '@serge/config'

export const addPlayerLog = (wargame: string, role: string) => ({
  type: ActionConstant.ADD_PLAYER_LOG,
  payload: {
    wargame,
    role,
    sentAt: new Date().getTime()
  }
})
