import { ChannelData, ForceData, TemplateBody } from '@serge/custom-types'
import { Option } from 'src/local/molecules/editable-row'

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

export type MessageGroupProps = {
  title: string
  multiple: boolean
  options?: Option[]
  onChange: (value: string[]) => void
  onDelete?: (value: string[]) => void
  type: string
  value: string[]
}

export { ChannelData, ChannelCollab, Channel, ForceData, Role, Participant } from '@serge/custom-types'
