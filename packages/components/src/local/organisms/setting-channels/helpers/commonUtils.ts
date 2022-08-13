import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_MAPPING } from "@serge/config";
import { ChannelTypes } from "@serge/custom-types";

export const isCollabChannel = (channel?: ChannelTypes): boolean => {
  return (channel && channel.channelType === CHANNEL_COLLAB) || false
}

export const isChatChannel = (channel?: ChannelTypes): boolean => {
  return (channel && channel.channelType === CHANNEL_CHAT) || false
}

export const isCustomChannel = (channel?: ChannelTypes): boolean => {
  return (channel && channel.channelType === CHANNEL_CUSTOM) || false
}

export const isMappingChannel = (channel?: ChannelTypes): boolean => {
  return (channel && channel.channelType === CHANNEL_MAPPING) || false
}

export const isLegacyChannel = (channel?: ChannelTypes): boolean => {
  return (channel && channel['format']) || false
}