import { Phase } from 'src/config'
import {
  AreaCategory, AttributeTypes, ChannelPlanning, ChatMessage, ForceData, ForceTemplateData, GameTurnLength, MessageDetails, MessageInfoTypeClipped,
  MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlainInteraction, PlatformTypeData, PlayerUiActionTypes, Role, TemplateBody, TurnPeriods
} from 'src/custom-types'
import React, { Dispatch } from 'react'

export default interface PropTypes {
  /** the full set of templates (used for rendering third party messages) */
  allTemplates: TemplateBody[]
  adjudicationTemplate: TemplateBody
  channel: ChannelPlanning
  messages: Array<MessagePlanning | MessageInteraction | MessageInfoTypeClipped>
  selectedRoleId: Role['roleId']
  selectedRoleName: string
  currentWargame: string
  selectedForce: ForceData
  platformTypes: PlatformTypeData[]
  channelId: string
  /** which phase game is currently in */
  phase: Phase
  allForces: ForceData[]
  allPeriods: TurnPeriods
  gameDate: string
  currentTurn: number
  gameTurnLength: GameTurnLength
  dispatch: React.Dispatch<PlayerUiActionTypes>
  reduxDispatch: Dispatch<any>
  getAllWargameMessages: (dbName: string) => (dispatch: React.Dispatch<PlayerUiActionTypes>) => void
  markUnread: (channel: string, message: MessageChannel | ChatMessage) => PlayerUiActionTypes
  markAllAsRead: (channel: string) => PlayerUiActionTypes
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => (dispatch: React.Dispatch<PlayerUiActionTypes>) => void
  openMessage: (channel: string, message: MessageChannel) => PlayerUiActionTypes
  saveMessage: (dbName: string, details: MessageDetails, message: any) => {(): void}
  saveArchiveMessage?: (archiveMark: MessagePlanning[]) => {(): void}
  onTurnPeriods?: (currentWargame: string) => (dispatch: React.Dispatch<PlayerUiActionTypes>) => void

  /**
   * The method for posting messages out of the mapping components. They have
  /** set of activities that can be planned using this planning channel */
  forcePlanningActivities?: PerForcePlanningActivitySet[]
  phase: Phase
  /** generic descriptions of attributes */
  attributeTypes?: AttributeTypes
  /** set of standard areas */
  areas?: AreaCategory[]
  /** force-specific template data */
  forceTemplateData?: ForceTemplateData[]
}

export type PlanningActitivityMenuType = {
  label: string
  value: string
  items?: PlanningActitivityMenuType[]
}
