/** an entry in the player log */
export default interface PlayerLogInstance {
  /** role id for this player */
  roleId: string
  /** title of last message received */
  lastMessageTitle: string
  /** time of last message received */
  lastMessageTime: string
}

/** dictionary of player log entries, indexed
 * by role id
 */
export type PlayerLog = Record<string, PlayerLogInstance>
