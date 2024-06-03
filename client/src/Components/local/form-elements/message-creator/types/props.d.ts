import { ChannelTypes, CoreMessage, ForceData, MessageDetails, TypeOfCustomMessage } from 'src/custom-types'
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
  postBack: { (details: MessageDetails, message: any, templateId: string, messageType: TypeOfCustomMessage): void }
  channel: ChannelTypes
  gameDate: string
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
