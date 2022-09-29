import { MessageDetails, ChannelTypes } from '@serge/custom-types'
import { MouseEvent } from 'react'

export default interface PropTypes {
  schema: any
  privateMessage: boolean
  onMessageSend?: (e: MouseEvent<HTMLButtonElement>) => void
  onCancel?: (e: MouseEvent<HTMLButtonElement>) => void
  confirmCancel?: boolean
  selectedForce: ForceData
  selectedRole: string
  selectedRoleName: string
  messageOption: string
  currentTurn: number
  messageCreatorValue?: Editor | null
  getMessageCreatorValue?: (value: string) => string
  createMessageValue?: (message: any, messageOption: string) => void
  clearCachedCreatorMessage?: (data: string[]) => void
  /**
   * The method for posting messages out of the component
   */
   postBack: { (details: MessageDetails, message: any): void }
  channel: ChannelTypes
  gameDate: string
    /** method to customise the new (or existing) message template */
    customiseTemplate?: {(schema: Record<string, any>): Record<string, any>}
}
