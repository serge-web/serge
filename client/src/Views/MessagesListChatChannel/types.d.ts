import { MessageChannel } from 'src/custom-types'
interface Props {
  messages: MessageChannel[],
  markAllAsRead: () => void
}

export default Props
