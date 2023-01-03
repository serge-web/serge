import { TurnFormats } from '@serge/config'
import React from 'react'

export default interface Props {
  adjudicationStartTime: string
  turnEndTime: string
  timeWarning: number
  currentTurn: number
  turnPresentation: TurnFormats
  phase: string
  gameDate: string
  /** the current turn length */
  gameTurnLength: GameTurnLength
  /** is current player acting as game control (with ability to step forward) */
  isGameControl: boolean
  onNextTurn?: React.ReactEventHandler<any>
  /** whether the wragame has been initiated or not */
  wargameInitiated: boolean
  /** whether to display the countdown timer */
  showTimeRemaining: boolean
}
