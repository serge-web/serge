import Channel from './channel.interface'
import Force from './force.interface'
import WargameOverview from './wargame-overview.interface'
import PlatformType from './platform-type.interface'

export default interface WargameData {
  overview: WargameOverview,
  forces: Force,
  channels: Channel,
  platformTypes?: PlatformType
}