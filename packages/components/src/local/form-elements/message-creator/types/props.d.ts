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
  channels: Channel[]
  currentWargame: string
  gameDate: string
  saveMessage: (currentWargame: string, details: MessageDetails, message: any) => () => void
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => Function
  dispatch: Dispatch<any>
}
