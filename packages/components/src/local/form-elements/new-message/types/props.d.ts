import { PlayerUiChannels, TemplateBody } from '@serge/custom-types'

export default interface PropTypes {
  orderableChannel: boolean
  confirmCancel: boolean
  templates: TemplateBody[]
  curChannel: string
  privateMessage: boolean
  activityTimeChanel: (role: string, message: string) => void
  selectedForce?: ForceData
  selectedRole: string
  selectedRoleName: string
  currentTurn: number
  channels: PlayerUiChannels
  currentWargame: string
  gameDate: string
  saveMessage: (currentWargame: string, details: MessageDetails, message: any) => Function
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => Function
  dispatch: Dispatch<any>
}
