import ChannelData from './channel-data.interface'

export default interface Channel {
  name: string,
  channels?: Array<ChannelData>,
  selectedChannel: string,
  complete: boolean,
  dirty: boolean
}