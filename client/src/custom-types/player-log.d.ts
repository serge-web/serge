import {
  MAP_ANNOTATION_READ_INTERACTION, 
  CHANGE_TAB_INTERACTION, 
  MESSAGE_READ_INTERACTION, 
  MESSAGE_SENT_INTERACTION, 
  MESSAGE_UNREAD_INTERACTION
  // PLAIN_INTERACTION 
} from 'src/config'

/** an entry in the player log */
export interface PlayerMessage {
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
  iconURL?: string
  role: string
  // title of last message sent (or undefined if no message sent)
  title?: string
  // time of last message sent (or undefined if no message sent)
  time?: string
}

/** a player has had some interaction with the UI */
export interface PlainInteraction {
  aType: string
}

/** a player has selected a tab */
export interface ChangeTabInteraction extends PlainInteraction {
  aType: typeof CHANGE_TAB_INTERACTION
  tab: string
}

/** a player has sent a message */
export interface MessageSentInteraction extends PlainInteraction {
  aType: typeof MESSAGE_SENT_INTERACTION
  // note: we don't have an id, since the message doesn't (yet) have an id
}

/** a player has marked a message as read */
export interface MessageReadInteraction extends PlainInteraction {
  aType: typeof MESSAGE_READ_INTERACTION
  _id: string
}

/** a player has marked a message as unread */
export interface MessageUnReadInteraction extends PlainInteraction {
  aType: typeof MESSAGE_UNREAD_INTERACTION
  _id: string
}

/** a player has read a map annotation */
export interface MapAnnotationReadInteraction extends PlainInteraction {
  aType: typeof MAP_ANNOTATION_READ_INTERACTION
  _id: string
}

/** union of all types of activity */
export type PlayerInteraction = PlainInteraction | MessageReadInteraction | MessageUnReadInteraction | MapAnnotationReadInteraction

export interface PlayerLogEntry {
  activityTime: string
  activityType: PlayerInteraction
  role: string
  wargame: string
  _id: string
}

/** a list of entries, build up before pushing to server */
export type PlayerLogEntries = PlayerLogEntry[]

/** dictionary of player log entries, indexed
 * by role id
 */
export type PlayerMessageLog = Record<string, PlayerMessage>
