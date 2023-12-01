import { Phase } from 'src/config'
import { ChannelPlanning, ForceData, GameTurnLength, PerForcePlanningActivitySet, Role, TurnPeriods } from 'src/custom-types'
import { ForceStyle } from 'src/Helpers'
import ForcesInChannelProps from '../../../molecules/forces-in-channel/types/props'

export type AdjudicationRow = {
  id: string
  reference: string
  complete: boolean
  /** turn when adjudication generated */
  turn: number
  /** whether outcome is flagged as important */
  important: string
  owner: string
  order1: string
  order2: string
  activity: string
  period: string
  tableData?: { showDetailPanel: any }
}

export default interface PropTypes extends Omit<ForcesInChannelProps, 'icons' | 'names' | 'colors'> {
  /** forces in this game
  *
  */
  forces: ForceData[]
  /**
   *  current game-date (may be used in JSON Editor for date-picker)
   */

  /**
   * all the turn periods of the wargame
   */
  periods: TurnPeriods

  gameDate: string
  /**
   *  the turn length
   */
  gameTurnLength: GameTurnLength
  /**
   *  definition of planning channel
   */
  channel: ChannelPlanning
  /**
   * Callback on expanding message item
   */

  currentWargame: string
   /**
   * the name of the wargame
   */
  /**
  //  * role of current player
  //  */
  playerRoleId: Role['roleId']
  /** forces and colors
   *
   */
  forceColors: ForceStyle[]
  /**
   * the range of planning activities for each force
   */
  forcePlanningActivities?: PerForcePlanningActivitySet[]
  /**
   * current turn filter (or -1 to show all turns)
   */
  turnFilter?: number

  onDetailPanelOpen?: (rowData: AdjudicationRow) => void

  onDetailPanelClose?: (rowData: AdjudicationRow) => void

  /** the current turn for the game */
  currentTurn: number

  /** current phase of game */
  phase: Phase
}
