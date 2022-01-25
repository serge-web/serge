import { ChannelTypes } from './channel-data'
import ForceData from './force-data'
import PlatformTypeData from './platform-type-data'
import { MessageFeedback, MessageChannel, MessageCustom } from './message'
import ChannelUI from './channel-ui'
import MappingConstraints from './mapping-constraints'
import { TemplateBodysByKey } from './message-types'
import Role from './role'
import { GameTurnLength } from './turn-length'
import { TurnFormats } from '@serge/config'
import { PlayerMessageLog } from './player-log'

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
  selectedRole: Role['roleId'],
  selectedRoleName: Role['name'],
  isObserver: boolean,
  canSubmitPlans: boolean,
  isGameControl: boolean,
  currentTurn: number,
  turnPresentation?: TurnFormats,
  phase: string,
  gameDate: string,
  gameTurnTime: GameTurnLength,
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
  allChannels: Array<ChannelTypes>,
  /** set of forces for ths current wargame */
  allForces: Array<ForceData>,
  allTemplatesByKey: TemplateBodysByKey,
  /** descriptions of platforms available in current wargame */
  /**
   * @deprecated allPlatformTypesByKey will allow more easy access. [platformType.name]: PlatformType
   */
  allPlatformTypes: Array<PlatformTypeData>,
  /** descriptions of platforms available in current wargame easy access by [platformType.name]: PlatformType */
  allPlatformTypesByKey: {
    [property: string]: PlatformTypeData
  }
  showObjective: boolean,
  /** whether wargame changes stored as new documents (true) or whether
   * change overwrite the original wargame document (false)
   */
  wargameInitiated: boolean,
  feedbackMessages: Array<MessageFeedback>,
  /** whether the introductory tour is running */
  tourIsOpen: boolean,
  /** definition of background map */
  mappingConstaints?: MappingConstraints,
  modalOpened?: string,
  /** whether access codes are displayed for current wargame */
  showAccessCodes: boolean,
  /** whether logged in user can view insights & feedback */
  isInsightViewer: boolean,
  /** whether logged in user can release RFIs */
  isRFIManager: boolean
  /** log of recent player messages */
  playerMessageLog: PlayerMessageLog
}
