import { ChannelTypes, ForceData, TemplateBody } from 'src/custom-types'
import { Item } from 'src/local/molecules/editable-list'
import { Option } from 'src/local/molecules/editable-row'

export default interface PropTypes {
  channels: Array<ChannelTypes>
  messageTemplates: Array<TemplateBody>
  forces: Array<ForceData>
  onChange: (updates: { channels: Array<ChannelTypes>, selectedChannel: ChannelTypes }) => void
  onSave?: (channel: ChannelTypes) => void
  onSidebarClick?: (selectedChannel: ChannelTypes) => void
  onCreate?: (name: string, channel: ChannelTypes) => void
  onDelete?: (item: ChannelTypes) => void
  onDuplicate?: (item: Item) => void
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

export { Channel, ChannelCollab, ChannelTypes, ForceData, Participant, Role } from 'src/custom-types'
