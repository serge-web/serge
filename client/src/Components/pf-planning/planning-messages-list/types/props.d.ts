import { Phase } from 'src/config'
import { ChannelPlanning, ForceData, ForceStyle, MessagePlanning, PlannedActivityGeometry, Role } from 'src/custom-types'
import React from 'react'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export type OrderRow = {
  id: string
  // the raw reference value
  rawRef: string
  // the combined reference and turn number
  reference: string
  force: ForceData['name']
  assets: string
  excluded: boolean
  title: string
  role: string
  activity: string
  startDate: string
  endDate: string
  /* note - the tableData object is
  injected by material-table */
  tableData?: { checked: boolean }
}

export type LocationEditCallbackHandler = { (plans: PlannedActivityGeometry[], callback: { (newValue: PlannedActivityGeometry[]): void }): void }

export default interface PropTypes extends Omit<ForcesInChannelProps, 'icons' | 'names' | 'colors'> {
  /**
   *  current date for turn-end (may be used for finding other orders to sync iwth)
   */
  gameTurnEndDate: string
   /** the force data
   *
   */
  allForces: ForceData[]
  /**
    * force names and colors
    */
  forceColors: Array<ForceStyle>
/**
   *  definition of planning channel
   */
  channel: ChannelPlanning
  /**
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
  
  onCancel?: { (event: React.MouseEvent<HTMLButtonElement>): void }

  copyMessage?: { (id: MessagePlanning['_id']): void }

  selectedForce: ForceData
selectedRoleName: string
  currentTurn: number

  /** current game phase */
  phase: typeof Phase.Planning | typeof Phase.Adjudication

  isUmpire: boolean
  /** whether to hide the forces in the channel
   */
  hideForcesInChannel: boolean

  selectedOrders: string[]
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  /**
    * the current turn filter or (-1) to show all
    */
  turnFilter?: number

  onDetailPanelOpen?: (rowData: OrderRow) => void

  onDetailPanelClose?: (rowData: OrderRow) => void

  editThisMessage?: (docId: string) => void

  onLocationEditorLoaded?: (editorElm: HTMLDivElement) => void

  onSupportPanelLayoutChange: (key: string, value: string) => void

  getSupportPanelState: () => void
}
