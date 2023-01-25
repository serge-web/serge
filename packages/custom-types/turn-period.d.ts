import { GameTurnLength } from "./turn-length";

export interface TurnPeriod {
  gameTurnTime: GameTurnLength,
  gameDate: string,
  gameTurn: number,
  _id?: string
}