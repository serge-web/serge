/** an entry in the player log */
export default interface PlayerMessage {
  /** role id for this player */
  roleId: string
  /** title of last message received */
  lastMessageTitle: string
  /** time of last message received */
  lastMessageTime: string
  hasBeenRead: boolean
  _id: string
}

/** collated set of player log data, ready for display */
export interface PlayerLogUI {
  force: string
  forceColor: string
  iconURL?: string,
  role: string
  // title of last message sent (or undefined if no message sent)
  title?: string
  // time of last message sent (or undefined if no message sent)
  time?: string
}

export interface Playerlogs {
  activityTime: string
  activityType: string
  role: string
  wargame: string
  _id: string
}

/** dictionary of player log entries, indexed
 * by role id
 */
export type PlayerMessageLog = Record<string, PlayerMessage>
