import { TurnFormats } from '@serge/config'
import { Force, ForceData, MessagePlanning } from '@serge/custom-types'

export default interface PropTypes {
  messages: any
  turnPresentation?: TurnFormats
  hideForcesInChannel: boolean
  selectedForce: ForceData
  selectedRole: string
  forceIcons: any[]
  forceColors: string[]
  forceNames: string[]
  forces: Force[]
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
