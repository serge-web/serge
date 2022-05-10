import { ChannelTypes, ForceData, TemplateBody, ChannelCore } from '@serge/custom-types'
import { Option } from 'src/local/molecules/editable-row'

export default interface PropTypes {
  channels: Array<ChannelTypes>
  messageTemplates: Array<TemplateBody>
  forces: Array<ForceData>
  onChange: (updates: { channels: Array<ChannelTypes>, selectedChannel: ChannelTypes }) => void
  onSave?: (channel: ChannelTypes) => void
  onSidebarClick?: (selectedChannel: ChannelTypes) => void
  onCreate?: (name: string, channel: ChannelCore) => void
  onDelete?: () => void
  onDuplicate?: () => void
  selectedChannel?: ChannelTypes
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

export { ChannelTypes, ChannelCollab, Channel, ForceData, Role, Participant } from '@serge/custom-types'
