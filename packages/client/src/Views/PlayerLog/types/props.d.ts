export type PLayerLogProps = {
  isOpen: boolean
  onClose: () => void
}

export type PlayerLogModal = {
  forceName: string
  /* hex code for force color */
  forceColor: string
  roleName: string
  message: string
  /** time the last message was sent */
  lastMessage: string
  /** time the player was last present */
  lastActive: string
  /** whether player recently active */
  active: boolean
}