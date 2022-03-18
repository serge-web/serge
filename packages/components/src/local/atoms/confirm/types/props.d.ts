import noop from 'lodash'

export type Props = {
  isOpen: boolean
  message: string
  onConfirm: noop
  onCancel: noop
}
