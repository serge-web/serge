import { ChannelTypes } from './channel-data'

export default interface Channel {
  name: string,
  channels: Array<ChannelTypes>,
  selectedChannel: string | {
    uniqid: string
  },
  dirty: boolean
}