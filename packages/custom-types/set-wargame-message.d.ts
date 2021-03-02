import { PlayerUiChannels, PlayerUiChatChannel } from '.';

export default interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
}
