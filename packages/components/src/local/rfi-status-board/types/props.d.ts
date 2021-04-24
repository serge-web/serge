import { MessageCustom } from '@serge/custom-types/message'
export default interface Props {
  rfiMessages: MessageCustom[]
  roles: string[]
  channels: Array<ChannelData>
  isRFIManager: boolean
  isUmpire: boolean
}
