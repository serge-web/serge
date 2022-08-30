import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'
import { ChannelPlanning, MessagePlanning } from '@serge/custom-types'

export default interface PropTypes extends ForcesInChannelProps {
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  messages: Array<MessagePlanning>
  /**
   *  definition of planning channel 
   */
  channel: ChannelPlanning
  /**
   * Callback on expanding message item
   */
  onRead?: { (message: MessagePlanning, count?: number): void }

  /**
   * handle unread message
   */
  onUnread?: (message: MessagePlanning) => void

  /** force for player
   *
   */
  playerForceId: string

  /** how to render the game turn  */
  turnPresentation?: TurnFormats

  isUmpire: boolean
  role?: string
  /** whether to hide the forces in the channel
   */
  hideForcesInChannel: boolean
}
