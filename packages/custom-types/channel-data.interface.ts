import { Channel } from './channel.interface'

export interface ChannelData {
  name: string,
  channels: Array<Channel>,
  selectedChannel: string,
  complete: boolean,
  dirty: boolean
}