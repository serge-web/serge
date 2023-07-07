import { Role } from 'src/custom-types'
import React from 'react'

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
  role?: Role['roleId']
  /**
   * Message sender rolename
   */
  roleName?: Role['name']
  /**
  * Message force color
  */
  forceColor: string
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

  markUnread?: () => void
}
