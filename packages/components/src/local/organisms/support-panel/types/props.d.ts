import { TurnFormats } from '@serge/config'
import { ChannelPlanning, ForceData, MessagePlanning, Role } from '@serge/custom-types'

export default interface PropTypes {
  messages: MessagePlanning[]
  turnPresentation?: TurnFormats
  hideForcesInChannel: boolean
  selectedForce: ForceData['uniqid']
  selectedRole: Role['roleId']
  forceIcons: any[]
  forceNames: string[]
  forces: Force[]
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessageChannel | ChatMessage) => void
  onReadAll: () => void
  /**
   * definition of this channel
   */
  channel: ChannelPlanning
  /** 
   * current date/time in game 
   */
  gameDate: string
  /** new orders templates for this player */
  templates: TemplateBody[]
  /** descriptions of platform types (used to generate icons) */
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
