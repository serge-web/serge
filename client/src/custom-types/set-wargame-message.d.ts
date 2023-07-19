import { PlayerUiChannels, PlayerUiChatChannel, PlayerMessageLog } from '.'

export default interface SetWargameMessage {
  channels: PlayerUiChannels
  chatChannel: PlayerUiChatChannel
  playerMessageLog: PlayerMessageLog
}
