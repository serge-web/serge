import Channel from './channel'
import Force from './force'
import { TemplateData } from './template'
import WargameOverview from './wargame-overview'

export default interface WargameData {
  overview: WargameOverview
  forces: Force
  channels: Channel
  templates?: TemplateData
}
