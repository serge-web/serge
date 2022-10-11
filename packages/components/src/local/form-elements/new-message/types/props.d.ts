import { ChannelTypes, ForceData, MessageDetails, TemplateBody } from '@serge/custom-types'

export default interface PropTypes {
  orderableChannel: boolean
  confirmCancel: boolean
  templates: TemplateBody[]
  privateMessage: boolean
  selectedForce?: ForceData
  selectedRole: string
  selectedRoleName: string
  channelId?: string
  currentTurn: number
  gameDate: string
  saveCachedNewMessageValue?: (editMessage: any, messageOption: string) => void
  getCachedNewMessagevalue?: (value: string) => string
  clearCachedNewMessage?: (data: string[]) => void
  channel: ChannelTypes
  /** method to customise new (or existing) message template */
  customiseTemplate?: { (schema: Record<string, any>): Record<string, any> }
  /**
   * The method for posting messages out of the component
   */
  postBack: { (details: MessageDetails, message: any): void }
}
