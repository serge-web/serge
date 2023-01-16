import noop from 'lodash'
import React from 'react'
import ReactModal from 'react-modal'

export type Props = {
  isOpen: boolean
  header?: string
  content?: string
  onClose?: noop
  onSave?: noop
  cancelBtnText?: string
  saveBtnText?: string
  children?:React.ReactElement
  // custom style
  modalStyle?: ReactModal.Styles
  headerStyle?: React.CSSProperties
  bodyStyle?: React.CSSProperties
  footerStyle?: React.CSSProperties
}
