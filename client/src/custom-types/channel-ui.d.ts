import { CoreParticipant } from './participant'
import { MessageChannel } from './message'
import { TemplateBody } from './template'
import { SpecialChannelTypes } from '@serge/config'
import { ChannelTypes } from '.'

/** description of channel, as used in game UI */
export default interface ChannelUI {
  readonly uniqid: string,
  /** channel data object */
  readonly cData: ChannelTypes
  /** is the current player just observing this channel? */
  observing?: boolean,
  /** templates available to current user */
  templates?: TemplateBody[],
  messages?: Array<MessageChannel>,
  name: string,
  unreadMessageCount?: number
  forceIcons?: Array<any>
  forceColors?: Array<string>
  forceNames?: Array<string>
}
