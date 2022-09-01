import { TurnFormats } from '@serge/config'
import { ChannelPlanning, ForceData, MessagePlanning, Role } from '@serge/custom-types'

export default interface PropTypes {
  messages: any
  turnPresentation?: TurnFormats
  hideForcesInChannel: boolean
  channel: ChannelPlanning
  selectedForce: ForceData['uniqid']
  selectedRole: Role['roleId']
  forceIcons: any[]
  forceNames: string[]
  forces: ForceData[]
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessageChannel | ChatMessage) => void
  onReadAll: () => void
  platformTypes: PlatformTypeData[]
}

export type TabPanelProps = {
  children?: React.ReactNode
  active: boolean
  value: string
  className?: string
}

export type PanelActionTabsProps = {
  onChange: (tab: string) => void
  className?: string
}
