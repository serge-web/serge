import { Phase } from '@serge/config'
import { ChannelPlanning, ChatMessage, ForceData, MessageDetails, MessageInfoTypeClipped, MessagePlanning, PerForcePlanningActivitySet, PlainInteraction, PlatformTypeData, PlayerUiActionTypes, Role, TemplateBody } from '@serge/custom-types'
import React, { Dispatch } from 'react'

export default interface PropTypes {
  templates: TemplateBody[]
  adjudicationTemplate: TemplateBody
  channel: ChannelPlanning
  messages: Array<MessagePlanning | MessageInfoTypeClipped>
  selectedRoleId: Role['roleId']
  selectedRoleName: string
  currentWargame: string
  selectedForce: ForceData
  platformTypes: PlatformTypeData[]
  /** which phase game is currently in */
  phase: Phase
  allForces: ForceData[]
  gameDate: string
  currentTurn: number
  dispatch: React.Dispatch<PlayerUiActionTypes>
  reduxDispatch: Dispatch<any>
  getAllWargameMessages: (dbName: string) => (dispatch: React.Dispatch<PlayerUiActionTypes>) => void
  markUnread: (channel: string, message: MessageChannel | ChatMessage) => PlayerUiActionTypes
  markAllAsRead: (channel: string) => PlayerUiActionTypes
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => (dispatch: React.Dispatch<PlayerUiActionTypes>) => void
  openMessage: (channel: string, message: MessageChannel) => PlayerUiActionTypes
  saveMessage: (dbName: string, details: MessageDetails, message: any) => void
  /** set of activities that can be planned using this planning channel */
  forcePlanningActivities?: PerForcePlanningActivitySet[]
  phase: Phase
}
