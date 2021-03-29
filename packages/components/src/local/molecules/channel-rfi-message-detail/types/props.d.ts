import { MessageCustom, Role } from '@serge/custom-types'
export default interface Props {
  onChange: (nextMessage: MessageCustom) => void
  message: MessageCustom
  role: Role['name']
  isUmpire: boolean
}
