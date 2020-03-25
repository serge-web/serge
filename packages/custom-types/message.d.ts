export default interface Message {
  details: {
    channel: string,
    from: {
      force: string,
      forceColor: string,
      role: string,
      icon: string
    }
    messageType: string,
    timestamp: string,
  },
  message: {
    content: string
  },
  open: boolean,
  hasBeenRead: boolean
  _id: string
  _rev: string
}