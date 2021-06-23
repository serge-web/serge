
import { MessageCustom } from '@serge/custom-types'

export default interface Props {
  from: {
    name: string
    color: string
    icon?: string
  }
  channel: string
  roleId: string
  roleName: string
  /**
   * The method for posting messages out of the component
   */
  postBack?: {(value: MessageCustom): void}
}
