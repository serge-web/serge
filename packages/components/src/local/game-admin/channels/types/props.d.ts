import { ChannelData, ForceData } from '@serge/custom-types'

interface MessageTemplate {
  title: string
  _id: string
  [property: string]: any
}

export default interface PropTypes {
  channels: Array<ChannelData>
  messages: Array<MessageTemplate>
  forces: Array<ForceData>
  onChange: (forces: Array<ChannelData>) => void
  onSave?: () => void
}

export { ChannelData, Channel, ForceData, Role, Participant } from '@serge/custom-types'
