import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'
import { MessageChannel, MessageCustom } from '@serge/custom-types'

export default interface PropTypes extends ForcesInChannelProps{
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  messages: Array<MessageChannel>
  /**
   * Callback on expanding message item
   */
  onRead?: { (message: MessageCustom): void }
  /** force for player
   *
   */
  playerForceId: string

  isUmpire: boolean
  isRFIManager: boolean
  roleName: Role['name']
  roleId: Role['roleId']
  onChange?: (nextMessage: MessageCustom) => void

}
