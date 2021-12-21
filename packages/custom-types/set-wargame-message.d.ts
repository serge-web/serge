import { PlayerUiChannels, PlayerUiChatChannel, MessageCustom, PlayerLog } from '.';

export default interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  rfiMessages: Array<MessageCustom>,
  playerLog: PlayerLog
}
