import { CLOSE_MESSAGE } from '@serge/config'
import { CloseMessageAction } from '@serge/custom-types'
import { GameMessagesMock } from '.'

const actionCloseMessage: CloseMessageAction = {
  type: CLOSE_MESSAGE,
  payload: {
    "channel": GameMessagesMock[0].details.channel,
    "message": GameMessagesMock[0]
  }
}

export default actionCloseMessage
