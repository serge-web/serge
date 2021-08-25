import { ChannelData, ForceData, TemplateBody } from '@serge/custom-types'

export default interface PropTypes {
  channels: Array<ChannelData>
  messageTemplates: Array<TemplateBody>
  forces: Array<ForceData>
  onChange: (updates: { channels: Array<ChannelData>, selectedChannel: ChannelData }) => void
  onSave?: (channel: ChannelData) => void
  onSidebarClick?: (selectedChannel: ChannelData) => void
  onCreate?: (buttonText: string | undefined) => void
  onDelete?: () => void
  onDuplicate?: () => void
  selectedChannel?: ChannelData
}

export { ChannelData, Channel, ForceData, Role, Participant } from '@serge/custom-types'
