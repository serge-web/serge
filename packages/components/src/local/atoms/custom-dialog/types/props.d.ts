import noop from 'lodash'

export type Props = {
  isOpen: boolean
  header?: string
  content?: string
  onClose?: noop
  onSave?: noop
  cancelBtnText?: string
  saveBtnText?: string
  // custom style
  modalStyle?: {}
  headerStyle?: {}
  bodyStyle?: {}
  footerStyle?: {}
}
