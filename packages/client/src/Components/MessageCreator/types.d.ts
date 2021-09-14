interface Props {
  schema: any,
  curChannel: string,
  privateMessage: string
  onMessageSend?: (e: any) => void
  onCancel?: () => void
}
export default Props
