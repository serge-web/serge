interface Props {
  schema: any,
  curChannel: string,
  privateMessage: string
  onMessageSend?: (e: MouseEvent<HTMLButtonElement>) => void
  onCancel?: (e: MouseEvent<HTMLButtonElement>) => void
  confirmCancel?: boolean
}
export default Props
