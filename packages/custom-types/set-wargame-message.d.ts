import { PlayerUiChannels, PlayerUiChatChannel, MessageCustom, PlayerLog } from '.';

export default interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  playerLog: PlayerLog
}
