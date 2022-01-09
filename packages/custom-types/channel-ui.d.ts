import Participant, { CoreParticipant } from './participant'
import { MessageChannel } from './message'
import { TemplateBody } from './template'
import { SpecialChannelTypes } from '@serge/config'
import { CollabOptions } from './channel-data'
import { ChannelTypes } from '.'

/** description of channel, as used in game UI */
export default interface ChannelData {
  readonly uniqid: string,
  observing?: boolean,
  templates?: TemplateBody[],
  messages?: Array<MessageChannel>,
  name: string,
  participants: Array<CoreParticipant>
  unreadMessageCount?: number
  // TODO: dynamically retrieve force icons and colors,
  // don't store them in the database
  forceIcons?: Array<any>
  forceColors?: Array<string>
  format?: SpecialChannelTypes
  collabOptions?: CollabOptions
  /** one of the v3 channel type constants */
  v3Channel?: ChannelTypes,
  v3participants?: Array<CoreParticipant>
  channelType: string,
}
