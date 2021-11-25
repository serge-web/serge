import { CollaborativePermission } from '@serge/config'
import {
  MessageCustom,
  ForceRole,
  ChannelCollab,
  TemplateBodysByKey
} from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  message: MessageCustom
  /** role of logged in player */
  role: ForceRole
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** definition of this channel */
  channelColb: ChannelCollab
  /** permission for this role in this channel */
  permission: CollaborativePermission
  /** template definitions */
  templates: TemplateBodysByKey
  /** people that a document in this channel can be assigned to */
  assignees?: ForceRole[]
  /** callback to collapse this item */
  collapseMe?: () => void
  /** current game time, used for initialising date-time controls */
  gameDate: string
  /** trigger on collapse */
  onRead?: () => void
  /** if message status readed */
  isReaded?: boolean
}

export interface DialogModalStatus {
  open: boolean
  title?: string
  placeHolder?: string
  content?: string
}
