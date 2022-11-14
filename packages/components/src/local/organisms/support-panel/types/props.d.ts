import { TurnFormats } from '@serge/config'
import {
  AttributeTypes, ChannelPlanning, ForceData, MessageDetails, MessagePlanning,
  PerForcePlanningActivitySet, PlainInteraction, PlanningContact, PlatformTypeData, Role, TemplateBody, TurnLengthType
} from '@serge/custom-types'
import { MessageInteraction } from '@serge/custom-types/message'
import React, { Dispatch } from 'react'
import { AssetRow } from '../../planning-assets/types/props'
import { LocationEditCallbackHandler } from '../../planning-messages-list/types/props'

export default interface PropTypes {
  planningMessages: MessagePlanning[]
  interactionMessages: MessageInteraction[]
  turnPresentation?: TurnFormats
  onRead: (message: MessagePlanning) => void
  onUnread: (message: MessagePlanning) => void
  onReadAll: () => void
  /**
   * definition of this channel
   */
  channel: ChannelPlanning
  /** new orders templates for this player. Note: this component
   * receives all templates, since the template to use is controlled
   * by the `PlanningActivity` for the orders being generated
   */
  allTemplates: TemplateBody[]
  /** adjudication template */
  adjudicationTemplate: TemplateBody
  /** descriptions of platform types (used to generate icons) */
  platformTypes: PlatformTypeData[]
  activityTimeChanel: (role: string, message: string) => void
  saveMessage: (currentWargame: string, details: MessageDetails, message: any) => {(): void}
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => void
  saveCachedNewMessageValue?: (editMessage: any, messageOption: string) => void
  getCachedNewMessagevalue?: (value: string) => string
  clearCachedNewMessage?: (data: string[]) => void
  dispatch: Dispatch<any>
  isUmpire: boolean
  selectedRoleName: Role['name']
  selectedRoleId: Role['roleId']
  selectedForce: ForceData
  allForces: ForceData[]
  gameDate: string
  currentTurn: number
  gameTurnTime: TurnLengthType
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
  /** a draft copy of an new orders */
  draftMessage?: MessagePlanning
  /** player cancels creating a new set of orders */
  onCancelDraftMessage?: {(): void}
  forcePlanningActivities?: PerForcePlanningActivitySet[]
  /** user wishes to edit location data */
  editLocation?: LocationEditCallbackHandler
  attributeTypes: AttributeTypes
  /**
   * there is a new interaction to adjudicate
   */
  handleAdjudication: { (contact: PlanningContact): void }
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
