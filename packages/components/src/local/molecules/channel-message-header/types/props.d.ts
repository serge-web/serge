import React from 'react'
import { CollaborativeMessageStates } from '@serge/config'

export default interface Props {
  /**
   * Header collapsible open state
   */
  isOpen?: boolean
  /**
   * Header item title
   */
  title?: string
  /**
   * Message timestamp
   */
  timestamp?: string
  /**
   * Message sender role
   */
  role?: string
  /**
   * Message type
   */
  messageType?: string
  /**
   * Message read state
   */
  hasBeenRead?: boolean
  /**
   * Handle on collapse event
   */
  onExpand?: React.ReactEventHandler
  /**
   * RFI status
   */
  rfiStatus?: CollaborativeMessageStates
  /**
   * RFI id
   */
  rfiId?: string
}
