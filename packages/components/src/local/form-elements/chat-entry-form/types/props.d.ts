import { ChatMessage, Role } from '@serge/custom-types'

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
  postBack?: { (post: ChatMessage): void }
  onchangeCheatInputMessage: (value: string, messageType: string) => void
  removeChatEntryMessage?: (data: string[]) => void
  onChangePrivateStorage: (message: string, messageType: string) => void
  privatMessageValue: (value: string) => string
  chatEntryFormValue: (value: string) => string
  turnNumber: number
}
