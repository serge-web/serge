import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

import { MessageCustom, Role } from '@serge/custom-types'

export default interface PropTypes extends ForcesInChannelProps {
  isUmpire: boolean
  isRFIManager: boolean
  role: Role['name']
  messages: MessageCustom[]
  onChange: (nextMessage: MessageCustom) => void
  onRead: (nextMessage: MessageCustom) => void
}
