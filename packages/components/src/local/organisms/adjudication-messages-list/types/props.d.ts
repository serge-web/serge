import { TurnFormats } from '@serge/config'
import { ChannelPlanning, ForceData, MessagePlanning, MessageStructure, PerForcePlanningActivitySet, PlatformTypeData, Role, TemplateBody } from '@serge/custom-types'
import { MessageInteraction } from '@serge/custom-types/message'
import { ForceStyle } from '@serge/helpers'
import React from 'react'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'
import { PlanningContact } from '../../support-panel/helpers/gen-order-data'

export type AdjudicationRow = {
  id: string
  complete: boolean
  /** turn when adjudication generated */
  turn: number
  order1: string
  order2: string
  activity: string
  period: string
  tableData?: { showDetailPanel: any }
}

export default interface PropTypes extends Omit<ForcesInChannelProps, 'icons' | 'names' | 'colors'> {
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  interactionMessages: Array<MessageInteraction>
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  planningMessages: Array<MessagePlanning>
  /** forces in this game
  *
  */
  forces: ForceData[]
  /**
   *  current game-date (may be used in JSON Editor for date-picker)
   */
  gameDate: string
  /**
   *  definition of planning channel
   */
  channel: ChannelPlanning
  /**
   * template for providing feedback
   */
  template: TemplateBody
  /**
   * Callback on expanding message item
   */
  onRead?: { (message: MessagePlanning, count?: number): void }

  /**
   * handle unread message
   */
  onUnread?: (message: MessagePlanning) => void

  /**
   * force for player
   */
  playerForceId: ForceData['uniqid']
  /**
   * role of current player
   */
  playerRoleId: Role['roleId']

  /** how to render the game turn  */
  turnPresentation?: TurnFormats

  isUmpire: boolean
  /** whether to hide the forces in the channel
   */
  hideForcesInChannel: boolean
  /**
   * method to customise the new (or existing) message template
   */
  customiseTemplate?: { (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }
  /** forces and colors
   *
   */
  forceColors: ForceStyle[]

  selectedOrders: string[]
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  /** the range of planning activities for each force */
  forcePlanningActivities?: PerForcePlanningActivitySet[]

  /**
   * there is a new interaction to adjudicate
   */
  handleAdjudication?: { (contact: PlanningContact): void }

  /**
   * current turn filter (or -1 to show all turns)
   */
  turnFilter?: number
  /** descriptions of platform types (used for perception drop-down) */
  platformTypes: PlatformTypeData[]

  onDetailPanelOpen?: (rowData: AdjudicationRow) => void

  onDetailPanelClose?: (rowData: AdjudicationRow) => void
}
