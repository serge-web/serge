import {
  MessageCustom,
  ForceRole,
  ChannelData,
  ForceData,
  TemplateBodysByKey
} from '@serge/custom-types'
import React from 'react'
import { TableColumnBase } from 'react-data-table-component/dist/src/DataTable/types'

export type Collapsible = (cb?: (() => void) | undefined) => React.ReactElement
export type Row = { [x: string], collapsible?: Collapsible }
export type Column = TableColumnBase & {
  selector: (row: Row2) => any
  sortFunction?: (rowA: Row, rowB: Row) => number
}

export default interface Props {
  currentWargame: string
  messages: MessageCustom[]
  channel: ChannelData
  channelColb: ChannelCollab
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
  onMessageRead?: (unreadedLeft: number) => void
}
