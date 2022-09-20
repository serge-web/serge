import { PlayerUiChannels, MessageDetails, ChannelTypes } from '@serge/custom-types'
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
  currentTurn: number
  /**
   * The method for posting messages out of the component
   */
   postBack: { (details: MessageDetails, message: any): void }
  channel: ChannelTypes
  gameDate: string
}
