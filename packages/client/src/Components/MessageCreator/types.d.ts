interface Props {
  schema: any,
  curChannel: string,
  privateMessage: string
  onMessageSend?: (e: any) => void
  onCancel?: (e: any) => void
}
export default Props
