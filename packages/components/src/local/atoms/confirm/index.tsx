import React from 'react'
import { CustomDialog } from '../custom-dialog'
import { Props } from './types/props'

/* Render component */
export const Confirm: React.FC<Props> = ({ isOpen, message, onCancel, onConfirm }: Props) => {
  return (
    <CustomDialog
      isOpen={isOpen}
      header='Confirm'
      cancelBtnText='No'
      saveBtnText='Yes'
      onClose={onCancel}
      content={message}
      onSave={onConfirm}
    />
  )
}

export default Confirm
