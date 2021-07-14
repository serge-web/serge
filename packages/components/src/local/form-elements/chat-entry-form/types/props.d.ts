import { ChatMessage } from '@serge/custom-types'

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
  role: string
  /**
   * The method for posting messages out of the component
   */
  postBack?: { (post: ChatMessage): void }
}
