import { Message } from '@serge/custom-types'

export default interface Props {
  from: {
    name: string
    color: string
    icon?: string
  }
  channel: string
  role: string
  /**
   * The method for posting messages out of the component
   */
  postBack?: {(value: Message): void}
}
