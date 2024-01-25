import { ChannelTypes, CoreMessage, ForceData, MessageDetails, MessageStructure, TemplateBody } from 'src/custom-types'

export default interface PropTypes {
  orderableChannel: boolean
  /** whether a confirm box is shown when cancelling a message */
  confirmCancel: boolean
  /** player has cancelled creating new message */
  onCancel?: { (): void }
  /** title text (or leave empty for `New Message) */
  title?: string
  /** whether to hide template selector, because it has already been set */
  hideTemplateSelector?: boolean
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
  customiseTemplate?: { (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }

  /**
   * The method for posting messages out of the component
   */
  postBack: { (details: MessageDetails, message: any, templateId: string): void }

  /**
   * draft message to open in editor. The template should come from the details-messageType
   */
  draftMessage?: CoreMessage

  /**
 *  modify document prior to rendering in JSON editor
 */
  modifyForEdit?: { (document: Record<string, any>): Record<string, any> }

  /**
   *  modify document prior to being stored
   */
  modifyForSave?: { (document: Record<string, any>): Record<string, any> }
}
