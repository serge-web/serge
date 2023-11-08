import { defaultGameInfo, serverPath } from 'src/config'
import * as ActionConstant from 'src/config'
import copyState from '../../Helpers/copyStateHelper'
import _ from 'lodash'

const initialState = defaultGameInfo

export const gameInfo = (state = initialState, action) => {
  let newState = copyState(state)
  let payload

  switch (action.type) {
    case ActionConstant.LOAD_SERGE_GAME_INFO:

      payload = action.payload
      if (payload.imageUrl) {
        payload.imageUrlSet = true
        payload.imageUrl = serverPath + payload.imageUrl.slice(1)
      }

      newState = _.defaults(payload, newState)

      break

    default:
      return newState
  }

  return newState
}
