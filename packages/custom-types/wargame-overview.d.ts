import MappingConstraints from "./mapping-constraints";
import { GameTurnLength } from "./turn-length";
import { TurnFormats } from "@serge/config"

export default interface WargameOverview {
  /** title for this wargame */
  name: string,
  /** high level description of wargame */
  gameDescription: string,
  /** whether to hide force members in channels */
  hideForcesInChannels?: boolean
  /** form for displaying turn number
   * Note: we allow string, so we can read data from JSON
   */
  turnPresentation?: TurnFormats | string,
  /** how far game time moves forward on each step */
  gameTurnTime: GameTurnLength,
  /** the time allowed for player planning */
  realtimeTurnTime: number,
  /** when to display "not much time remaining" warning */
  timeWarning: number,
  /** date-time of start of game */
  gameDate: string,
  /** allow easy login, during game development/test */
  showAccessCodes: boolean,
  /** whether this page has unsaved edits */
  enablePlayerlogs: boolean,
  dirty: boolean
}