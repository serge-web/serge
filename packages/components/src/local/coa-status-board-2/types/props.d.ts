import {
  MessageCustom,
  ForceRole,
  ChannelCollab,
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
  channelColb: ChannelCollab
  onChange: (nextMessage: MessageCustom) => void
  /** if this player is from an umpire force (and can see private messages) */
  isUmpire: boolean
  /** if this player is an Observer, with read only access to messages */
  isObserver: boolean
  /** role of logged in player */
  role: ForceRole
  templates: TemplateBodysByKey
  /** list of forces */
  forces: ForceData[]
  /** current game time, used for initialising date-time controls */
  gameDate: string
  /** fires on change message status to readed **/
  onMessageRead?: (unreadedLeft: number) => void
}
