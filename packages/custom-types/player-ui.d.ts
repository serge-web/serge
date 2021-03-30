import ChannelData from './channel-data'
import ForceData from './force-data'
import PlatformTypeData from './platform-type-data'
import { MessageFeedback, MessageChannel, MessageCustom } from './message'
import ChannelUI from './channel-ui'

export interface PlayerUiChannels {
  [property: string]: ChannelUI
}

export interface PlayerUiChatChannel {
  name: string,
  template: object,
  messages: Array<MessageChannel>
}

export default interface PlayerUi {
  selectedForce?: ForceData,
  selectedRole: string,
  isObserver: boolean,
  canSubmitPlans: boolean,
  isGameControl: boolean,
  currentTurn: number,
  phase: string,
  gameDate: string,
  gameTurnTime: number,
  realtimeTurnTime: number,
  turnEndTime: string,
  /**
   * how long before end of turn that warning inidicator should appear (millis)
   */
  timeWarning: number,
  adjudicationStartTime: string,
  gameDescription: string,
  currentWargame: string,
  wargameTitle: string,
  chatChannel: PlayerUiChatChannel,
  /** dictionary for set of channels visible to logged in player */
  channels: PlayerUiChannels,
  /** all channels in this wargame */
  allChannels: Array<ChannelData>,
  /** set of forces for ths current wargame */
  allForces: Array<ForceData>,
  allTemplates: Array<any>,
  /** descriptions of platforms available in current wargame */
  allPlatformTypes: Array<PlatformTypeData>,
  showObjective: boolean,
  /** whether wargame changes stored as new documents (true) or whether
   * change overwrite the original wargame document (false)
   */
  wargameInitiated: boolean,
  feedbackMessages: Array<MessageFeedback>,
  /** whether the introductory tour is running */
  tourIsOpen: boolean,
  modalOpened?: string,
  /** whether access codes are displayed for current wargame */
  showAccessCodes: boolean,
  /** List of RFI messages */
  rfiMessages: Array<MessageCustom>,
  /** whether logged in user can view insights & feedback */
  isInsightViewer: boolean,
  /** whether logged in user can release RFIs */
  isRFIManager: boolean
}
