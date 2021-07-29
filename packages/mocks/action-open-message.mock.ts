import { OPEN_MESSAGE } from '@serge/config'
import { OpenMessageAction } from '@serge/custom-types'
import { GameMessagesMock } from '.'

const actionOpenMessage: OpenMessageAction = {
  type: OPEN_MESSAGE,
  payload: {
    "channel": GameMessagesMock[0].details.channel,
    "message": {
      ...GameMessagesMock[0],
      isOpen: false
    }
  }
}

export default actionOpenMessage
