import { MessageDetails, Role } from 'src/custom-types'

export default interface Props {
  from: {
    name: string
    color: string
    /**
    * @deprecated use iconURL instead
    */
    icon?: string
    iconURL: string
  }
  channel: string
  isUmpire: boolean
  role: Role['roleId']
  roleName: Role['name']
  /**
   * The method for posting messages out of the component
   */
  postBack?: { (details: MessageDetails, message: any, templateId: string): void }
  turnNumber: number
}
