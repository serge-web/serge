export default interface Message {
  details: {
    channel: string,
    from: {
      force: string,
      forceColor: string,
      role: string,
      icon?: string
      name?: string
    }
    messageType: string,
    timestamp: string,
  },
  message: {
    content: string
  },
  open: boolean,
  isOpen: boolean
  hasBeenRead: boolean
  _id: string
}