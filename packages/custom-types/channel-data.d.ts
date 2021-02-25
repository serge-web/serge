import Participant from './participant'
import { MessageChannel } from './message'

/** description of channel, as stored in database */
export default interface ChannelData {
  /** unique id for this channel */
  readonly uniqid: string,
  /** name of this channel */
  name: string,
  /** list of participants for this channel */
  participants: Array<Participant>
}
