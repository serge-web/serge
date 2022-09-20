import { ChannelTypes } from '@serge/custom-types'
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
  channel: ChannelTypes
  currentWargame: string
  gameDate: string
  saveMessage: (currentWargame: string, details: MessageDetails, message: any) => Function
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => Function
  dispatch: Dispatch<any>
}
