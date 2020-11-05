import { PlanningCommands } from '@serge/config'

export default interface PropTypes {
  /**
   * The name of the state to be updated
   */
  name: string
  /**
   * The current status of plannedTurns
   */
  status: string
  /**
   * If the status is mobile
   */
  isMobile: boolean
  /**
   * Umpire has triggered a command
   */
  handleCommand: {(command: PlanningCommands): void}
  /**
   * handler for reverting the changesß
   */
  revertRouteChanges?: {(): void}
}
