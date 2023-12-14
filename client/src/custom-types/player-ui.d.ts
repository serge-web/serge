import { TurnFormats } from 'src/config'
import { ChannelTypes } from './channel-data'
import ChannelUI from './channel-ui'
import ForceData from './force-data'
import { MessageChannel, MessageFeedback } from './message'
import { TemplateBodysByKey } from './message-types'
import { PlayerMessageLog } from './player-log'
import Role from './role'
import { GameTurnLength } from './turn-length'

export interface PlayerUiChannels {
  [property: string]: ChannelUI
}

export interface PlayerUiChatChannel {
  name: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  template: object
  messages: Array<MessageChannel>
}

export default interface PlayerUi {
  selectedForce?: ForceData
  selectedRole: Role['roleId']
  selectedRoleName: Role['name']
  isObserver: boolean
  /** player is from umpire force */
  isUmpire: boolean
  isGameControl: boolean
  currentTurn: number
  turnPresentation?: TurnFormats
  phase: string
  gameDate: string
  gameTurnTime: GameTurnLength
  realtimeTurnTime: number
  turnEndTime: string
  /**
   * how long before end of turn that warning inidicator should appear (millis)
   */
  timeWarning: number
  adjudicationStartTime: string
  gameDescription: string
  currentWargame: string
  wargameTitle: string
  chatChannel: PlayerUiChatChannel
  /** dictionary for set of channels visible to logged in player */
  channels: PlayerUiChannels
  /** all channels in this wargame */
  allChannels: Array<ChannelTypes>
  /** set of forces for ths current wargame */
  allForces: Array<ForceData>
  /** templates, indexed by Id 
   * to be @deprecated
   */
  allTemplatesByKey: TemplateBodysByKey
  showObjective: boolean
  updateMessageState: boolean
  /** whether wargame changes stored as new documents (true) or whether
   * change overwrite the original wargame document (false)
   */
  wargameInitiated: boolean
  feedbackMessages: Array<MessageFeedback>
  /** whether the introductory tour is running */
  tourIsOpen: boolean
  modalOpened?: string
  /** whether access codes are displayed for current wargame */
  showAccessCodes: boolean
  /** whether to record player activity to database */
  logPlayerActivity: boolean
  /** whether logged in user can view insights & feedback */
  isInsightViewer: boolean
  /** whether logged in user can release RFIs */
  isRFIManager: boolean
  /** log of recent player messages */
  playerMessageLog: PlayerMessageLog
  /** whether to hide force memberships in channels */
  hideForcesInChannels?: boolean
}
