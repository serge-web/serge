import { MessageCustom, Role } from '@serge/custom-types'

export default interface Props {
  role: Role['roleId']
  isUmpire: boolean
  isRFIManager: boolean
  borderColor: string
  onChange?: (nextMessage: MessageCustom) => void
  onRead?: (nextMessage: MessageCustom) => void
  message: MessageCustom
  forceColor: string
}
