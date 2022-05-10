interface Props {
  schema: any,
  curChannel: string,
  privateMessage: string
  onMessageSend?: (e: any) => void
  onCancel?: (e: any) => void
  // whether user has to confirm cancelling a new document
  confirmCancel?: boolean
}
export default Props
