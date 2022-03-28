import { Confirm } from '@serge/components'
import '@serge/themes/App.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWargame } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'

const DeleteWargameModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDeleteWargame = () => {
    dispatch(deleteWargame(currentModal.data))
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return false

  return (
    <Confirm
      isOpen={currentModal.open}
      title="Delete"
      message="This will permanently delete the wargame. Are you sure?"
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDeleteWargame}
    />
  )
}

export default DeleteWargameModal
