import ChannelData from './channel-data'
import ForceData from './force-data'
import PlatformTypeData from './platform-type-data'
import { MessageFeedback, MessageChannel } from './message'

export interface PlayerUiChannels {
  [property: string]: ChannelData
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
  turnEndTime: number,
  adjudicationStartTime: string,
  gameDescription: string,
  currentWargame: string,
  wargameTitle: string,
  chatChannel: PlayerUiChatChannel,
  channels: PlayerUiChannels,
  allChannels: Array<ChannelData>,
  allForces: Array<ForceData>,
  allTemplates: Array<any>,
  allPlatformTypes: Array<PlatformTypeData>,
  showObjective: boolean,
  wargameInitiated: boolean,
  feedbackMessages: Array<MessageFeedback>,
  tourIsOpen: boolean,
  modalOpened?: string,
  showAccessCodes: boolean,
  isInsightViewer: boolean
}
