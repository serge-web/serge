import { MessageChannel, MessageCustom } from '@serge/custom-types'

interface Props {
  open: (message: MessageChannel) => void,
  detail: MessageCustom,
  key: string | string
}
export default Props
