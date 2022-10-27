import { ChannelTypes, CoreMessage, ForceData, MessageDetails } from '@serge/custom-types'
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

  // way to retrieve cached messages from the browser
  getcachedCreatorMessageValue?: (value: string) => string

  // the method of saving messages in the browser
  createCachedCreatorMessage?: (message: any, messageOption: string) => void

  // method is way to clear cached messages from the browser
  clearCachedCreatorMessage?: (data: string[]) => void

  /**
   * The method for posting messages out of the component
   */
  postBack: { (details: MessageDetails, message: any): void }
  channel: ChannelTypes
  gameDate: string
  /** method to customise the new (or existing) message template */
  customiseTemplate?: { (schema: Record<string, any>): Record<string, any> }
  /** draft message to show in editor */
  draftMessage?: CoreMessage
}
