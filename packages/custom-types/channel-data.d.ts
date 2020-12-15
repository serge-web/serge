import Participant from './participant'
import { MessageChannel } from './message'

export default interface ChannelData {
  // TODO: change it to use name
  uniqid?: string,
  observing?: boolean,
  templates?: Array<any>,
  messages?: Array<MessageChannel>,
  name: string,
  participants: Array<Participant>
  unreadMessageCount?: number
  forceIcons: Array<any>
  forceColors: Array<string>
}
