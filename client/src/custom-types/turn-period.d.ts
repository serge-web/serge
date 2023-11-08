import { GameTurnLength } from './turn-length'

/** a description of the start and finish time for a turn */
export interface TurnPeriod {
  gameTurnTime: GameTurnLength
  gameDate: string
  gameTurn: number
}

export type TurnPeriods = TurnPeriod[]
