import {
  MessageCustom,
  ForceRole,
  ChannelData,
  ForceData,
  TemplateBodysByKey
} from '@serge/custom-types'
import { RefObject } from 'react'
export default interface Props {
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

  parentRef?: RefObject<HTMLDivElement>
}
