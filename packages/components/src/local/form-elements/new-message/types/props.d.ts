import { IconOption, TemplateBody } from '@serge/custom-types'

export default interface PropTypes {
  role: string;
  orderableChannel: boolean;
  confirmCancel: boolean;
  templates: TemplateBody[];
  curChannel: string;
  privateMessage: boolean;
  activityTimeChanel: (role: string, message: string) => void
  selectedForce?: ForceData
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
