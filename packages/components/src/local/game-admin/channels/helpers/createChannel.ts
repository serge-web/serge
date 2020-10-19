import { ChannelData } from '../types/props'
const newChannelName: string = 'Channel '
export default (channels: Array<ChannelData>): ChannelData => {
  const channelNumber: Array<number> = channels
    .filter(channel => channel.name.match(/Channel [0-9]{1,}$/))
    .map(ch => parseInt((ch.name.match(/\d/g) || [1]).join('')))

  const channelData: ChannelData = {
    name: `${newChannelName}${Math.max.apply(null, channelNumber) + 1}`,
    participants: []
  }
  return channelData
}
