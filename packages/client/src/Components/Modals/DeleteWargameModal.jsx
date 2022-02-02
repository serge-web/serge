import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { deleteWargame } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import '@serge/themes/App.scss'

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

  const buttons = [{
    name: 'cancel',
    color: 'secondary',
    onClick: onHideModal,
    children: 'Cancel'
  }, {
    name: 'delete',
    color: 'primary',
    onClick: onDeleteWargame,
    children: 'Delete'
  }]

  return (
    <ModalWrapper>
      <div className="display-text-wrapper">
        <h3>Delete</h3>
        <p>This will permanently delete the wargame.<br/>Are you sure?</p>
        <div className="buttons">
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </ModalWrapper>
  )
}

export default DeleteWargameModal
