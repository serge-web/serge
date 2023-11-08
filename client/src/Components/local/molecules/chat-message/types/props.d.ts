import { ChatMessage } from 'src/custom-types'

export type Props = {
    message: ChatMessage
    /**
     * Checks if user is from umpire force
     */
    isUmpire: boolean
    isOwner: boolean
    markUnread?: (message: ChatMessage) => void
    /** whether to hide the author (force/role) of the message */
    hideAuthor?: boolean
  }
