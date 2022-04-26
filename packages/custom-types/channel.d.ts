import { ChannelTypes } from './channel-data'

export default interface Channel {
  name: string,
  channels: Array<ChannelTypes>,
  selectedChannel: string | {
    uniqid: string
  },
  complete: boolean,
  dirty: boolean
}