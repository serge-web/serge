import { Channel } from './channel.interface'
import { WargameForces } from './wargame-forces.interface'
import { WargameOverview } from './wargame-overview.interface'
import { PlatformType } from './platform-type.interface'

export interface WargameData {
  overview: WargameOverview,
  forces: WargameForces,
  channels: Channel,
  platformTypes: PlatformType
}