import { ChannelData } from './channel-data'

export default interface Channel {
  name: string,
  channels: Array<ChannelData>,
  selectedChannel: string,
  complete: boolean,
  dirty: boolean
}