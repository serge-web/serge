import noop from 'lodash'

export type Props = {
  isOpen: boolean
  title?: string
  message: string
  onConfirm: noop
  onCancel: noop
  cancelBtnText?: string
  confirmBtnText?: string
}
