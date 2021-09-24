import {
  MessageCustom,
  ForceRole,
  ChannelData,
  ForceData,
  TemplateBodysByKey
} from '@serge/custom-types'

import { TYPE_COA, TYPE_RFI } from '..'

export interface PropsRFI {
  type: typeof TYPE_RFI,
  rfiMessages: MessageCustom[]
  roles: string[]
  channels: Array<ChannelData>
  onChange?: (nextMessage: MessageCustom) => void
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** if this player has "RFI Manager" attribute in their role */
  isRFIManager: boolean
  /** role of logged in player
   */
  role: ForceRole
  /** fires on change message status to readed **/
  onMessageRead?: (unreadedLeft: number) => void
  currentWargame: string
}

export interface PropsCOA {
  type: typeof TYPE_COA,
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
  onMessageRead?: (unreadedLeft: number) => void
}

type Props = PropsCOA | PropsRFI

export default Props