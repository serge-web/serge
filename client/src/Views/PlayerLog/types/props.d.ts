import React from 'react'
/** handlers passed to the player log modal popup */
export type PlayerLogProps = {
  isOpen: boolean
  onClose: () => void,
  handlePlayerlogsMarkAllAsRead: () => void
  handlePlayerlogsMarkAllAsUnread: () => void
  playerLogsActivity: () => void
}

/** collated data to populate the player log modal popup */
export type PlayerLogModal = {
  forceName: string
  /* hex code for force color */
  forceColor: string
  roleName: string
  message: React.ReactElement
  // view: string | React.ReactElement
  /** time the last message was sent */
  lastMessage: string
  /** time the player was last present */
  lastActive: string
  /** what the last activity was */
  lastActivity: string
  /** whether player recently active */
  active: boolean
}
