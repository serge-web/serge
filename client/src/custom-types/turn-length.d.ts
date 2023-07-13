export interface TurnLengthType {
  unit: string
}

/** express turn length in milliseconds */
export interface MilliTurns extends TurnLengthType {
  unit: 'millis'
  millis: number
}

/** express turn length in months */
export interface MonthTurns extends TurnLengthType {
  unit: 'months'
  months: number
}

/** different ways of expressing turn length */
export type GameTurnLength = MilliTurns | MonthTurns
