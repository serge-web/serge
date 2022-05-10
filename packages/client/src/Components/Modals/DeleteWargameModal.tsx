import { Confirm } from '@serge/components'
import { ModalData, RootState } from '@serge/custom-types'
import '@serge/themes/App.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWargame } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'

const DeleteWargameModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDeleteWargame = () => {
    const { data } = currentModal.data as ModalData
    dispatch(deleteWargame(data as string))
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  return (
    <Confirm
      isOpen={currentModal.open}
      title='Delete'
      message='This will permanently delete the wargame. Are you sure?'
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDeleteWargame}
    />
  )
}

export default DeleteWargameModal
