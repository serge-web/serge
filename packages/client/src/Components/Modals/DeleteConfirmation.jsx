import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { deleteSelectedForce, deleteSelectedChannel, clearWargames } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import '@serge/themes/App.scss'

const DeleteModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)
  const wargame = useSelector(state => state.wargame)

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDelete = () => {
    const { type, data } = currentModal.data
    const curTab = wargame.currentTab

    if (type === 'force') {
      const isUmpire = wargame.data[curTab].forces.find((f) => f.uniqid === data).isUmpire
      if (isUmpire) return
      dispatch(deleteSelectedForce(wargame.currentWargame, data))
    }

    if (type === 'channel') {
      dispatch(deleteSelectedChannel(wargame.currentWargame, data))
    }

    if (type === 'games') {
      dispatch(clearWargames())
    }

    dispatch(modalAction.close())
  }

  if (!currentModal.open) return false

  const buttons = [{
    name: 'delete',
    color: 'primary',
    onClick: onDelete,
    children: 'Delete'
  }, {
    name: 'cancel',
    color: 'secondary',
    onClick: onHideModal,
    children: 'Cancel'
  }]

  return (
    <ModalWrapper>
      <div className="display-text-wrapper">
        <h3>Delete { currentModal.data && currentModal.data.type }</h3>
        <p>This action is permanent.<br/>Are you sure?</p>
        <div className="buttons">
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </ModalWrapper>
  )
}
export default DeleteModal
