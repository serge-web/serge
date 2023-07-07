import { MessageCustom } from 'src/custom-types/message'

export type ActionPayload = {
  answer: string | null
  privateMessageContent?: string | null
}
export type Action = {
  payload: string | undefined
  type: 'updateAnswer' | 'updateMessage'
}
export default interface Props {
  /**
   * RFI message
   */
  message: MessageCustom
  /**
   * Submit action event handler, this could be one of:
   * Take ownership on unallocated RFIs
   * Send for review on RFIs in progress
   * Release for pending review RFIs
   * @param payload
   */
  onSubmit?: (message: any, payload: ActionPayload) => void
  /**
   * Reject action event handler on release for pending review RFIs
   * @param payload
   */
  onReject?: (message: any, payload: ActionPayload) => void
}
