import Channel from './channel'
import Force from './force'
import { TemplateData } from './template'
import WargameOverview from './wargame-overview'
import { ChannelTypes } from './channel-data'
import ForceData from './force-data'

export default interface WargameData {
  overview: WargameOverview
  forces: Force
  channels: Channel
  templates?: TemplateData
}

export type WargameDataChange = 
WargameOverview | 
{ forces: Array<ForceData> } | 
{ channels: Array<ChannelTypes>, selectedChannel: ChannelTypes } | 
TemplateData
