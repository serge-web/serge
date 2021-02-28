import { RequestForInformation } from '@serge/custom-types'

export type State = {
  answer: string | undefined
  message: string | undefined
}
export type Action = {
  payload: string | undefined
  type: 'updateAnswer' | 'updateMessage'
}
export default interface Props {
  /**
   * Request object
   */
  request: {
    title: RequestForInformation['title']
    description: RequestForInformation['description']
  }
  /**
   * Callback on save draft event
   */
  onSaveDraft?: (payload: State) => void
  /**
   * Callback on submit event
   */
  onSubmit?: (payload: State) => void
}
