import { TurnFormats } from '@serge/config'
import { ForceData, MessagePlanning, Role } from '@serge/custom-types'

export default interface PropTypes {
  messages: any
  turnPresentation?: TurnFormats
  hideForcesInChannel: boolean
  selectedForce: ForceData
  selectedRole: Role['roleId']
  forceIcons: any[]
  forceColors: string[]
  forceNames: string[]
  forces: ForceData[]
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessageChannel | ChatMessage) => void
  onReadAll: () => void
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
