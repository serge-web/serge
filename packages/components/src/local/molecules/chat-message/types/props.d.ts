import { ChatMessage } from '@serge/custom-types'

export type Props = {
    message: ChatMessage
    /**
     * Checks if user is from umpire force
     */
    isUmpire: boolean
    isOwner: boolean
    markUnread?: (message: ChatMessage) => void
  }
