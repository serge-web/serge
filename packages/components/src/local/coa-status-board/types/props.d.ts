import {
  MessageCustom,
  ForceRole,
  ChannelData,
  ForceData,
  TemplateBodysByKey
} from '@serge/custom-types'
import React from 'react'

export type Collapsible = (cb?: (() => void) | undefined) => React.ReactElement
export type Row = { [x: string], collapsible?: Collapsible }
export type Column = TableColumn<T> & {
  selector: (row: Row) => any
  sortFunction?: (rowA: Row, rowB: Row) => number
}
export type ExtraCellProps = {
  row: Row
  name: string
}
export default interface Props {
  currentWargame: string
  messages: MessageCustom[]
  channel: ChannelData
  onChange: (nextMessage: MessageCustom) => void
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** if this player has "RFI Manager" attribute in their role */
  // isRFIManager: boolean
  /** role of logged in player */
  role: ForceRole
  /** if this set of participants can take part in collaborative working */
  canCollaborate?: boolean
  /** if this set of participants can release collaborative messages */
  canReleaseMessages?: boolean
  templates: TemplateBodysByKey
  /** list of forces */
  forces: ForceData[]
  /** current game time, used for initialising date-time controls */
  gameDate: string
  /** fires on change message status to readed **/
  onMessageRead?: (message: MessageCustom) => void

  /** mark all message as read */
  onMarkAllAsRead?: () => void
}
