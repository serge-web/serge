import { TurnFormats } from '@serge/config'
import {
  ChannelPlanning, ForceData, MessageDetails, MessagePlanning, MessageStructure, PerForcePlanningActivitySet, PlannedActivityGeometry, Role, TemplateBody
} from '@serge/custom-types'
import React from 'react'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export type OrderRow = {
  id: string
  reference: string
  title: string
  role: string
  activity: string
  startDate: string
  endDate: string
  tableData: any
}

export type LocationEditCallbackHandler = { (plans: PlannedActivityGeometry[], callback: { (newValue: PlannedActivityGeometry[]): void }): void }

export default interface PropTypes extends Omit<ForcesInChannelProps, 'icons' | 'names' | 'colors'> {
  /**
   * The list of channel messages properties required
   * for ChannelMessage components
   */
  messages: Array<MessagePlanning>
  /**
   *  current game-date (may be used in JSON Editor for date-picker)
   */
  gameDate: string
  /**
   *  definition of planning channel
   */
  channel: ChannelPlanning
  /**
   * full set of templates, used for rendering messagse
   */
  allTemplates?: TemplateBody[]
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

  //* save the message
  postBack?: { (details: MessageDetails, message: any): void }
  confirmCancel?: boolean
  onCancel?: { (event: React.MouseEvent<HTMLButtonElement>): void }
  scrollPosition?: (editMessage: number) => void

  scrollSize: number
  allowUpdate: number
  selectedForce?: ForceData
  selectedRoleName: string
  currentTurn: number

  isUmpire: boolean
  /** whether to hide the forces in the channel
   */
  hideForcesInChannel: boolean
  /**
   * method to customise the new (or existing) message template
   */
  customiseTemplate?: { (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }

  selectedOrders: string[]
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  /**
    * the current turn filter or (-1) to show all
    */
  turnFilter?: number
  /** callback for the location of a document being edited */
  editLocation?: LocationEditCallbackHandler
  saveCachedPlanningMessageValue?: (editMessage: any, messageOption: string) => void
  getCachedPlanningMessageValue?: (value: string) => string
  clearCachedPlanningMessage?: (data: string[]) => void

  /**
   *  the range of planning activities for each force
   */
  forcePlanningActivities?: PerForcePlanningActivitySet[]

  onDetailPanelOpen?: (rowData: OrderRow) => void

  onDetailPanelClose?: (rowData: OrderRow) => void

  editThisMessage?: (docId: string) => void
}
