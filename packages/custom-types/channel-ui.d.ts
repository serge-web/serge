import Participant, { CoreParticipant } from './participant'
import { MessageChannel } from './message'
import { TemplateBody } from './template'
import { SpecialChannelTypes } from '@serge/config'
import { CollabOptions } from './channel-data'

/** description of channel, as used in game UI */
export default interface ChannelData {
  readonly uniqid: string,
  observing?: boolean,
  templates?: TemplateBody[],
  messages?: Array<MessageChannel>,
  name: string,
  participants: Array<Participant>
  v3participants?: Array<CoreParticipant>
  unreadMessageCount?: number
  // TODO: dynamically retrieve force icons and colors,
  // don't store them in the database
  forceIcons?: Array<any>
  forceColors?: Array<string>
  format?: SpecialChannelTypes
  /** one of the v3 channel type constants */
  channelType: string,
  collabOptions? : CollabOptions
}
