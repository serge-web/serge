import { PlayerUiChannels, TemplateBody, MessageCustom } from '@serge/custom-types'

export default interface PropTypes {
  orderableChannel: boolean
  confirmCancel: boolean
  templates: TemplateBody[]
  curChannel: string
  privateMessage: boolean
  selectedForce?: ForceData
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
