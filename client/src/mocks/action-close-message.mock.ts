import { CLOSE_MESSAGE } from 'src/config'
import { CloseMessageAction } from 'src/custom-types'
import { GameMessagesMock } from '.'

const actionCloseMessage: CloseMessageAction = {
  type: CLOSE_MESSAGE,
  payload: {
    "channel": GameMessagesMock[0].details.channel,
    "message": GameMessagesMock[0]
  }
}

export default actionCloseMessage
