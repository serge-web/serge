import Message, { MessageDetails } from './message'
import WargameData from './wargame-data'

export interface PlayerDbMessage {
  infoType: undefined,
  details: MessageDetails,
  message: {
    content: string
  },
  open: boolean,
  _id: string
}


export interface PlayerUiMessageInfoType {
  details: {
    /** id of channel `infoTypeChannelMarker${uniqId.time()}` */
    channel: string
  },
  infoType: boolean,
  gameTurn: number,
}

export interface PlayerDbMessageInfoType {
  infoType: boolean,
  gameTurn: number,
  details: MessageDetails,
  data: WargameData,
  name: string,
  wargameTitle: string,
  phase: string,
  adjudicationStartTime: string,
  turnEndTime: number,
  wargameInitiated: boolean,
  _id: string,
  _rev: string,
}

type PlayerUiMessageTypes = Message | PlayerUiMessageInfoType
export type PlayerDbMessageTypes = PlayerDbMessage | PlayerDbMessageInfoType

export default PlayerUiMessageTypes
