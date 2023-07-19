import { OPEN_MESSAGE } from 'src/config'
import { OpenMessageAction } from 'src/custom-types'
import { GameMessagesMock } from '.'

const actionOpenMessage: OpenMessageAction = {
  type: OPEN_MESSAGE,
  payload: {
    channel: GameMessagesMock[0].details.channel,
    message: {
      ...GameMessagesMock[0],
      isOpen: false
    }
  }
}

export default actionOpenMessage
