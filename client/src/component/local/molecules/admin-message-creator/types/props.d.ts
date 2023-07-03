import { MessageChannel, Role } from '@serge/custom-types'

export default interface Props {
  from: {
    name: Role['roleId']
    color: string
    /**
    * @deprecated use iconURL instead
    */
    icon?: string
    iconURL: string
  }
  channel: string
  role: Role['roleId']
  roleName: Role['name']
  /**
   * The method for posting messages out of the component
   */
  postBack?: { (value: MessageChannel): void }
  turnNumber: number
}
