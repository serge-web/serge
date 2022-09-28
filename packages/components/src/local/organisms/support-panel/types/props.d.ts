import { TurnFormats } from '@serge/config'
import { ChannelPlanning, ForceData, MessagePlanning, Role } from '@serge/custom-types'
import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  messages: MessagePlanning[]
  turnPresentation?: TurnFormats
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessageChannel | ChatMessage) => void
  onReadAll: () => void
  /**
   * definition of this channel
   */
  channel: ChannelPlanning
  /** new orders templates for this player */
  templates: TemplateBody[]
  /** adjudication template */
  adjudicationTemplate: TemplateBody
  /** descriptions of platform types (used to generate icons) */
  platformTypes: PlatformTypeData[]
  activityTimeChanel: (role: string, message: string) => void
  saveMessage: (currentWargame: string, details: MessageDetails, message: any) => Function
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => Function
  dispatch: Dispatch<any>
  isUmpire: boolean
  selectedRoleName: Role['name']
  selectedRoleId: Role['roleId']
  selectedForce: ForceData
  allForces: ForceData[]
  gameDate: string
  currentTurn: number
  currentWargame: string
  selectedItem: Asset['uniqid'] | undefined
  setSelectedItem: { (asset: Asset['uniqid'] | undefined): void }
  setOpForcesForParent: React.Dispatch<React.SetStateAction<AssetRow[]>>
  setOwnForcesForParent: React.Dispatch<React.SetStateAction<AssetRow[]>>
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
