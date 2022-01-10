import { PlayerUiChannels, PlayerUiChatChannel, MessageCustom, PlayerLog } from '.';

export default interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  // TODO: remove the `RFI-Messages` item, we now handle them per-channel
  rfiMessages: Array<MessageCustom>,
  playerLog: PlayerLog
}
