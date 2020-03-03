import { ChannelData } from './channel-data.interface'

export interface Channel {
  name: string,
  channels?: Array<ChannelData>,
  selectedChannel: string,
  complete: boolean,
  dirty: boolean
}