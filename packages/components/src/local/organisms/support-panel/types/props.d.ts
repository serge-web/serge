import { TurnFormats } from '@serge/config'
import { ChannelPlanning, ForceData, MessageDetails, MessagePlanning, PlainInteraction, PlanningActivity, PlatformTypeData, Role, TemplateBody } from '@serge/custom-types'
import React, { Dispatch } from 'react'
import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  messages: MessagePlanning[]
  turnPresentation?: TurnFormats
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessagePlanning) => void
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
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => void
  dispatch: Dispatch<any>
  isUmpire: boolean
  selectedRoleName: Role['name']
  selectedRoleId: Role['roleId']
  selectedForce: ForceData
  allForces: ForceData[]
  gameDate: string
  currentTurn: number
  currentWargame: string
  selectedAssets: string[]
  setSelectedAssets: React.Dispatch<React.SetStateAction<string[]>>
  selectedOrders: string[]
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  setOpForcesForParent: React.Dispatch<React.SetStateAction<AssetRow[]>>
  setOwnForcesForParent: React.Dispatch<React.SetStateAction<AssetRow[]>>
  allOwnAssets: AssetRow[]
  allOppAssets: AssetRow[]
  onPanelWidthChange?: (width: number) => void
  activities: PlanningActivity[]
  /** a draft copy of an new orders */
  draftMessage?: MessagePlanning
  onCancelDraftMessage?: {(): void}
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

export type SupportPanelContextInterface = {
  selectedAssets: string[]
}
