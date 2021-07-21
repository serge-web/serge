import { ChannelData, ForceData } from '@serge/custom-types'

export interface MessageTemplate {
  title: string
  _id: string
  [property: string]: any
}

export default interface PropTypes {
  channels: Array<ChannelData>
  messages: Array<MessageTemplate>
  forces: Array<ForceData>
  onChange: (updates: { channels: Array<ChannelData> }) => void
  onSave?: (channel: ChannelData) => void
  onSidebarClick?: (selectedChannel: ChannelData) => void
  onCreate?: (buttonText: string | undefined) => void
  onDelete?: () => void
  onDuplicate?: () => void
  selectedChannel?: ChannelData
}

export { ChannelData, Channel, ForceData, Role, Participant } from '@serge/custom-types'
