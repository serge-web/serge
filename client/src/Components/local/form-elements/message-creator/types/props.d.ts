import { ChannelTypes, CoreMessage, ForceData, MessageDetails, MessageStructure } from 'src/custom-types'
import { MouseEvent } from 'react'

export default interface PropTypes {
  schema: any
  privateMessage: boolean
  onMessageSend?: (e: MouseEvent<HTMLButtonElement>) => void
  onCancel?: (e: MouseEvent<HTMLButtonElement>) => void
  confirmCancel?: boolean
  selectedForce?: ForceData
  selectedRole: string
  selectedRoleName: string

  // the template show
  messageOption: string
  currentTurn: number

  // method is way to clear cached messages from the browser
  clearCachedCreatorMessage?: (data: string[]) => void

  /**
   * The method for posting messages out of the component
   */
  postBack: { (details: MessageDetails, message: any, templateId: string): void }
  channel: ChannelTypes
  gameDate: string
  /** method to customise the new (or existing) message template */
  customiseTemplate?: { (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }

  /** draft message to show in editor */
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
