
// @ts-ignore
import uniqid from 'uniqid'
import { ChannelData } from '../types/props'
const newChannelName = 'Channel '
export default (channels: Array<ChannelData>): ChannelData => {
  const channelNumber: Array<number> = channels
    .filter(channel => channel.name.match(/Channel [0-9]{1,}$/))
    .map(ch => parseInt((ch.name.match(/\d/g) || [1]).join('')))

  const channelId: string = `channel-${uniqid.time()}`

  console.error('at last create channel has been called!')

  const channelData: ChannelData = {
    uniqid: channelId,
    name: `${newChannelName}${Math.max.apply(null, channelNumber) + 1}`,
    participants: [],
    forceIcons: [],
    forceColors: []
  }
  return channelData
}
