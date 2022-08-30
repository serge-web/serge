import { TurnFormats } from '@serge/config'
import { ChannelPlanning, Force, ForceData, MessagePlanning, Role } from '@serge/custom-types'

export default interface PropTypes {
  messages: MessagePlanning[]
  turnPresentation?: TurnFormats
  hideForcesInChannel: boolean
  selectedForce: ForceData['uniqid']
  selectedRole: Role['roleid']
  forceIcons: any[]
  forceColors: string[]
  forceNames: string[]
  forces: Force[]
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessageChannel | ChatMessage) => void
  onReadAll: () => void
  /**
   * definition of this channel
   */
  channel: ChannelPlanning
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
