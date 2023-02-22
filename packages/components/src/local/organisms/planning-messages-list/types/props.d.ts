import { Phase } from '@serge/config'
import {
  ChannelPlanning, ForceData, MessageDetails, MessagePlanning, MessageStructure, PerForcePlanningActivitySet, PlannedActivityGeometry, Role, TemplateBody
} from '@serge/custom-types'
import React from 'react'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export type OrderRow = {
  id: string
  // the raw reference value
  rawRef: string
  // the combined reference and turn number
  reference: string
  title: string
  role: string
  activity: string
  startDate: string
  endDate: string
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
   *  current date for turn-end (may be used for finding other orders to sync iwth)
   */
  gameTurnEndDate: string
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
   * role of current player
   */
  playerRoleId: Role['roleId']

  //* save the message
  postBack?: { (details: MessageDetails, message: any): void }
  postBackArchive?: { (archiveMark: MessagePlanning[]): void }
  confirmCancel?: boolean
  onCancel?: { (event: React.MouseEvent<HTMLButtonElement>): void }

  selectedForce: ForceData
  selectedRoleName: string
  currentTurn: number

  /** current game phase */
  phase: typeof Phase.Planning | typeof Phase.Adjudication

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

  /**
   *  modify document prior to being stored
   */
  modifyForSave?: { (document: Record<string, any>): Record<string, any> }
  /**
   *  the range of planning activities for each force
   */
  forcePlanningActivities?: PerForcePlanningActivitySet[]

  onDetailPanelOpen?: (rowData: OrderRow) => void

  onDetailPanelClose?: (rowData: OrderRow) => void

  editThisMessage?: (docId: string) => void

  onLocationEditorLoaded?: (editorElm: HTMLDivElement) => void

  onSupportPanelLayoutChange: (key: string, value: string) => void
}
