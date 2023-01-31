import { GameTurnLength } from "./turn-length";

/** a description of the start and finish time for a turn */
export interface TurnPeriod {
  gameTurnTime: GameTurnLength,
  gameDate: string,
  gameTurn: number,
  phase: string,
  _id?: string
}

export type TurnPeriods = TurnPeriod[]
