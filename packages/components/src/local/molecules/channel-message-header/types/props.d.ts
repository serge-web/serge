import React from 'react'
import { CollaborativeMessageStates } from '@serge/config'
import {CollaborationDetails} from "@serge/custom-types/message";

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
   * RFI collaboration details
   */
  collaboration?: CollaborationDetails
  /**
   * RFI status
   */
  rfiStatus?: CollaborativeMessageStates
  /**
   * RFI id
   */
  rfiId?: string
  /**
   * Whether current user is an RFI manager or not
   */
  isRFIManager?: boolean
}
