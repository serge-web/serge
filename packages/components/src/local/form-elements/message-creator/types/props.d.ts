import { PlayerUiChannels, MessageDetails } from '@serge/custom-types'
import { MouseEvent } from 'react'

export default interface PropTypes {
  schema: any
  curChannel: string
  privateMessage: boolean
  onMessageSend?: (e: MouseEvent<HTMLButtonElement>) => void
  onCancel?: (e: MouseEvent<HTMLButtonElement>) => void
  confirmCancel?: boolean
  selectedForce: ForceData
  selectedRole: string
  selectedRoleName: string
  currentTurn: number
  channels: PlayerUiChannels
  gameDate: string
  /**
   * The method for posting messages out of the component
   */
   postBack: { (details: MessageDetails, message: any): void }
}
