import { PlayerUiChannels, PlayerUiChatChannel, MessageCustom } from '.';

export default interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  rfiMessages: Array<MessageCustom>
}
